import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.wrapper}>
      {isLoggedIn && <h2>Welcome, {user.name}</h2>}
      {isLoggedIn && (
        <button onClick={() => dispatch(logout())} className={s.btn}>
          Logout
        </button>
      )}
    </div>
  );
};

export default UserMenu;
