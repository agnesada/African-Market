import React from "react";
import "./hero.css";
import cartIcon from "../../assets/cartIcon.svg"
import calendarIcon from "../../assets/calendarIcon.svg"
import deliveryIcon from "../../assets/deliveryIcon.svg"

function FeatureArea() {
  return (
    <div className="feature-area section-space">
      <div className="container">
        <div className="row mb-n8 mt-n2">
          <div className="col-sm-6 col-md-6 col-lg-4 col-mb-6">
            <div className="feature-item">
              <div className="feature-icon">
                <img className="iconImg" src={cartIcon} alt="Icon" />
              </div>
              <div className="feature-content">
                <h4 className="feature-text">Add Your Items</h4>
                <p>Shop quality authentic African items and add them to your cart.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4 col-mb-6">
            <div className="feature-item">
              <div className="feature-icon">
                <img className="iconImg" src={calendarIcon} alt="Icon" />
              </div>
              <div className="feature-content">
                <h4 className="feature-text">Pick Time Slot</h4>
                <p>Pick a delivery time slot that you want your order delivered, and checkout.</p>
              </div>
            </div>
          </div>
         
          <div className="col-sm-6 col-md-6 col-lg-4 col-mb-6">
            <div className="feature-item">
              <div className="feature-icon">
                <img className="iconImg" src={deliveryIcon} alt="Icon" />
              </div>
              <div className="feature-content">
                <h4 className="feature-text" >Get It Delivered!</h4>
                <p>Relax and get your order delivered to your doorstep contactless and on time!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureArea;
