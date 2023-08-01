import { useReducer, useEffect } from 'react';
import ShowsCard from '../shows-card/ShowsCard';

const STAR = 'STAR';
const UNSTAR = 'UNSTAR';
const starredItemsReducer = (state, action) => {
  switch (action.type) {
    case STAR:
      return [...state, action.payload];

    case UNSTAR:
      return state.filter((item) => item !== action.payload);

    default:
      return state;
  }
};

const ShowsGrid = ({ showsData }) => {
  const initialStarredIds = JSON.parse(localStorage.getItem('starredIds')) || [];
  const [starredIds, dispatch] = useReducer(starredItemsReducer, initialStarredIds);

  useEffect(() => {
    localStorage.setItem('starredIds', JSON.stringify(starredIds));
  }, [starredIds]);

  const dispatchStarToggle = (id) => {
    const isStarred = starredIds.includes(id);
    if (isStarred) {
      dispatch({ type: UNSTAR, payload: id });
    } else {
      dispatch({ type: STAR, payload: id });
    }
  };

  if (showsData.length === 0) return 'No Results!!!';
  return showsData.map((item) => (
    <ShowsCard key={item.show.id} data={item.show} dispatchStarToggle={dispatchStarToggle} />
  ));
};
export default ShowsGrid;
