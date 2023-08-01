const PeoplesCard = ({ peoplesData }) => {
  if (peoplesData.length === 0) return 'No Results!!!';
  return peoplesData.map((item) => <li key={item.person.id}>{item.person.name}</li>);
};
export default PeoplesCard;
