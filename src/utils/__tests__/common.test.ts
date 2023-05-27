import { calcTimeDiffInHours } from "../common";

describe("calcTimeDiffInHours", () => {
  test("calculates the time difference in hours correctly", () => {
    const currentTimestamp = "2023-05-17T10:00:00.000Z";
    const previousTimestamp = "2023-05-17T08:00:00.000Z";
    const expectedDiffInHours = 2;

    const result = calcTimeDiffInHours(currentTimestamp, previousTimestamp);

    expect(result).toEqual(expectedDiffInHours);
  });
});
