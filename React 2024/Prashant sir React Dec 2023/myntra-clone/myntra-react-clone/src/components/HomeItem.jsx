// eslint-disable-next-line react/prop-types
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cartSlice";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartList = useSelector((store) => store.cart);

  const inCart = cartList.includes(item);
  console.log(inCart, cartList);

  const addToCart = () => {
    dispatch(cartActions.addToCart(item));
  };

  const removeFromCart = () => {
    dispatch(
      cartActions.removeFromCart({
        id: item.id,
      })
    );
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {inCart ? (
        <button className="btn-remove-bag  " onClick={removeFromCart}>
          <MdDelete /> remove from Cart
        </button>
      ) : (
        <button className="btn-add-bag" onClick={addToCart}>
          <FaCartPlus /> Add to Cart
        </button>
      )}
    </div>
  );
};

export default HomeItem;
