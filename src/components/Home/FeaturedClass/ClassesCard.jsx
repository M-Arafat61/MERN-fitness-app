const ClassesCard = ({ eachClass }) => {
  // console.log(eachClass);
  const { photo, title, instructor, difficulty } = eachClass;
  return (
    <div className='md:mt-10'>
      <div className='flex justify-between flex-col bg-base-100 shadow-xl space-y-2'>
        <div className='text-center'>
          <h2 className='text-xl font-medium'>{title}</h2>
          <p className='text-extended-teal uppercase'>{difficulty}</p>
          <p className='text-xl font-bold'>{instructor}</p>
        </div>

        <img
          className='rounded-b-lg overflow-hidden pt-6'
          src={photo}
          alt='Shoes'
        />
      </div>
    </div>
  );
};

export default ClassesCard;
