import { createContext, useReducer } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const STAR = 'STAR';
  const UNSTAR = 'UNSTAR';
  const UI_MODE = 'UI_MODE';

  const initialState = {
    starredIds: [],
    uiMode: 'dark',
  };

  const appReducer = (state, action) => {
    switch (action.type) {
      case STAR:
        return {
          ...state,
          starredIds: [...state.starredIds, action.payload],
        };
      case UNSTAR:
        return {
          ...state,
          starredIds: state.starredIds.filter((item) => item !== action.payload),
        };
      case UI_MODE:
        return {
          ...state,
          uiMode: action.payload,
        };

      default:
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  console.log(state);

  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};
