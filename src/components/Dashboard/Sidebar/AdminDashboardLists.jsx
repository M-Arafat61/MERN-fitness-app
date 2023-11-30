import { NavLink } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { Icon } from "@iconify/react";

const AdminDashboardLists = () => {
  return (
    <Container>
      <ul className='pl-10 text-lg font-medium gap-2 space-y-2 tracking-wider uppercase'>
        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='iconamoon:home-bold' />
          <NavLink
            to='/dashboard/subscribers'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            All subscribers
          </NavLink>
        </li>
        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='medical-icon:i-restaurant' />
          <NavLink
            to='/dashboard/trainers'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            All Trainers
          </NavLink>
        </li>

        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='uiw:menu' />
          <NavLink
            to='/dashboard/trainer-applications'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Applied Trainers
          </NavLink>
        </li>
        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='uiw:menu' />
          <NavLink
            to='/dashboard/add-forum'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Add new Forum
          </NavLink>
        </li>

        <li className='flex items-center gap-2 hover:font-bold '>
          <Icon className='text-2xl' icon='bxs:food-menu' />
          <NavLink
            to='/dashboard/balance'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline font-bold" : ""
            }
          >
            Balance
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default AdminDashboardLists;
