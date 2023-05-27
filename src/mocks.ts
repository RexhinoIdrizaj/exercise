export const deviceStatisticsMocks = [
  {
    serialNumber: "Serial1",
    percentPerDay: 50,
    usagePerDay: 0.5,
    hasIssue: true,
  },
  {
    serialNumber: "Serial2",
    percentPerDay: 10,
    usagePerDay: 0.1,
    hasIssue: false,
  },
];

export const deviceStatisticsWithUnknownMocks = [
  {
    serialNumber: "Serial3",
    percentPerDay: 0,
    usagePerDay: 0,
    hasIssue: false,
  },
];

export const allDeviceStatisticsMocks = deviceStatisticsMocks.concat(
  deviceStatisticsWithUnknownMocks
);

export const academiesMocks = [
  {
    id: "academy1",
    batteryIssues: 2,
    devices: [
      {
        serialNumber: "Serial1",
        percentPerDay: 50,
        usagePerDay: 0.5,
        hasIssue: true,
      },
      {
        serialNumber: "Serial3",
        percentPerDay: 0,
        usagePerDay: 0,
        hasIssue: false,
      },
    ],
  },
  {
    id: "academy2",
    batteryIssues: 0,
    devices: [
      {
        serialNumber: "Serial2",
        percentPerDay: 10,
        usagePerDay: 0.1,
        hasIssue: false,
      },
    ],
  },
];

export const oneDeviceLogsMocks = [
  {
    academyId: 30015,
    batteryLevel: 0.83,
    employeeId: "T1001479",
    serialNumber: "NGTT-0040",
    timestamp: "2019-05-17T07:12:47.344+01:00",
  },
  {
    academyId: 30015,
    batteryLevel: 0.82,
    employeeId: "T1001479",
    serialNumber: "NGTT-0040",
    timestamp: "2019-05-17T08:02:17.332+01:00",
  },
  {
    academyId: 30015,
    batteryLevel: 0.81,
    employeeId: "T1001479",
    serialNumber: "NGTT-0040",
    timestamp: "2019-05-17T08:41:11.491+01:00",
  },
  {
    academyId: 30015,
    batteryLevel: 0.92,
    employeeId: "T1001479",
    serialNumber: "NGTT-0040",
    timestamp: "2019-05-21T16:20:24.658+01:00",
  },
  {
    academyId: 30015,
    batteryLevel: 0.55,
    employeeId: "T1001479",
    serialNumber: "NGTT-0040",
    timestamp: "2019-05-22T16:40:47.412+01:00",
  },
];

export const deviceLogsMocks = [
  {
    academyId: 30006,
    batteryLevel: 0.51,
    employeeId: "T1001417",
    serialNumber: "1805C67HD02332",
    timestamp: "2019-05-17T07:48:49.147+01:00",
  },
  {
    academyId: 30006,
    batteryLevel: 0.5,
    employeeId: "T1001417",
    serialNumber: "1805C67HD02332",
    timestamp: "2019-05-17T07:57:08.29+01:00",
  },
  {
    academyId: 30006,
    batteryLevel: 0.48,
    employeeId: "T1001215",
    serialNumber: "1805C67HD02332",
    timestamp: "2019-05-18T22:09:23.143+01:00",
  },
  {
    academyId: 30021,
    batteryLevel: 0.63,
    employeeId: "T1001452",
    serialNumber: "1805C67HD01951",
    timestamp: "2019-05-23T16:28:02.256+01:00",
  },
  ...oneDeviceLogsMocks,
];
