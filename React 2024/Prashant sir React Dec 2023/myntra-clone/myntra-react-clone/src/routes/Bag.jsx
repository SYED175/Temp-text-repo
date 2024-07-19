import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const cartList = useSelector((store) => store.cart);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {cartList.map((item) => (
              <BagItem key={item.id} item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
