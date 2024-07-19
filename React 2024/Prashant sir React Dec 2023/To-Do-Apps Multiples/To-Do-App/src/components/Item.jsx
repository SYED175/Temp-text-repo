import styles from "./Item.module.css";

const Item = ({ foodItem, handleClick, buttonName, bought }) => {
  return (
    <li className={`list-group-item ${true && "active"}`}>
      {foodItem}
      <button
        onClick={() => handleClick(foodItem)}
        className={`btn ${bought ? "btn-danger" : "btn-info"} ${styles.button}`}
      >
        {buttonName}
      </button>
    </li>
  );
};

export default Item;
