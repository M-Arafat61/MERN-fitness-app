import { Link } from "react-router-dom";
import Container from "../Container/Container";
import CustomNavLink from "./CustomNavLink";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  const navItems = (
    <div className='md:flex text-lg'>
      <div className='mr-2'>
        <CustomNavLink to='/'>Home</CustomNavLink>
      </div>
      <div className='mr-2'>
        <CustomNavLink to='/gallery'>Gallery</CustomNavLink>
      </div>
      <div className='mr-2'>
        <CustomNavLink to='/trainer'>Trainer</CustomNavLink>
      </div>
      <div className='mr-2'>
        <CustomNavLink to='/classes'>Classes</CustomNavLink>
      </div>
      <div className='mr-2'>
        <CustomNavLink to='/dashboard'>Dashboard</CustomNavLink>
      </div>
      <div className=''>
        <CustomNavLink to='/community'>Forums</CustomNavLink>
      </div>
    </div>
  );

  return (
    <Container>
      <div className='navbar py-3 text-white'>
        <div className='navbar-start'>
          <div className='dropdown z-10 '>
            <label tabIndex={0} className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#27374D] rounded-box w-40'
            >
              {navItems}
            </ul>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <div className='hidden md:flex w-20 '>
              <img
                className='rounded-full '
                src='https://i.ibb.co/vhKPqcJ/logo.jpg'
                alt=''
              />
            </div>
            <div className='text-2xl font-bold '>
              SyncFit
              <span className='text-extended-teal font-bold '>Connect</span>
            </div>
          </div>
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal'>{navItems}</ul>
        </div>
        {user ? (
          <>
            <div className='navbar-end flex flex-col items-end gap-5'>
              <div className='avatar'>
                <div className='w-12 mask mask-squircle'>
                  <img src={user?.photoURL} alt='' />
                </div>
              </div>
              <Link
                onClick={handleLogout}
                className='hover:font-bold text-xl '
                to='/login'
              >
                Logout
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className='navbar-end'>
              <Link className='text-xl hover:font-bold' to='/login'>
                Login
              </Link>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
