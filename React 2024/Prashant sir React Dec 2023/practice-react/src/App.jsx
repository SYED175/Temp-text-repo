import { useEffect } from "react";
import ItemList from "./components/ItemList";
import { useState } from "react";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import ErrorMessage from "./components/ErrorMessage";
import Welcome from "./components/Welcome";
import axios from "axios";

function App() {
  const [itemList, setItemList] = useState([]);
  const [fecthValue, setFetchValue] = useState();
  const [fetchingDone, setFetchingDone] = useState(false);

  useEffect(() => {
    const fetchDataAxios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        const data = response.data;
        setItemList(data.items);
      } catch (err) {
        throw err;
      }
    };
    fetchDataAxios().catch((err) => {
      console.log("Connection error");
    });
    console.log("first");
    return () => {};
  }, []);

  const handleSubmit = (searchDisplay) => {
    const val = searchDisplay.current.value;
    const singleObject = itemList.find((item) => item.name === val);
    setFetchValue(singleObject);
    setFetchingDone(true);
  };

  return (
    <div>
      <Search handleSubmit={handleSubmit} />
      {fetchingDone ? (
        fecthValue ? (
          <Card item={fecthValue} />
        ) : (
          <ErrorMessage />
        )
      ) : (
        <Welcome />
      )}
    </div>
  );
}

export default App;
