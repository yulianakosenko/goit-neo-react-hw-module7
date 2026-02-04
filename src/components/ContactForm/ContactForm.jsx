import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addContact({
        name: form.name.value,
        phone: form.phone.value,
      }),
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="name" required placeholder="Name" />
      <input name="phone" required placeholder="Phone" />
      <button type="submit">Add</button>
    </form>
  );
}
