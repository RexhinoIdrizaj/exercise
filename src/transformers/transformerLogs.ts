import {
  TDeviceLog,
  TGroupedData,
  TModifiedAcademiesData,
  TNullable,
  TSingleAcademyData,
  TWantedDeviceData,
} from "../models";
import { CONSTANTS, calcTimeDiffInHours } from "../utils";

const getDeviceStatistics = (
  deviceLogs: TDeviceLog[],
  serialNumber: string
): TWantedDeviceData => {
  let totalBatteryUsage: number = 0;
  let totalTimeInHours: number = 0;
  let previousBatteryLevel: TNullable<number> = null;

  deviceLogs.forEach((log, index) => {
    const { batteryLevel, timestamp } = log;
    if (previousBatteryLevel !== null && batteryLevel < previousBatteryLevel) {
      const batteryUsage = previousBatteryLevel - batteryLevel;
      const previousTimestamp = deviceLogs[index - 1].timestamp;
      const timeDiff = calcTimeDiffInHours(timestamp, previousTimestamp);
      const newBattLevel = totalBatteryUsage + batteryUsage;
      totalBatteryUsage = newBattLevel;
      totalBatteryUsage = newBattLevel;
      totalTimeInHours += timeDiff;
    }
    previousBatteryLevel = batteryLevel;
  });

  const usagePerDay =
    totalTimeInHours > 0
      ? (totalBatteryUsage * 24) / totalTimeInHours
      : totalTimeInHours;
  const percentPerDay = usagePerDay * 100;
  const roundedPercentPerDay = Math.round(usagePerDay * 100);
  const hasIssue = percentPerDay > CONSTANTS.batteryThreshold;

  return {
    serialNumber,
    usagePerDay,
    hasIssue,
    percentPerDay: roundedPercentPerDay,
  };
};

const groupeDevicesPerAcademy = (data: TDeviceLog[]): TGroupedData =>
  data.reduce((academies: TGroupedData, log) => {
    const { serialNumber, academyId } = log;
    const strAcademyId = academyId.toString();
    academies = {
      ...academies,
      [strAcademyId]: {
        ...academies[academyId],

        [serialNumber]: [...(academies[academyId]?.[serialNumber] || []), log],
      },
    };
    return academies;
  }, {});

export const transformDataLogs = (
  data: TDeviceLog[]
): TModifiedAcademiesData => {
  const academyData = groupeDevicesPerAcademy(data);

  const wantedAcademyData: TModifiedAcademiesData = {};

  for (const academyId in academyData) {
    const currentAcademy = academyData[academyId];

    wantedAcademyData[academyId] = Object.entries(currentAcademy).reduce(
      (acc: TSingleAcademyData, [serialNumber, deviceLogs]) => {
        const deviceStatistics = getDeviceStatistics(deviceLogs, serialNumber);
        const { hasIssue } = deviceStatistics;

        if (hasIssue) {
          acc.batteryIssues = acc.batteryIssues + 1;
        }

        acc.devices.push(deviceStatistics);

        return acc;
      },
      { devices: [], batteryIssues: 0, id: academyId }
    );
  }
  return wantedAcademyData;
};
