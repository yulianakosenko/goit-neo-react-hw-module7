import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (!name || !phone) return;

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="name"
        placeholder="Name"
        required
      />

      <input
        className={css.input}
        type="tel"
        name="phone"
        placeholder="Phone"
        required
      />

      <button className={css.button} type="submit">
        Add contact
      </button>

    
    </form>
  );
}
