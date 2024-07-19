import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ onButtonClick }) => {
  let buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonList.map((buttonNames) => (
        <button
          key={buttonNames}
          className={styles.button}
          onClick={() => {
            onButtonClick(buttonNames);
          }}
        >
          {buttonNames}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
