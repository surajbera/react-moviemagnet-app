import NotFoundImg from '../../assets/not-found.jpg';

const PeoplesCard = ({ data }) => {
  console.log(data);

  return (
    <div>
      <p>{data.name}</p>
      <img src={data.image?.medium ? data.image.medium : NotFoundImg} alt={data.name} />
    </div>
  );
};
export default PeoplesCard;
