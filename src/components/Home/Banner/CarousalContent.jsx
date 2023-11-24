import ButtonOutline from "../../Buttons/ButtonOutline";

const CarousalContent = ({ title, description, moreDescription }) => {
  return (
    <div className='top-1/4 px-20 absolute   flex flex-col items-center text-center space-y-5 mr-16 '>
      <p className='text-extended-teal text-5xl font-bold'>{title}</p>
      <p className='text-2xl font-bold text-white'>{description}</p>
      <p className='text-white text-2xl font-bold'>{moreDescription}</p>

      <ButtonOutline buttonText={"Your Classes"}></ButtonOutline>
    </div>
  );
};

export default CarousalContent;
