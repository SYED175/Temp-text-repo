import Item from "./Item";
import { useState } from "react";
import styles from "./TableList.module.css";

const TableList = ({ itemList, handleEvent }) => {
  let [itemsBought, setItemsList] = useState([]);

  return (
    <div className={`container text-center `}>
      {itemList.map((itemObj) => (
        <Item
          deleteHandle={handleEvent}
          key={itemObj.name}
          itemObject={itemObj}
        />
      ))}
    </div>
  );
};

export default TableList;
