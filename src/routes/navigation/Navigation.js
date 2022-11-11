import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import CartIcon from "../../components/CartIcon/CartIcon";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../components/Contexts/UserContext";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase/FireBase";
import { CartContext } from "../../components/Contexts/CartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { visible } = useContext(CartContext);
  console.log(visible);

  const signOutHandler = async () => {
    await signOutUser();
  };

  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {visible && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
