import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <div className={s.wrapper}>
      <h2>Welcom, {user.name}</h2>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={() => dispatch(logout())} className={s.btn}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navigation;
