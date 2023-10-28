import React, { useState } from "react";
//import { Link, NavLink } from "react-router-dom";

import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout/Layout";

function Home() {
  

  return (
    <Layout>
    <div>
      

      <div className="img">
        <img
          src="./images/i13.jpg"
          alt="MyImage"
          style={{ width: "100%", height: "50%" }}
        />
      </div>

      {/* <div>
        <div classNameName="container col-11">
          <h3>About Us</h3>
          <Mycomp imgUrl="./images/cakie.webp" />
        </div>
      </div> */}
      <div className="container mt-5">
        <h3>Explore us!!</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <a href="./homepage"><img
                src="./images/a12.webp"
                className="card-img-top"
                alt="Image 1" style={{height:300}}
              /></a>
              <div className="card-body">
                <h5 className="card-title">Shop here</h5>
                <p className="card-text">Click me get your things...</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <a href="./about"><img
                src="./images/cakie.webp"
                className="card-img-top"
                alt="Image 2" style={{height:300}}
              /></a>
              <div className="card-body">
                <h5 className="card-title">Wanna know about us</h5>
                <p className="card-text">Just pinch me....</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img
                src="./images/a13.jpg"
                className="card-img-top"
                alt="Image 3"style={{height:300}}
              />
              <div className="card-body">
                <h5 className="card-title">Improve us</h5>
                <p className="card-text">Waiting for your feedback to work for you.....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <br></br>
      <br></br>

      <div className="container col-11">
        <div className="row">
          <div className="col-md-4 ">
            <img
              src="./images/a11.jpg"
              style={{ height: 400, width: 400 }}
              alt="Legacy Image"
            />
          </div>
          <div className="col-md-7 text-center">
            <br></br>
            <br></br>
            <h5>Join with us...</h5>
            <br></br>
            <br></br>
            <p
              style={{ fontfamily: "Times New Roman , serif", color: "black" }}
            >
              We are excited to offer you exclusive deals and offers that you
              won't want to miss. Whether you're looking for discounts, special
              promotions, or unique packages, we've got something just for you.
              Don't wait  seize the opportunity to enjoy exceptional savings
              and benefits today. Visit our website or store now to avail of
              these amazing offers and elevate your shopping experience. Thank
              you for choosing us, and we look forward to serving you with the
              best deals in town.
            </p>
            <p>Are u a new Customer? Sign up New one? Sign in</p>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <br></br>

      {/* Legacy */}
      <div className="container col-9">
        <div className="row">
          <div className="col-md-6 text-center bottom">
            <br></br>
            <br></br>
            <h5>Our Legacy</h5>
            <br></br>
            <br></br>
            <p style={{ fontfamily: "Times New Roman , serif" }}>
              Timeless Treats was born from a quest of simplicity and
              familiarity. In this ever-changing and hectic world, we invite you
              to escape to a place where traditional simplicity is cherished. In
              a space where conversations and chatter meet freshly-baked aromas
              and stoke the imagination, we ensure that your unique celebration
              becomes an extraordinary memory.
            </p>
            <br></br>
            <br></br>
            <a href="./About">To know more about us!!</a>
          </div>

          <div className="col-md-6 text-end">
            <img
              src="./images/a10.jpg"
              style={{ height: 400, width: 400 }}
              alt="Legacy Image"
            />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
     
    </div>
    </Layout>
  );
}

export default Home;
