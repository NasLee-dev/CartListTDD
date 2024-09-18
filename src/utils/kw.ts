export const convertKW = (won: number) => {
  if (won < 0) return '';
  return won.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
