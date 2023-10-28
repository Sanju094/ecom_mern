import React from "react";
import Layout from "../components/Layout/Layout";
import "./About.css";

const About = () => {
  return (
    <Layout title={"About Us-Timeless Treats"}>
      <div>
        <section id="home">
          <div className="content">
            <div>
              <h1 className="text-center" style={{color:"green"}}>To Know About Us...</h1>
              <p>Just Scroll down!!</p>
            </div>
          </div>
        </section>

        <div className="container col-9">
          <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="mb-4" style={{ fontWeight: "bold" }}>
              About Our Bakery..
            </h1>
            <p>
              Welcome to Timeless Treats! We take pride in providing delicious
              baked goods to our customers for over 20 years. Our team of
              skilled bakers and pastry chefs ensures that every product is made
              with love and care.
            </p>
            <p>
              Timeless Treats is designed to streamline our operations, manage
              inventory, track orders, and serve our customers better. With the
              help of modern technology, we strive to maintain the highest
              quality while delivering a delightful experience to our patrons.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <div className="container col-5">
              <img
                src="./images/a3.webp"
                className="rounded-circle"
                style={{ alignItems: "center" }}
              ></img>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h4>Why Timeless Treats??</h4>
            <br></br>
            <ul>
              <li>Products made in small batches</li>
              <li>
                Product procured every 48 hours from its authentic region.
              </li>
              <li>
                Product Freshness maintained with our limited quantity
                procurement process
              </li>
            </ul>
          </div>
          <br></br>

          <h3 style={{ fontWeight: "bold" }}>Our Team</h3>
          <br></br>
          <div className="container col-11">
            <div className="row">
              <div className="col-md-4 mb-3">
                <img
                  src="./images/a4.jpg"
                  className="rounded-circle img-fluid"
                  alt="Team Member"
                  style={{ height: 300, width: 300 }}
                />
                <h4 style={{ textAlign: "center" }}>Mr.Aravind Kumar</h4>
                <h6 style={{ textAlign: "center" }}>(CEO)</h6>
              </div>
              <div className="col-md-4 mb-3">
                <img
                  src="./images/a5.jpg"
                  className="rounded-circle img-fluid"
                  alt="Team Member"
                  style={{ height: 300, width: 300 }}
                />
                <h4 style={{ textAlign: "center" }}>Mr.Mukil</h4>
                <h6 style={{ textAlign: "center" }}>(MD)</h6>
              </div>
              <div className="col-md-4 mb-3">
                <img
                  src="./images/a6,jpg.webp"
                  className="rounded-circle img-fluid"
                  alt="Team Member"
                  style={{ height: 300, width: 300 }}
                />
                <h4 style={{ textAlign: "center" }}>Ms.Cristine</h4>
                <h6 style={{ textAlign: "center" }}>(AMD)</h6>
              </div>
              <br></br>
              <br></br>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <img
                  src="./images/a7.jpg"
                  className="rounded-circle img-fluid"
                  alt="Team Member"
                  style={{ height: 300, width: 300 }}
                />
                <h4 style={{ textAlign: "center" }}>Ms.Alice</h4>
                <h6 style={{ textAlign: "center" }}>(chief Baker)</h6>
              </div>
              <div className="col-md-4 mb-3">
                <img
                  src="./images/a8.jpg"
                  className="rounded-circle img-fluid"
                  alt="Team Member"
                  style={{ height: 300, width: 300 }}
                />
                <h4 style={{ textAlign: "center" }}>Mr.siju</h4>
                <h6 style={{ textAlign: "center" }}>(Baker)</h6>
              </div>
              <div className="col-md-4 mb-3">
                <img
                  src="./images/a9.jpg"
                  className="rounded-circle img-fluid"
                  alt="Team Member"
                  style={{ height: 300, width: 300 }}
                />
                <h4 style={{ textAlign: "center" }}>Mr.Reka</h4>
                <h6 style={{ textAlign: "center" }}>(Maintenance)</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
