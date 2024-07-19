import { createContext, useState } from "react";

export const ItemListContext = createContext({
  itemList: [],
  addItemEvent: () => {},
  deleteItemEvent: () => {},
});

const ItemListContextProvider = ({ children }) => {
  const initialFoodList = [];
  let [foodList, setFoodArr] = useState(initialFoodList);

  let addItemObjectList = (a, b) => {
    let newObjectItem = {
      name: a.current.value,
      dueDate: b.current.value,
    };
    let newArrayList = [...foodList, newObjectItem];
    setFoodArr(newArrayList);
    a.current.value = "";
    b.current.value = "";
  };
  let deleteItem = (itemName) => {
    let newArray = foodList.filter((itemObj) => itemObj.name != itemName);
    setFoodArr(newArray);
  };

  return (
    <ItemListContext.Provider
      value={{
        itemList: foodList,
        addItemEvent: addItemObjectList,
        deleteItemEvent: deleteItem,
      }}
    >
      {children}
    </ItemListContext.Provider>
  );
};

export default ItemListContextProvider;
