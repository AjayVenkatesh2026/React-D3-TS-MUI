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

const getCashFlowGraphData = () => {
  const inFlowData = getRandomizedData({ min: 25, max: 100, len: 6 });
  const outFlowData = [];
  for (const i of inFlowData) {
    const min = Math.max(15, Math.floor(i / 2));
    const max = Math.max(i - 15, min);
    outFlowData.push(getRandomNumber(min, max));
  }

  return {
    inFlowData,
    outFlowData,
  };
};

const getRandamoizedGraphsData = () => {
  const lineGraphData = getLineGraphData();
  const invoiceGraphData = getInvoiceGraphData();
  const cashFlowGraphData = getCashFlowGraphData();

  return {
    lineGraphData,
    invoiceGraphData,
    cashFlowGraphData,
  };
};

export { formatNumber, getRandamoizedGraphsData };
