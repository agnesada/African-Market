import React from "react";
import "./categoryComponent.css"

const CategoryComponent = () => {
  return (
    <div className="container">
      <div className="button-set react-horizontal-scrolling-menu--scroll-container">
        <button className="categories-scrolling-item aria-current">All</button>
        <button className="categories-scrolling-item">Body Care</button>
        <button className="categories-scrolling-item">Drinks</button>
        <button className="categories-scrolling-item">Etnic Delicacies</button>
        <button className="categories-scrolling-item">Fish & Seafoods</button>
        <button className="categories-scrolling-item">Fresh Produce</button>
        <button className="categories-scrolling-item">
          Fruits & Vegetables
        </button>
        <button className="categories-scrolling-item">Grains</button>
        <button className="categories-scrolling-item">Household</button>
        <button className="categories-scrolling-item">Oil</button>
        <button className="categories-scrolling-item">Provisions</button>
        <button className="categories-scrolling-item">Species</button>
        <button className="categories-scrolling-item">Species</button>
        <button className="categories-scrolling-item">Species</button>
        <button className="categories-scrolling-item">Species</button>
        <button className="categories-scrolling-item">Species</button>
        <button className="categories-scrolling-item">Species</button>
      </div>
    </div>
  );
};

export default CategoryComponent;
