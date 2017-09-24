const netPartInGross = 0.68;

export default net =>
  Math.round(net / netPartInGross);
