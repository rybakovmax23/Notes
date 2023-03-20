export const getTagsFromText = (text: string) => {
  const arr = text.split(' ');
  return arr.filter((el) => el[0] === '#');
};
