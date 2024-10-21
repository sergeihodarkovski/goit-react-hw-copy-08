import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <label className={s.wrapper}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
