import React from "react";
import "./productFeatures.css";
import cardImg from "../../assets/card-img.jpg"

function ProductsFeature() {
  return (
    <div className="main-content-wrapper">
      <div className="container">

        {/* Beginning of New Arrivals */}
        <div className="content-area">
          <div className=" product-area d-lg-flex align-items-center justify-content-between mb-6 mb-lg-8">
            <h2 className="text-center text-lg-start text-black mt-n2 mb-5 mb-lg-0 ">
              New Arrivals!
            </h2>
            <div className="masonry-filter-menu text-center">
              <button className="viewAll ms-0" data-filter="*">
                View all
              </button>
            </div>
          </div>

          <div className="row margin-top">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>

          </div>

          <div className="row margin-top">
            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="imgDiv">
                    <img className="cardImg" src={ cardImg} alt="i" />
                    {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                        <i className="icon-heart">
                            ::before
                        </i>
                    </button> */}
                </div>

                <div className="product-item-info bg-white">
                    <h5 className="product-item-title">
                        Labis Chin Chin, 3 lbs
                    </h5>
                    <div className="product-item-price">
                        $160.00 - 
                        <span className="price-old"> $260.00</span>
                    </div>
                    <div className="product-item-review-icon">
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                        <i className="fa fa-star">

                        </i>
                    </div>

                    <button className="single_add_to_cart_button" type = "submit" value={6235} name="add-to-cart">
                        Add to Cart
                    </button>
                </div>
            </div>
            
          </div>
          {/* End of New arrivals */}

        </div>
      </div>
    </div>
  );
}

export default ProductsFeature;
