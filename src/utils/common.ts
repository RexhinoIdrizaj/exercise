export const calculateTimestampDiffInMinutes = (
  currentTimestamp: string,
  previousTimestamp: string
) => {
  const diffInMilliseconds =
    new Date(currentTimestamp).getTime() -
    new Date(previousTimestamp).getTime();
  return Math.abs(diffInMilliseconds / 60000);
};
