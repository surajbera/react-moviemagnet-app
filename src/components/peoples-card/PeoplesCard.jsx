import NotFoundImg from '../../assets/not-found.jpg';

const PeoplesCard = ({ data }) => {
  return (
    <div className='shadow-2xl dark:shadow-gray-600/50 rounded-lg p-4 dark:border-slate-600 flex flex-col'>
      <div className='w-full mx-auto mb-4 h-[300px] max-w-full'>
        <img
          src={data.image?.medium ? data.image.medium : NotFoundImg}
          alt={data.name}
          className='rounded-xl w-full h-full object-cover block'
        />
      </div>

      <div className='flex-1 flex flex-col'>
        <p className='mb-2 text-xl verysmall:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {data.name} {data.gender && `(${data.gender})`}
        </p>
        <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
          {data.country ? `Comes from ${data.country.name}` : 'Country Not Known'}
        </p>
        <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
          {data.birthday ? `Born on ${data.birthday}` : 'Birthday Not Known'}
        </p>
      </div>
    </div>
  );
};
export default PeoplesCard;
