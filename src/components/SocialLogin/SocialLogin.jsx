import { Icon } from "@iconify/react";

const SocialLogin = () => {
  return (
    <div>
      <div className='form-control '>
        <button className='border p-1 border-black rounded-full flex  justify-center items-center w-full'>
          <Icon className='text-2xl' icon='bi:google' />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
