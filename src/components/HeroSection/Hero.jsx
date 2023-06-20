import React from "react";
import "./hero.css";
import HeroImage from "../../assets/heroImg.svg";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import NavHeader from "../Navigation/NavHeader";

function HeroSection() {
  return (
    <section className="hero-cta">
      <div className="container">
        {/* <NavHeader /> */}
        <div className="row heroContainer">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6">
            <div className="section heroText">
              <h1 className="heroHeader">Get Quality African Groceries</h1>
              <p className="para">Quick delivery at your doorstep</p>
              <div className="buttonContainer mt-3">
                <button className="heroBtn">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-xlg-6 ">
            <img className="heroImg" src={HeroImage} alt="i" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
