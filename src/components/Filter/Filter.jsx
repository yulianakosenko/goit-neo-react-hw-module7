import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <input
      className={css.input}
      value={value}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Find contact"
    />
  );
}
