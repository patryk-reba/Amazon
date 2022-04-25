import React, { useState } from "react";
import "./Home2.css";
import Product from "./Product";
import Carousel from "react-elastic-carousel";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.jpg";
import pic5 from "./images/pic5.png";

import { Link } from "react-router-dom";

function Home({ query }) {
  const [carousel, setCarousel] = useState([
    "https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
  ]);

  const title1 =
    "Cracking the Coding Interview: 189 Programming Questions and Solutions";
  const title2 =
    "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling";
  const title3 = "Rudy: My Story, CD-Audio – CD";
  const title4 = "Sapiens: A Brief History of Humankind";
  const title5 =
    "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)";
  const title6 =
    "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)";

  return (
    <div className="home">
      <div className="home-container" style={{ minHeight: "500px" }}>
        <Carousel
          pagination={false}
          disableArrowsOnEnd={false}
          transitionMs={600}
          showArrows={false}
          enableAutoPlay={true}
          autoPlaySpeed={5000}
        >
          {carousel.map((item) => (
            <img className="home-image" src={item} alt="" />
          ))}
        </Carousel>
        <div className="home-row">
          <Link to="/shop">
            <TransitionGroup component={null}>
              {title1.toLowerCase().includes(query.toLowerCase()) && (
                <CSSTransition classNames="dialog" timeout={300}>
                  <img src={pic1} className="amazon-pics" />
                </CSSTransition>
              )}
            </TransitionGroup>
          </Link>

          <TransitionGroup component={null}>
            {title1.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <img src={pic2} className="amazon-pics" />
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {title2.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <img className="amazon-pics" src={pic3} />
              </CSSTransition>
            )}
          </TransitionGroup>
          <div style={{ justifyContent: "center" }}>
            <div className="signin-container">
              <h3 className="sign-in">Sign in for the best experience</h3>
              <Link to="/login">
                <button className="sign-in-btn">Sign in securely</button>
              </Link>
            </div>
            <img
              src={pic4}
              className="amazon-pics"
              style={{ width: "285px", marginLeft: "30px" }}
            />
          </div>
        </div>

        <div className="home-row" style={{ marginLeft: "0px" }}>
          <Link to="/shop">
            <div className="home-row">
              <TransitionGroup component={null}>
                {title1.toLowerCase().includes(query.toLowerCase()) && (
                  <CSSTransition classNames="dialog" timeout={300}>
                    <img src={pic1} className="amazon-pics" />
                  </CSSTransition>
                )}
              </TransitionGroup>

              <TransitionGroup component={null}>
                {title1.toLowerCase().includes(query.toLowerCase()) && (
                  <CSSTransition classNames="dialog" timeout={300}>
                    <img src={pic2} className="amazon-pics" />
                  </CSSTransition>
                )}
              </TransitionGroup>

              <TransitionGroup component={null}>
                {title2.toLowerCase().includes(query.toLowerCase()) && (
                  <CSSTransition classNames="dialog" timeout={300}>
                    <img className="amazon-pics" src={pic3} />
                  </CSSTransition>
                )}
              </TransitionGroup>

              <img src={pic2} className="amazon-pics" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
