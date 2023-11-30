import { Link, NavLink } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { Icon } from "@iconify/react";

const MemberDashboardLists = () => {
  return (
    <Container>
      <div className='space-y-8 flex flex-col justify-between'>
        <ul className='px-2 md:pl-5 md:text-md md:font-medium uppercase gap-2 space-y-2 tracking-wider '>
          <li className='flex items-center gap-2 hover:font-bold'>
            <Icon className='text-2xl' icon='iconamoon:home-bold' />
            <NavLink
              to='/dashboard/activity'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
              }
            >
              Activity Log
            </NavLink>
          </li>
          <li className='flex items-center gap-2 hover:font-bold'>
            <Icon className='text-2xl' icon='mingcute:menu-line' />
            <NavLink
              to='/dashboard/recommended-classes'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
              }
            >
              Recommended Classes
            </NavLink>
          </li>
          <li className='flex items-center gap-2 hover:font-bold'>
            <Icon className='text-2xl' icon='clarity:settings-line' />
            <NavLink
              to='/dashboard/settings'
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold" : ""
              }
            >
              Profile Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default MemberDashboardLists;
