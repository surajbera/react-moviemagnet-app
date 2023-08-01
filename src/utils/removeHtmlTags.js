export const removeHtmlTags = (inputString) => {
  return inputString.replace(/<\/?[^>]+>/g, '');
};
