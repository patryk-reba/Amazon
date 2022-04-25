import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Home2 from "./components/Home/Home2";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from "./components/Header/Navbar";
const promise = loadStripe(
  "pk_test_51KppbwGPYshWl3yxKSg606rlNECfSoT3s4tFk7PZu3IRE3dIYO10yBKkj2hHXrDSAOHjRQ3zvGLBbc7ladZBwDab003oTPQjo9"
);

function App() {
  const [{}, dispatch] = useStateValue();
  const [query, setQuery] = useState(" ");

  let location = useLocation();

  useEffect(() => {
    //will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div>
      <div className="app">
        {/* <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={200}
          > */}
        <Switch location={location}>
          <Route path="/orders">
            <Header />

            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Navbar />
            <Checkout />
          </Route>
          <Route path="/shop">
            <Header setQuery={setQuery} />
            <Navbar />
            <Home query={query} />
          </Route>
          <Route path="/payment">
            <Header />
            <Navbar />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header setQuery={setQuery} />
            <Navbar />
            <Home2 query={query} />
          </Route>
        </Switch>
        {/* </CSSTransition>
        </TransitionGroup> */}
      </div>
    </div>
  );
}

export default App;
