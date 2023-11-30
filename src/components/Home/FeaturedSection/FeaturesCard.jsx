const FeaturesCard = ({ cardImage, cardTitle, cardDesc }) => {
  return (
    <div className=' bg-[#27374D] text-white p-2 rounded-lg shadow flex flex-col justify-between'>
      <img
        className='rounded-t-lg overflow-hidden h-[240px] object-cover w-full'
        src={cardImage}
        alt=''
      />

      <div className='p-5 hover:bg-extended-teal hover:text-black'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight'>{cardTitle}</h5>
        <p className='font-normal'>{cardDesc}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
