import Item from "./Item";
import { useSelector } from "react-redux";

const TableList = () => {
  const itemList = useSelector((store) => store.food);
  return (
    <div className={`container text-center `}>
      {itemList.map((itemObj) => (
        <Item key={itemObj.name} itemObject={itemObj} />
      ))}
    </div>
  );
};

export default TableList;
