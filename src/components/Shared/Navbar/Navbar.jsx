import { Link } from "react-router-dom";
import Container from "../Container/Container";
import CustomNavLink from "./CustomNavLink";

const Navbar = () => {
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
        <CustomNavLink to='/community'>Community/Forums</CustomNavLink>
      </div>
    </div>
  );

  return (
    <Container>
      <div className='navbar py-8'>
        <div className='navbar-start'>
          <div className='dropdown'>
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
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navItems}
            </ul>
          </div>
          <div className='normal-case text-xl'>
            SyncFit <span className='text-extended-teal'>Connect</span>
          </div>
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal'>{navItems}</ul>
        </div>
        <div className='navbar-end'>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
