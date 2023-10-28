import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import  { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
              </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <Toaster/>
        {children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Bakery website",
  description: "mern stack",
  keywords: " mern",
  author: "sanjuga",
};
export default Layout;
