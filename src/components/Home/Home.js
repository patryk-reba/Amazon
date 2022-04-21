import React from "react";
import "./Home.css";
import Product from "./Product";

function Home({ query }) {



  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />
        <div className="home-row">
          {(query.toLowerCase().includes("c") || query == "") && (
            <Product
              key="1"
              id="12321341"
              title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
              price={24.49}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
            />
          )}
          {(query.toLowerCase().includes("l") || query == "") && (
            <Product
              key="2"
              id="49538094"
              title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling"
              price={59.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SX679_.jpg"
            />
          )}
        </div>

        <div className="home-row">
          {(query.toLowerCase().includes("r") || query == "") && (
            <Product
              key="3"
              id="4903850"
              title="Rudy: My Story, CD-Audio – CD"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/51AR5KrB+YL._SX301_BO1,204,203,200_.jpg"
            />
          )}
          {(query.toLowerCase().includes("s") || query == "") && (
            <Product
              key="4"
              id="23445930"
              title="Sapiens: A Brief History of Humankind"
              price={14.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/51XyWW6zEXL.jpg"
            />
          )}
          {(query.toLowerCase().includes("n") || query == "") && (
            <Product
              key="5"
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          )}
        </div>

        <div className="home-row">
          {(query.toLowerCase().includes("h") || query == "") && (
            <Product
              key="6"
              id="90829332"
              title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
              price={190.0}
              rating={4}
              image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
