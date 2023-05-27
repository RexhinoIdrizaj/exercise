/*
 *  Get the difference in hours between two timestamps.
 */
export const calcTimeDiffInHours = (
  currentTimestamp: string,
  previousTimestamp: string
) => {
  const diffInMilliseconds =
    new Date(currentTimestamp).getTime() -
    new Date(previousTimestamp).getTime();
  return diffInMilliseconds / 3600000;
};

export const CONSTANTS = {
  batteryThreshold: 30,
};
