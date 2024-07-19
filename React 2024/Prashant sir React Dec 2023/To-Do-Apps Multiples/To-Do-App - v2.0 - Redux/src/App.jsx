import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TableList from "./components/TableList";
import InputItem from "./components/InputItem";

function App() {
  return (
    <div className="app-container">
      <h1 className="fw-bold">Healthy Foods</h1>
      <InputItem />
      <TableList />
    </div>
  );
}

export default App;
