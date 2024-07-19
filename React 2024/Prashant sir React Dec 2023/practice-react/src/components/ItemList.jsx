import Item from "./Item";

const ItemList = ({ itemList }) => {
  return (
    <div>
      {itemList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
