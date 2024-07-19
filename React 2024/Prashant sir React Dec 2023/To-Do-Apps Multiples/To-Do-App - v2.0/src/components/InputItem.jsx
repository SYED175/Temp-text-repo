import { useRef } from "react";
import styles from "./InputItem.module.css";

const InputItem = ({ handleChange }) => {
  let textDisplay = useRef();
  let dateDisplay = useRef();

  return (
    <div className={styles.inputContainer}>
      <input ref={textDisplay} type="text" />
      <input ref={dateDisplay} type="date" />
      <button
        onClick={() => {
          handleChange(textDisplay, dateDisplay);
        }}
        className={`btn btn-success ${styles.button}`}
      >
        Add
      </button>
    </div>
  );
};
export default InputItem;
