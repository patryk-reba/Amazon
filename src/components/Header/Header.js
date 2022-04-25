import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
// import FmdGoodOutlinedIcon from '@material-ui/icons/FmdGoodOutlined';
import { FiShoppingCart } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import useGeolocation from "react-hook-geolocation";
import { Navbar } from "react-bootstrap";

function Header({ setQuery }) {
  const [{ basket, user }, dispatch] = useStateValue();
  const searchRef = useRef(null);
  const [locationCountry, setLocationCountry] = useState("");
  const [locationCity, setLocationCity] = useState("");

  const geolocation = useGeolocation();
  const geoloc = async () => {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geolocation.latitude}&longitude=${geolocation.longitude}&localityLanguage=eng`
    );
    const data = await res.json();
    console.log(data);
    return setLocationCountry(data.countryName), setLocationCity(data.locality);
  };
  geoloc();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

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
          <GoLocation
            style={{ color: "white", marginRight: "-12px", marginTop: "20px" }}
          />
          <div className="header-option-location">
            <span className="header-optionLineOne">Deliver to</span>
            <span className="header-optionLineTwo">{locationCountry}</span>
            {/* <span className="header-optionLineTwo">{locationCity}</span> */}
          </div>
        </div>

        <div className="header-search">
          <input
            className="header-searchInput"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            ref={searchRef}
          />
          <SearchIcon className="header-searchIcon" />
        </div>
        <img
          src="      https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg
"
          alt="US flag"
          style={{
            width: "26px",
            marginLeft: "15px",
            marginTop: "10px",
            height: "19px",
            borderRadius: "1px",
          }}
          className="flag"
        />
        <div className="header-nav">
          <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
            <div onClick={handleAuthentication} className="header-option">
              <span className="header-optionLineOne">
                Hello{" "}
                {!user
                  ? "Guest"
                  : `${
                      user?.email.charAt(0).toUpperCase() +
                      user?.email.slice(1, user.email.indexOf("@"))
                    }`}
              </span>
              <span className="header-optionLineTwo">
                Account & Lists
                {/* {user ? "Sign Out" : "Sign In"} */}
              </span>
            </div>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className="header-option">
              <span className="header-optionLineOne">Returns</span>
              <span className="header-optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div> */}

          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="header-optionBasket">
              <FiShoppingCart size={25} />
              <span className="header-optionLineTwo header-basketCount">
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
