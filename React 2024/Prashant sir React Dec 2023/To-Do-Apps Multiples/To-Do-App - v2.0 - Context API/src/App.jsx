import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import TableList from "./components/TableList";
import InputItem from "./components/InputItem";
import ItemListContextProvider from "./store/ItemListContext";

function App() {
  return (
    <ItemListContextProvider>
      <div className="app-container">
        <h1 className="fw-bold">Healthy Foods</h1>
        <ErrorMessage />
        <InputItem />
        <TableList />
      </div>
    </ItemListContextProvider>
  );
}

export default App;
