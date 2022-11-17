import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const { visible, setVisible, cartCount } = useContext(CartContext);

  const toggleVisibility = () => setVisible(!visible);

  return (
    <CartIconContainer onClick={toggleVisibility}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
