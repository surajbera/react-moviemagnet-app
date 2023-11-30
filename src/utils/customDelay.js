/* eslint-disable no-unused-vars */

export const customDelay = (milliSeconds = 1000) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve();
    }, milliSeconds);
  });
};
