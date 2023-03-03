import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
