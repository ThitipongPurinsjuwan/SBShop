import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import CantactScreen from "../screens/CantacctScreen";
import ShoppingCart from "../screens/ShoppingCart";
import CheckOutScreen from "../screens/CheckOutScreen";
import UserReviewScreen from "../screens/UserReviewScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import ProductsScreen from "../screens/ProductsScreen";
import InsertScreen from "../screens/InsertScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
import BagScreen from "../screens/BagScreen";
import ShoseScreen from "../screens/ShoseScreen";
import NotFound from "../screens/NotFound";
import "../App.css";

class Common extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/notfound" component={NotFound} />
            <Route path="/contact" component={CantactScreen} />
            <Route path="/review" component={UserReviewScreen} />
            <Route path="/detail" component={ProductDetailScreen} />
            <Route path="/checkout" component={CheckOutScreen} />
            <Route path="/cart" component={ShoppingCart} />
            <Route path="/shop" component={ProductsScreen} />
            <Route path="/bag" component={BagScreen} />
            <Route path="/shose" component={ShoseScreen} />
            <Route path="/create" component={InsertScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Common;
