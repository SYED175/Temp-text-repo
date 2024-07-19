import styles from "./Display.module.css";

const Display = ({ displayScreen }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayScreen}
      readOnly
    />
  );
};
export default Display;
