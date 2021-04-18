import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Shops from "../components/otherPage/products/Shops";
import Footer from "../components/otherPage/Footer";

class ProductsScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs to="Products" />
        <Shops />
        <Footer />
      </>
    );
  }
}

export default ProductsScreen;
