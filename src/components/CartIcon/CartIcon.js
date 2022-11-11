import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { visible, setVisible, cartCount } = useContext(CartContext);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="cart-icon-container" onClick={toggleVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
