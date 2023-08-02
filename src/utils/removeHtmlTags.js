export const removeHtmlTags = (inputString) => {
  const cleanSummary = inputString.replace(/<\/?[^>]+>/g, '');
  return cleanSummary.length > 100 ? `${cleanSummary.substring(0, 120)}...` : `${cleanSummary}...`;
};
