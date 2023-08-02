import { createContext, useReducer, useEffect } from 'react';
import { customConsoleLog } from '../utils/customConsoleLog';

export const AppContext = createContext();

const STAR_SHOW = 'STAR_SHOW';
const UNSTAR_SHOW = 'UNSTAR_SHOW';
const TOGGLE_UI_MODE = 'TOGGLE_UI_MODE';

const storedStarredIds = localStorage.getItem('starredIds');

const initialState = {
  starredIds: storedStarredIds ? JSON.parse(storedStarredIds) : [],
  uiMode: 'dark',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case STAR_SHOW:
      return {
        ...state,
        starredIds: [...state.starredIds, action.payload],
      };
    case UNSTAR_SHOW:
      return {
        ...state,
        starredIds: state.starredIds.filter((item) => item !== action.payload),
      };
    case TOGGLE_UI_MODE:
      return {
        ...state,
        uiMode: state.uiMode === 'dark' ? 'light' : 'dark',
      };

    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    localStorage.setItem('starredIds', JSON.stringify(state.starredIds));
  }, [state.starredIds]);

  customConsoleLog('State inside AppContext', '#d4d4d8');

  const starShow = (id) => {
    dispatch({ type: STAR_SHOW, payload: id });
  };

  const unstarShow = (id) => {
    dispatch({ type: UNSTAR_SHOW, payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, starShow, unstarShow }}>{children}</AppContext.Provider>
  );
};

/* 
  The use of useReducer ensures that the state is updated immutably, so the reference to the starredIds array will only change when the STAR or UNSTAR actions are dispatched. This means that the useEffect hook should only run when the starredIds array is actually modified, not on every re-render.
*/
