import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-elastic-carousel";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
          <TransitionGroup component={null}>
            {title1.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <Product
                  key="1"
                  id="12321341"
                  title="Cracking the Coding Interview: 189 Programming Questions and Solutions"
                  price={24.49}
                  rating={5}
                  image="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
                />
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {title2.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <Product
                  key="2"
                  id="49538094"
                  title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling"
                  price={59.99}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/71iNwni9TsL._AC_SX679_.jpg"
                />
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <div className="home-row">
          <TransitionGroup component={null}>
            {title3.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <Product
                  key="3"
                  id="4903850"
                  title="Rudy: My Story, CD-Audio – CD"
                  price={199.99}
                  rating={3}
                  image="https://images-na.ssl-images-amazon.com/images/I/51AR5KrB+YL._SX301_BO1,204,203,200_.jpg"
                />
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {title4.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <Product
                  key="4"
                  id="23445930"
                  title="Sapiens: A Brief History of Humankind"
                  price={14.99}
                  rating={5}
                  image="https://m.media-amazon.com/images/I/51XyWW6zEXL.jpg"
                />
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup component={null}>
            {title5.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <Product
                  key="5"
                  id="3254354345"
                  title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                  price={598.99}
                  rating={4}
                  image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>

        <div className="home-row">
          <TransitionGroup component={null}>
            {title6.toLowerCase().includes(query.toLowerCase()) && (
              <CSSTransition classNames="dialog" timeout={300}>
                <Product
                  key="6"
                  id="90829332"
                  title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)"
                  price={190.0}
                  rating={4}
                  image="https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_SX679_.jpg"
                />
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}

export default Home;
