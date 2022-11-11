import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";
import Button from "../Button/Button";
import "./cart-dropdown.styles.scss";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}

      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
