import { deviceLogsMocks, oneDeviceLogsMocks } from "../../mocks";
import { getDeviceStatistics, transformDataLogs } from "../transformerLogs";

describe("Test transformers for logs", () => {
  test("calculates device statistics correctly", () => {
    const serialNumber = "NGTT-0040";
    const expectedDeviceStatistics = {
      serialNumber: "NGTT-0040",
      usagePerDay: 0.36260759411314053,
      hasIssue: true,
      percentPerDay: 36,
    };

    const result = getDeviceStatistics(oneDeviceLogsMocks, serialNumber);

    expect(result).toEqual(expectedDeviceStatistics);
  });

  test("transforms data logs correctly", () => {
    const expectedModifiedAcademiesData = {
      "30006": {
        id: "30006",
        devices: [
          {
            serialNumber: "1805C67HD02332",
            usagePerDay: 0.018777982780415935,
            hasIssue: false,
            percentPerDay: 2,
          },
        ],
        batteryIssues: 0,
      },
      "30021": {
        id: "30021",
        devices: [
          {
            serialNumber: "1805C67HD01951",
            usagePerDay: 0,
            hasIssue: false,
            percentPerDay: 0,
          },
        ],
        batteryIssues: 0,
      },
      "30015": {
        id: "30015",
        devices: [
          {
            serialNumber: "NGTT-0040",
            usagePerDay: 0.36260759411314053,
            hasIssue: true,
            percentPerDay: 36,
          },
        ],
        batteryIssues: 1,
      },
    };

    const result = transformDataLogs(deviceLogsMocks);

    expect(result).toEqual(expectedModifiedAcademiesData);
  });
});
