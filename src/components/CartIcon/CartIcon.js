import { useDispatch, useSelector, useSelectors } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleVisibility = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleVisibility}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
