import NotFoundImg from '../../assets/not-found.jpg';

const PeoplesCard = ({ data }) => {
  return (
    <div className='border-2 border-solid border-gray-300 rounded-lg p-4 dark:border-slate-600 flex flex-col'>
      <div className='w-[200px] mx-auto mb-4 h-[300px] max-w-full'>
        <img
          src={data.image?.medium ? data.image.medium : NotFoundImg}
          alt={data.name}
          className='rounded-xl w-full h-full object-cover block'
        />
      </div>

      <div className='flex-1 flex flex-col'>
        <p className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {data.name} {data.gender && `(${data.gender})`}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {data.country ? `Comes from ${data.country.name}` : 'Country Not Known'}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {data.birthday ? `Born on ${data.birthday}` : 'Birthday Not Known'}
        </p>
      </div>
    </div>
  );
};
export default PeoplesCard;
