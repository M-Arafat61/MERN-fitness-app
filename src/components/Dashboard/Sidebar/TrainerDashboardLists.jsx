import { NavLink } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { Icon } from "@iconify/react";

const TrainerDashboardLists = () => {
  return (
    <Container>
      <ul className='md:pl-10 text-md font-medium gap-2 space-y-2 tracking-wider uppercase'>
        <li className='flex items-center gap-2 '>
          <Icon className='md:text-2xl' icon='iconamoon:home-bold' />
          <NavLink
            to='/dashboard/manage-slots'
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "underline md:md:font-bold"
                : ""
            }
          >
            Manage Slots
          </NavLink>
        </li>
        <li className='flex items-center gap-2 '>
          <Icon className='md:text-2xl' icon='medical-icon:i-restaurant' />
          <NavLink
            to='/dashboard/manage-member'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline md:font-bold" : ""
            }
          >
            Manage member
          </NavLink>
        </li>

        <li className='flex items-center gap-2 hover:md:font-bold '>
          <Icon className='md:text-2xl' icon='uiw:menu' />
          <NavLink
            to='/dashboard/add-forum'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline md:font-bold" : ""
            }
          >
            Add new Forum
          </NavLink>
        </li>

        <li className='flex items-center gap-2 hover:md:font-bold '>
          <Icon className='md:text-2xl' icon='bxs:food-menu' />
          <NavLink
            to='/dashboard/add-class'
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline md:font-bold" : ""
            }
          >
            Add new Class
          </NavLink>
        </li>
      </ul>
    </Container>
  );
};

export default TrainerDashboardLists;
