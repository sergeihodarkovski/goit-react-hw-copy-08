import s from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li className={s.item}>
      <div>
        <p>
          <BiSolidUser /> {name}
        </p>
        <p>
          <BiSolidPhone /> {number}
        </p>
      </div>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
