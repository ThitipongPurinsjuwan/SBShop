import React, { Component } from "react";
import Header from "../components/otherPage/Header";
import Breadcrumbs from "../components/otherPage/Breadcrumbs";
import Contact from "../components/otherPage/contact/Contact";
import Footer from "../components/otherPage/Footer";

class CantactScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Breadcrumbs to="Cantact" />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default CantactScreen;
