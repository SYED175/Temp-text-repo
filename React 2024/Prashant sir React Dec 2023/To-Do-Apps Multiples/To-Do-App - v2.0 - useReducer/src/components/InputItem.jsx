import { useRef, useContext } from "react";
import styles from "./InputItem.module.css";
import { ItemListContext } from "../store/ItemListContext";

const InputItem = () => {
  let textDisplay = useRef();
  let dateDisplay = useRef();

  const contextRef = useContext(ItemListContext);
  const handleChange = contextRef.addItemEvent;
  return (
    <div className={styles.inputContainer}>
      <input ref={textDisplay} type="text" />
      <input ref={dateDisplay} type="date" />
      <button
        onClick={() => {
          handleChange(textDisplay, dateDisplay);
          // console.log(textDisplay.current.value, dateDisplay.current.value);
        }}
        className={`btn btn-success ${styles.button}`}
      >
        Add
      </button>
    </div>
  );
};
export default InputItem;
