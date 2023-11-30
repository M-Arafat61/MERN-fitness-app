import ButtonOutline from "../../Buttons/ButtonOutline";

const CarousalContent = ({ title, description, moreDescription }) => {
  return (
    <div className='top-1/4 justify-center md:top-1/4 md:px-20 absolute   flex flex-col items-center text-center space-y-2 md:space-y-5 md:mr-16 '>
      <p className='text-lg text-extended-teal md:text-5xl font-bold'>
        {title}
      </p>
      <p className='text-sm px-16 md:text-2xl md:font-bold text-white'>
        {description}
      </p>
      <p className='hidden md:flex text-sm px-5  text-white md:text-2xl font-bold'>
        {moreDescription}
      </p>

      <div>
        <ButtonOutline buttonText={"Your Classes"}></ButtonOutline>
      </div>
    </div>
  );
};

export default CarousalContent;
