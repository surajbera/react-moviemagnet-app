export const removeHtmlTags = (inputString, trim = true) => {
  const cleanSummary = inputString.replace(/<\/?[^>]+>/g, '');
  if (trim) {
    return cleanSummary.length > 100
      ? `${cleanSummary.substring(0, 120)}...`
      : `${cleanSummary}...`;
  } else {
    return cleanSummary;
  }
};
