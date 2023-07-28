import { customConsoleLog } from '../utils/customConsoleLog';
import { customDelay } from '../utils/customDelay';

const BASE_URL = 'https://api.tvmaze.com';

export const apiGet = async (queryString) => {
  // throw new Error('Something bad happened');
  customConsoleLog(`${BASE_URL}${queryString}`, '#cffafe');
  const response = await fetch(`${BASE_URL}${queryString}`);
  const data = await response.json();
  await customDelay(1500);
  return data;
};

export const fetchShowsData = (query) => apiGet(`/search/shows?q=${query}`);
