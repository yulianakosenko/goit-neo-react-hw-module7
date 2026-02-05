import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/contactsOps";

import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";

import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();

  // 🌙 THEME (з module6 — ЗАЛИШАЄМО)
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  // 🔹 застосування теми
  useEffect(() => {
    document.body.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // 🔹 fetch контактів (module7)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.page}>
      <div className={css.card}>
        {/* 🔹 HEADER З ПЕРЕМИКАЧЕМ ТЕМИ */}
        <div className={css.header}>
          <h1 className={css.title}>Phonebook</h1>

          <button
            className={css.themeToggle}
            onClick={() => setDark((prev) => !prev)}
            aria-label="Toggle theme"
            type="button"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        <p className={css.subtitle}>Your personal contact manager</p>

        <ContactForm />
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}
