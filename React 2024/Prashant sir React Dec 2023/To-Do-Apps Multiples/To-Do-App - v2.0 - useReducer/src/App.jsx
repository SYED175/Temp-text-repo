import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import TableList from "./components/TableList";
import InputItem from "./components/InputItem";
import ItemListContextProvider from "./store/ItemListContext";
import AppHeading from "./components/AppHeading";

function App() {
  return (
    <ItemListContextProvider>
      <div className="app-container">
        <AppHeading />
        <InputItem />
        <ErrorMessage />
        <TableList />
      </div>
    </ItemListContextProvider>
  );
}

export default App;
