const ShowsCard = ({ showsData }) => {
  if (showsData.length === 0) return 'No Results!!!';
  return showsData.map((item) => <li key={item.show.id}>{item.show.name}</li>);
};
export default ShowsCard;
