import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import DisplayCounter from "./components/DisplayCounter";
import Controllers from "./components/Controllers";
import { useSelector } from "react-redux";
import PrivacyToggle from "./components/PrivacyToggle";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <div className="px-4 py-5 my-5 text-center">
      <Counter />
      <div className="col-lg-6 mx-auto">
        {privacy ? <PrivacyToggle /> : <DisplayCounter />}
        <Controllers />
      </div>
    </div>
  );
}

export default App;
