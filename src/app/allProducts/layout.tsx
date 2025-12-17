import React from "react";
import Header from "../common-components/Header";
import Footer from "../common-components/Footer";

const layoutAllProducts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    <Header/>
    {children}
    <Footer/>
    </div>
    )
};

export default layoutAllProducts;
