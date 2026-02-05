# 📇 Contacts Book (Async Redux)

A modern React application for managing personal contacts with full CRUD functionality, asynchronous state management, and a clean, responsive UI.

This project is the **final assignment** of the course
**“Mastering Front-End Development with React”**.

---

## 🚀 Live Demo

👉 **Deployed on Vercel:**
(https://goit-neo-react-hw-module7-xi-lovat.vercel.app/)

---

## 📂 Repository

👉 **Source code:**
(https://github.com/yulianakosenko/goit-neo-react-hw-module7)

---

## 🛠️ Tech Stack

* **React** (Vite)
* **Redux Toolkit**
* **Redux Async Thunks**
* **Axios**
* **MockAPI** (REST backend)
* **CSS Modules**
* **JavaScript (ES6+)**

---

## ✨ Features

* 📥 Fetch contacts from a remote API
* ➕ Add new contacts
* ❌ Delete existing contacts
* 🔍 Filter contacts by name
* ⏳ Loading state handling
* ⚠️ Error handling for HTTP requests
* 🌙 Light / Dark theme toggle
* ⚡ Optimized selectors with memoization (`createSelector`)

---

## 🧠 Architecture Overview

### State Structure

```js
{
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
    name: ""
  }
}
```

### Key Concepts Used

* `createAsyncThunk` for async operations
* `extraReducers` for handling async lifecycle (`pending / fulfilled / rejected`)
* Memoized selector with `createSelector` to prevent unnecessary re-renders
* Separation of concerns between UI components and Redux logic

---

## 🔗 Backend

The application uses a custom REST API created with **MockAPI**.

**Base endpoint:**

```
https://69833a449c3efeb892a4eb7e.mockapi.io/contacts
```

The backend automatically generates unique IDs for contacts.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── App/
│   ├── Contact/
│   ├── ContactForm/
│   ├── ContactList/
│   └── Filter/
├── redux/
│   ├── store.js
│   ├── contactsSlice.js
│   ├── contactsOps.js
│   └── filtersSlice.js
├── main.jsx
```

Each component is placed in a separate folder and includes:

* JSX file
* CSS Module file

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yulianakosenko/goit-neo-react-hw-module7
cd goit-neo-react-hw-module7
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## ✅ Requirements Compliance

* ✔️ Created with **Vite**
* ✔️ Uses **Redux Toolkit**
* ✔️ Uses **async thunks**
* ✔️ No Redux Persist
* ✔️ CSS Modules only
* ✔️ No console errors or warnings
* ✔️ Clean and readable code structure
* ✔️ Memoized selectors implemented

---

## 📌 Notes

This project focuses on:

* correct Redux async architecture
* performance optimization
* clean UI structure
* maintainable and scalable code

---

## 👩‍💻 Author

**Yuliya Kostenko**
Frontend Developer

