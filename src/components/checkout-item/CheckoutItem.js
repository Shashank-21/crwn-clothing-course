import {
  CheckoutItemContainer,
  ImageContainer,
  Detail,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.js";

import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Detail>{name}</Detail>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Detail>{price}</Detail>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
