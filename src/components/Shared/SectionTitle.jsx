const SectionTitle = ({ heading }) => {
  return (
    <div className='mt-10 text-start space-y-2 mx-auto'>
      <h3
        className='text-2xl font-bold uppercase 
            subHeading  py-3'
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
