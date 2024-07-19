import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import TableList from "./components/TableList";
import InputItem from "./components/InputItem";
import { useState } from "react";

function App() {
  const initialFoodList = [];
  let [foodList, setFoodArr] = useState(initialFoodList);

  let handleChangeEvent = (a, b) => {
    let newObjectItem = {
      name: a.current.value,
      dueDate: b.current.value,
    };
    let newArrayList = [...foodList, newObjectItem];
    setFoodArr(newArrayList);
    a.current.value = "";
    b.current.value = "";
  };

  let someFun = (itemName) => {
    let newArray = foodList.filter((itemObj) => itemObj.name != itemName);
    setFoodArr(newArray);
  };

  return (
    <div className="app-container">
      <h1 className="fw-bold">Healthy Foods</h1>
      <InputItem handleChange={handleChangeEvent} />
      <TableList itemList={foodList} handleEvent={someFun} />
    </div>
  );
}

export default App;
