import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      {contact.name}: {contact.phone}
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
}
