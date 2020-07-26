export const isAllowedKey = (key) => {
  switch (key) {
    case 38:
      return false;
    case 40:
      return false;
    case 13:
      return false;
    case 8:
      return false;
    default:
      return true;
  }
};
