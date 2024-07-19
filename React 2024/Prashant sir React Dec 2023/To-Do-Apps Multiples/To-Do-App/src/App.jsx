import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import TableList from "./components/TableList";
import InputItem from "./components/InputItem";
import { useState } from "react";

function App() {
  let [foodList, setFoodArr] = useState([]);
  let [itemBoughtList, setItemBoughtList] = useState([]);

  //for Input Item - InputItem
  let handleChange = (event) => {
    console.log("handlechange");
    if (event.key === "Enter") {
      let newItems = [...foodList, event.target.value];
      setFoodArr(newItems);
      event.target.value = "";
    }
  };

  let buyOrRemove = (item, bought) => {
    if (!itemBoughtList.includes(item)) {
      let newBoughtArr = [...itemBoughtList, item];
      setItemBoughtList(newBoughtArr);
    } else {
      let newArray = foodList.filter((food) => food != item);
      let newArrayBought = itemBoughtList.filter(
        (foodBought) => foodBought != item
      );
      setFoodArr(newArray);
      setItemBoughtList(newArrayBought);
    }
  };

  return (
    <div className="app-container">
      <h1 className="fw-bold">Healthy Foods</h1>
      <InputItem handleChange={handleChange} />
      <ErrorMessage itemList={foodList} />
      <TableList
        itemList={foodList}
        itemBoughtList={itemBoughtList}
        handleEvent={buyOrRemove}
      />
    </div>
  );
}

export default App;
