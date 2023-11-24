import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "underline font-bold text-extended-teal" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
