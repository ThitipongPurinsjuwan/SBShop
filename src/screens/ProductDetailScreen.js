import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import ProductDetail from "../components/otherPage/userReview/ProductDetail";
import Footer from "../components/otherPage/Footer";
export class ProductDetailScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs to="Detail" />
        <ProductDetail />
        <Footer />
      </>
    );
  }
}

export default ProductDetailScreen;
