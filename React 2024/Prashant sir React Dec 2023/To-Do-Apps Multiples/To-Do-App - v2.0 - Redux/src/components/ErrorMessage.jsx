function ErrorMessage({ itemList }) {
  return <>{itemList.length === 0 && <h3>List is empty</h3>}</>;
}

export default ErrorMessage;
