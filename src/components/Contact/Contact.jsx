import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <div className={css.info}>
        <span className={css.name}>{contact.name}</span>
        <span className={css.phone}>
          {contact.phone || contact.number || contact.phoneNumber}
        </span>
      </div>

      <button
        className={css.delete}
        onClick={() => dispatch(deleteContact(contact.id))}
        type="button"
        aria-label="Delete contact"
      >
        Delete
      </button>
    </li>
  );
}
