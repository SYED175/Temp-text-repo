import { useDispatch } from "react-redux";
import styles from "./Item.module.css";
import { foodAction } from "../store/foodlist";

const Item = ({ itemObject }) => {
  const dispatch = useDispatch();

  const deleteHandle = (value) => {
    dispatch(foodAction.deleteItems(value));
  };
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
