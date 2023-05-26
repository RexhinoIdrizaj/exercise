export const calcTimeDiffInHours = (
  currentTimestamp: string,
  previousTimestamp: string
) => {
  const diffInMilliseconds =
    new Date(currentTimestamp).getTime() -
    new Date(previousTimestamp).getTime();
  return diffInMilliseconds / 3600000;
};

export const roundFloatValues = (value: number) => {
  return parseInt(value.toFixed(2));
};
