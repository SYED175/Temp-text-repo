import Item from "./Item";

const TableList = ({ itemList, handleEvent, itemBoughtList }) => {
  return (
    <ul className="list-group">
      {itemList.map((item) => (
        <Item
          key={item}
          bought={itemBoughtList.includes(item) ? true : false}
          buttonName={itemBoughtList.includes(item) ? "Remove" : "Buy"}
          handleClick={handleEvent}
          foodItem={item}
        />
      ))}
    </ul>
  );
};

export default TableList;
