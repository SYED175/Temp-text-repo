import { useRef, useState } from "react";
import styles from "./InputItem.module.css";
import { useDispatch } from "react-redux";
import { foodAction } from "../store/foodlist";

const InputItem = () => {
  const dispatch = useDispatch();
  let textDisplay = useRef();
  let dateDisplay = useRef();

  const handleChange = (textDisplay, dateDisplay) => {
    dispatch(
      foodAction.addFoodItem({
        textDisplay: textDisplay.current.value,
        dateDisplay: dateDisplay.current.value,
      })
    );
    textDisplay.current.value = "";
    dateDisplay.current.value = "";
  };

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
