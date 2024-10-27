import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? null : (
    <div className={s.wrapper}>
      <div className={s.wrapperLinks}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={buildLinkClass} to="/contacts">
            Contacts
          </NavLink>
        )}
      </div>

      <div className={s.authWrapper}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};

export default Navigation;
