import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
// import FmdGoodOutlinedIcon from '@material-ui/icons/FmdGoodOutlined';
import { FiShoppingCart } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>


      <div className="header">
        <Link to="/">
          <img
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="location-container">
          <GoLocation style={{ color: 'white', marginRight: '-10px', marginTop: '10px' }} />
          <div className="header-option-location">
            <span className="header-optionLineOne">Deliver to</span>
            <span className="header-optionLineTwo">Poland</span>
          </div>
        </div>

        <div className="header-search">
          <input className="header-searchInput" type="text" />
          <SearchIcon className="header-searchIcon" />
        </div>
        <img src="      https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg
" alt="US flag" style={{ width: '26px', marginLeft: '15px', marginTop: '10px', height: '19px', borderRadius: '1px' }} className="flag" />
        <div className="header-nav">
          <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
            <div onClick={handleAuthentication} className="header-option">
              <span className="header-optionLineOne">
                Hello {!user ? 'Guest'
                  : `${user?.email.charAt(0).toUpperCase() +
                  user?.email.slice(1, user.email.indexOf('@'))}`}
              </span>
              <span className="header-optionLineTwo">
                {/* Account & Lists */}
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders" style={{ textDecoration: 'none' }}>
            <div className="header-option">
              <span className="header-optionLineOne">Returns</span>
              <span className="header-optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div> */}

          <Link to="/checkout" style={{ textDecoration: 'none' }}>
            <div className="header-optionBasket">
              <FiShoppingCart size={25} />
              < span className="header-optionLineTwo header-basketCount">
                {basket?.length}
              </span>
              <p className="cart-text">Cart</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="header-search-mobile">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
    </>
  );
}

export default Header;
