export const formatHash = (hash?: string) => {
  if (!hash) return '-';
  return hash.slice(0, 4) + '-' + hash.slice(-4);
};

export const formatTxAddress = (hash?: string) => {
  if (!hash) return '-';
  return hash.slice(0, 9) + '-' + hash.slice(-9);
};

export const formatBtcValue = (value?: number) => {
  if (!value) return '0';
  return (value / Math.pow(10, 8)).toFixed(8);
};
