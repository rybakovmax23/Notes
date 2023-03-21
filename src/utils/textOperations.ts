export const getTagsFromText = (text: string) => {
  const arr = text.split(/[\s,/\n]+/);
  return arr.filter((el) => el[0] === '#' && el.length > 1);
};

export const applyHighlights = (text: string) => {
  return text
    .replace(/\n$/g, '\n\n')
    .replace(/(^|\W)#(\w+)/g, '<mark>$&</mark>');
};
