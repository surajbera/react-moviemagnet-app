import NotFoundImg from '../../assets/not-found.jpg';

const PeoplesCard = ({ data }) => {
  console.log(data);

  return (
    <div className='border-2 border-cyan-500 border-solid mb-10'>
      <img
        src={data.image?.medium ? data.image.medium : NotFoundImg}
        alt={data.name}
        className='mb-2'
      />
      <p className='border-2 border-cyan-600 border-solid mb-2'>
        {data.name} {data.gender && `(${data.gender})`}
      </p>
      <p className='border-2 border-cyan-600 border-solid'>
        {data.country ? `Comes from ${data.country.name}` : 'Country Not Known'}
      </p>
      <p className='border-2 border-cyan-600 border-solid'>
        {data.birthday ? `Born on ${data.birthday}` : 'Birthday Not Known'}
      </p>
    </div>
  );
};
export default PeoplesCard;
