import { useContext } from "react";
import { DropdownContext } from "../Contexts/DropdownContext";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { visible, setVisible } = useContext(DropdownContext);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className="cart-icon-container" onClick={toggleVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
