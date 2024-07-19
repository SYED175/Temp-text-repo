import { ItemListContext } from "../store/ItemListContext";
import { useContext } from "react";

function ErrorMessage() {
  const contextRef = useContext(ItemListContext);
  const itemList = contextRef.itemList;
  return <>{itemList.length === 0 && <h3>List is empty</h3>}</>;
}

export default ErrorMessage;
