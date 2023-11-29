import toast from "react-hot-toast";
import { useState } from "react";
import Container from "../../../../components/Shared/Container/Container";
import useAuth from "../../../../hooks/useAuth";

const ProfileSettings = () => {
  const { user, updateUserProfile } = useAuth();

  const [updatedUser, setUpdatedUser] = useState({
    photoURL: user?.photoURL,
    displayName: user?.displayName,
  });

  const handleProfileUpdate = async e => {
    e.preventDefault();
    const { name, photoURL } = e.target;

    try {
      await updateUserProfile(name.value, photoURL.value);
      toast.success("Profile update successful!");

      setUpdatedUser({
        ...updatedUser,
        photoURL: photoURL.value,
        displayName: name.value,
      });
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Container>
      <div className='flex justify-center items-center space-x-4 mt-20'>
        <div>
          <img
            src={user?.photoURL}
            alt='User Profile'
            className='w-32 h-32 rounded-full'
          />
        </div>
        <div>
          <h2 className='text-xl font-semibold'>{user?.displayName}</h2>
          <p className='text-gray-500'>{user?.email}</p>
        </div>
      </div>
      <div className='mx-auto w-3/4'>
        <form onSubmit={handleProfileUpdate} className='mt-8'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Photo URL
            </label>
            <input
              type='text'
              name='photoURL'
              defaultValue={user?.photoURL}
              className='mt-1 block w-full border p-2  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='text'
              name='email'
              defaultValue={user?.email}
              readOnly
              className='mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>
              Display Name
            </label>
            <input
              type='text'
              name='name'
              defaultValue={user?.displayName}
              className='mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            />
          </div>
          <div>
            <button
              type='submit'
              className='py-2 px-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600'
            >
              Update profile
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ProfileSettings;
