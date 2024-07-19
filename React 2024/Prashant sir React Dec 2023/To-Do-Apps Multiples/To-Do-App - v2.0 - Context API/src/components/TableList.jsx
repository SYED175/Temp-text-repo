import Item from "./Item";
import { useContext } from "react";
import { ItemListContext } from "../store/ItemListContext";

const TableList = ({}) => {
  const contextRef = useContext(ItemListContext);
  const itemList = contextRef.itemList;
  return (
    <div className={`container text-center `}>
      {itemList.map((itemObj) => (
        <Item key={itemObj.name} itemObject={itemObj} />
      ))}
    </div>
  );
};

export default TableList;
