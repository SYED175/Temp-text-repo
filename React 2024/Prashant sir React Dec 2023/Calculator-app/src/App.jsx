import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
function App() {
  const [calVal, setcalVal] = useState("");

  const handleButtonClick = (btnName) => {
    if (btnName === "C") {
      setcalVal("");
    } else if (btnName === "=") {
      let evalVal = eval(calVal);
      setcalVal(evalVal.toString());
    } else {
      var a = parseInt(btnName);

      if (calVal === "0" && !isNaN(a)) {
        let newVal = btnName;
        setcalVal(newVal);
        return;
      }
      let newVal = calVal + btnName;
      setcalVal(newVal);
    }
  };
  return (
    <div className={styles.calculatorContainer}>
      <Display displayScreen={calVal} />
      <ButtonContainer onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
