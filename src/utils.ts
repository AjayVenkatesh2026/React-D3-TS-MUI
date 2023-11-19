const formatNumber = (n: number): string => {
  if (n >= 0 && n <= 9) {
    return `0${n}`;
  }

  return `${n}`;
};

const getRandomNumber = (minNumber: number, maxNumber: number): number => {
  const gap = maxNumber - minNumber;
  return Math.floor(Math.random() * gap + minNumber);
};

const getLineGraphData = () => {
  const min = 25;
  const max = 100;
  const LEN = 10;
  const ans = [];
  for (let i = 0; i < LEN; i++) {
    ans.push(getRandomNumber(min, max));
  }

  return ans;
};

const getRandamoizedGraphsData = () => {
  const lineGraphData = getLineGraphData();

  return {
    lineGraphData,
  };
};

export { formatNumber, getRandamoizedGraphsData };
