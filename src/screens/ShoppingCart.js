import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Cart from "../components/otherPage/cart/ShoppingCart";
import ServiceArea from "../components/otherPage/cart/ServiceArea";
import Newslater from "../components/otherPage/cart/Newslater";
import Footer from "../components/otherPage/Footer";

class ShoppingCart extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs to="Cart" />
        <Cart />
        <ServiceArea />
        <Newslater />
        <Footer />
      </>
    );
  }
}

export default ShoppingCart;
