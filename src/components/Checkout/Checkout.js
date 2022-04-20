import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>
            Hello{" "}
            {!user
              ? "Guest"
              : user?.email.charAt(0).toUpperCase() +
                user?.email.slice(1, user.email.indexOf("@"))}
          </h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          <FlipMove enterAnimation="elevator" leaveAnimation="elevator">
            {basket.map((item, i) => (
              <CheckoutProduct
                key={item.id + i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
