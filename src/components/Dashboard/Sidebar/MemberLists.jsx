import { NavLink } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { Icon } from "@iconify/react";

const MemberLists = () => {
  return (
    <Container>
      <div className='space-y-8'>
        {/* Conditional lists  */}
        {/* {isAdmin ? <AdminLists></AdminLists> : <UserLists></UserLists>} */}

        <div className='px-5'>
          <hr />
        </div>
        <ul className='pl-10 text-md font-medium uppercase gap-2 space-y-2 tracking-wider '>
          <div>
            <li className='flex items-center gap-2 hover:font-bold'>
              <Icon className='text-2xl' icon='iconamoon:home-bold' />
              <NavLink
                to='/activity'
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
                to='/recommended-classes'
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "underline font-bold" : ""
                }
              >
                Recommended Classes
              </NavLink>
            </li>
          </div>

          <li className='flex items-center gap-2 hover:font-bold'>
            <Icon className='text-2xl' icon='fluent:mail-24-filled' />
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

export default MemberLists;
