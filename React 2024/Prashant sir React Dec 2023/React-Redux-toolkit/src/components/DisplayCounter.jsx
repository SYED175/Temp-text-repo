import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Current counter value: {counterVal}</p>;
};

export default DisplayCounter;
