import {
  CartItemContainer,
  ItemDetails,
  Name,
  Price,
  Multiplication,
} from "./cart-item.styles.js";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} <Multiplication>&#10005;</Multiplication> ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
