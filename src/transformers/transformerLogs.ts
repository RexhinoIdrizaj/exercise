import {
  TDeviceLog,
  TGroupedData,
  TModifiedAcademiesData,
  TNullable,
  TSingleAcademyData,
  TWantedDeviceData,
} from "../models";
import { calcTimeDiffInHours } from "../utils";

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
  const hasIssue = percentPerDay > 30;

  return {
    serialNumber,
    usagePerDay,
    hasIssue,
    percentPerDay: roundedPercentPerDay,
  };
};

export const transformDataLogs = (
  data: TDeviceLog[]
): TModifiedAcademiesData => {
  const academyData: TGroupedData = data.reduce(
    (academies: TGroupedData, log) => {
      const { serialNumber, academyId } = log;
      const strAcademyId = academyId.toString();
      academies = {
        ...academies,
        [strAcademyId]: {
          ...academies[academyId],

          [serialNumber]: [
            ...(academies[academyId]?.[serialNumber] || []),
            log,
          ],
        },
      };
      return academies;
    },
    {}
  );

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

  console.log(
    "🚀 ~ file: transformerLogs.ts:57 ~ wantedAcademyData:",
    wantedAcademyData
  );

  return wantedAcademyData;
  // const wantedResult: TModifiedAcademiesData = {};

  // data.forEach((item) => {
  //   const { academyId, batteryLevel, serialNumber, timestamp } = item;
  // const academyData = wantedResult[academyId] || {
  //   batteryIssues: 0,
  //   id: academyId,
  //   devices: {},
  // };
  //   const device = academyData.devices[serialNumber] || {
  //     entries: [],
  //     serialNumber,
  //     previousEntry: null,
  //     issue: false,
  //     avgPerctDay: 0,
  //     track: { dischargedLevel: 0, minutes: 0, isCharged: false },
  //   };
  //   device.entries.push(item);
  //   if (device.track.isCharged) return;
  //   if (device.previousEntry) {
  //     const {
  //       batteryLevel: previousBatteryLevel,
  //       timestamp: previousTimestamp,
  //     } = device.previousEntry;

  //     const batteryLevelDiff = batteryLevel - previousBatteryLevel;
  //     const timestampDiff = calculateTimestampDiffInMinutes(
  //       timestamp,
  //       previousTimestamp
  //     );

  //     if (batteryLevelDiff > 0) {
  //       device.track.isCharged = true;
  //       return;
  //     }

  //     const newDischLevel =
  //       device.track.dischargedLevel + Math.abs(batteryLevelDiff);
  //     device.track.dischargedLevel = parseFloat(newDischLevel.toFixed(2));
  //     device.track.minutes += Math.round(timestampDiff);
  //   }

  //   device.previousEntry = item;
  //   academyData.devices[serialNumber] = device;
  //   wantedResult[academyId] = academyData;
  //   return wantedResult;
  // });
  // console.log("🚀 ~ file: transformerLogs.ts:8 ~ wantedResult:", wantedResult);
  // return wantedResult;
};
