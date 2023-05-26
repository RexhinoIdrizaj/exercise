import { TDeviceLogs, TModifiedAcademiesData } from "../models";
import { calculateTimestampDiffInMinutes } from "../utils";

export const transformDataLogs = (data: TDeviceLogs[]) => {
  const wantedResult: TModifiedAcademiesData = {};
  data.forEach((item) => {
    const { academyId, batteryLevel, serialNumber, timestamp } = item;
    const academyData = wantedResult[academyId] || { batteryIssues: 0 };
    const device = academyData[serialNumber] || {
      previousEntry: null,
      issue: false,
      avgPerctDay: 0,
      track: { diff: 0, minutes: 0 },
    };
    if (device.issue) return;
    if (device.previousEntry) {
      const {
        batteryLevel: previousBatteryLevel,
        timestamp: previousTimestamp,
      } = device.previousEntry;
      const levelDiff = batteryLevel - previousBatteryLevel;
      const timestampDiff = calculateTimestampDiffInMinutes(
        timestamp,
        previousTimestamp
      );

      if (levelDiff < 0) {
        device.track.diff += Math.abs(levelDiff);
        device.track.minutes += timestampDiff;
      }

      if (levelDiff > 0) {
        const { diff, minutes } = device.track;
        const percentage = ((diff * 24 * 60) / minutes) * 100;
        const isFaulty = percentage > 30;

        if (isFaulty) {
          academyData.batteryIssues++;
          device.issue = true;
          device.avgPerctDay = percentage;
        }
      }
    }
    device.previousEntry = item;
    academyData[serialNumber] = device;
    wantedResult[academyId] = academyData;
    return wantedResult;
  });
};
