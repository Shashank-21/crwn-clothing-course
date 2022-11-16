import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import CartIcon from "../../components/CartIcon/CartIcon";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../components/Contexts/UserContext";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase/FireBase";
import { CartContext } from "../../components/Contexts/CartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { visible } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {visible && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
