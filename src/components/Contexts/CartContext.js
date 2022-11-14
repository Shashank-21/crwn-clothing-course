import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  visible: false,
  setVisible: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItem) {
      return cartItems.map((cartItem) => {
        return cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  const clearCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );
    if (existingCartItem) {
      return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
  };

  const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToRemove.id
    );
    if (existingCartItem) {
      if (productToRemove.quantity === 1) {
        return cartItems.filter(
          (cartItem) => cartItem.id !== productToRemove.id
        );
      }
      return cartItems.map((cartItem) => {
        return cartItem.id === productToRemove.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem;
      });
    }
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    visible,
    setVisible,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
