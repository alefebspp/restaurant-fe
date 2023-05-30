export const getStringFromDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses são baseados em zero
  const day = String(date.getDate()).padStart(2, '0');

  const dateString = `${year}-${month}-${day}`;
  return dateString;
};
