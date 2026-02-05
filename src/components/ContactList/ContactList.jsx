import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectContacts,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const allContacts = useSelector(selectContacts);

  return (
    <div className={css.wrapper}>
      {/* 🔢 COUNTER */}
      <p className={css.counter}>
        {filteredContacts.length} of {allContacts.length} contacts
      </p>

      {filteredContacts.length === 0 ? (
        <p className={css.empty}>No contacts found</p>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </div>
  );
}
