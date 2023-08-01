import axios from 'axios';
import { customConsoleLog } from '../utils/customConsoleLog';
import { customDelay } from '../utils/customDelay';

const BASE_URL = 'https://api.tvmaze.com';

export const apiGet = async (queryString) => {
  try {
    customConsoleLog(`${BASE_URL}${queryString}`, '#0891b2');
    const response = await axios.get(`${BASE_URL}${queryString}`);
    await customDelay(1500);
    return response.data;
  } catch (error) {
    // You can log or handle the error here, or throw it to be caught by a higher-level error handler
    console.error(`Error fetching data from ${BASE_URL}${queryString}:`, error);
    throw error; // Optional: re-throw the error if you want calling code to handle it
  }
};

export const getShowsByQuery = (query) => apiGet(`/search/shows?q=${query}`);
export const getPeoplesByQuery = (query) => apiGet(`/search/people?q=${query}`);
