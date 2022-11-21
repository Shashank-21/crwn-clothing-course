import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.js";

import { useSelector } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector.js";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
