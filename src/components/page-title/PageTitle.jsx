const PageTitle = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className='text-center text-3xl uppercase pt-6 pb-2 tracking-widest font-medium lg:text-4xl lg:pt-7'>
        {title}
      </h1>
      <p className='text-center'>{subTitle}</p>
    </div>
  );
};
export default PageTitle;
