import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useAppContext = () => {
  const appContext = useContext(AppContext);

  if (!appContext) {
    throw Error('Make sure useAppContext is used within AppContextProvider');
  }

  return appContext;
};
