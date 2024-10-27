import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div>
      <NavLink className={buildLinkClass} to="/login">
        Login
      </NavLink>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
