import { createContext } from "react";
import { useReducer } from "react";

export const ItemListContext = createContext({
  itemList: [],
  addItemEvent: () => {},
  deleteItemEvent: () => {},
});

//acting as wrapper component
const ToDoItemsReducer = (currentToDoITems, actionObj) => {
  let newArrayList = currentToDoITems;
  if (actionObj.type === "ADD_ITEM") {
    const newObjectItem = {
      name: actionObj.payload.itemName,
      dueDate: actionObj.payload.itemDueDate,
    };
    newArrayList = [...currentToDoITems, newObjectItem];
  } else if (actionObj.type === "DELETE_ITEM") {
    newArrayList = currentToDoITems.filter(
      (itemObj) => itemObj.name != actionObj.payload.itemName
    );
  }
  return newArrayList;
};

const ItemListContextProvider = ({ children }) => {
  const [foodList, dipatchToDoItems] = useReducer(ToDoItemsReducer, []);

  let addItemObjectList = (a, b) => {
    const itemName = a.current.value;
    const itemDueDate = b.current.value;

    //creating action object to be dispatched
    const newTodoItemAction = {
      type: "ADD_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dipatchToDoItems(newTodoItemAction);

    a.current.value = "";
    b.current.value = "";
  };
  let deleteItem = (itemName) => {
    const deleteToDoItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      },
    };
    dipatchToDoItems(deleteToDoItemAction);
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
