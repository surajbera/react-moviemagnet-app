export const customDelay = (milliSeconds = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, milliSeconds);
  });
};
