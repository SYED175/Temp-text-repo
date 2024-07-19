import styles from "./InputItem.module.css";

const InputItem = ({ handleChange }) => {
  return (
    <>
      <input
        onKeyDown={(event) => handleChange(event)}
        className={styles.inputItem}
        type="text"
      />
    </>
  );
};
export default InputItem;
