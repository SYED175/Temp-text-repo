import styles from "./Item.module.css";
import { useContext } from "react";
import { ItemListContext } from "../store/ItemListContext";

const Item = ({ itemObject }) => {
  const contextRef = useContext(ItemListContext);
  const deleteHandle = contextRef.deleteItemEvent;

  return (
    <div className={`row  ${styles.kgItem}`}>
      <div className="col-6">{itemObject.name}</div>
      <div className="col-4">{itemObject.dueDate}</div>
      <div className="col-2">
        <button
          onClick={() => deleteHandle(itemObject.name)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
