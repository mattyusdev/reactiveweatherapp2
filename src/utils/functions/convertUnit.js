export const convertUnit = (unit, temp) => {
  if (temp) {
    if (unit === "c") return `${Math.round(temp)}° C`;
    const tempToF = (temp * 9) / 5 + 32;
    return `${Math.round(tempToF)}° F`;
  } else {
    return "";
  }
};
