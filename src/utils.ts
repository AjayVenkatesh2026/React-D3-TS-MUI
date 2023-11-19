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

const getRandomizedData = ({ min = 0, max = 100, len = 5 }) => {
  const ans = [];
  for (let i = 0; i < len; i++) {
    ans.push(getRandomNumber(min, max));
  }

  return ans;
};

const getLineGraphData = () => {
  return getRandomizedData({ min: 25, max: 100, len: 10 });
};

const getInvoiceGraphData = () => {
  return getRandomizedData({ min: 25, max: 100, len: 6 });
};

const getRandamoizedGraphsData = () => {
  const lineGraphData = getLineGraphData();
  const invoiceGraphData = getInvoiceGraphData();

  return {
    lineGraphData,
    invoiceGraphData,
  };
};

export { formatNumber, getRandamoizedGraphsData, getInvoiceGraphData };
