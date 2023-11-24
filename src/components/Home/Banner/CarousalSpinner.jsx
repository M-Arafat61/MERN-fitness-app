import { Icon } from "@iconify/react";

const CarousalSpinner = () => {
  return (
    <div className='bg-white'>
      <div className='absolute top-28 left-0  bg-white rounded-r-lg p-3'>
        <Icon
          className='text-4xl text-black animate-spin'
          icon='fontisto:spinner-cog'
        ></Icon>
      </div>
    </div>
  );
};

export default CarousalSpinner;
