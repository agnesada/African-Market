import React, { useEffect } from "react";
import NavHeader from "../components/Navigation/NavHeader";
import HeroSection from "../components/HeroSection/Hero";
import FeatureArea from "../components/HeroSection/feature";
import "../style/homePage.css";
import { fetchProduct } from "../store/gets/fetchProductSlice";
// import { newProduct } from "../store/gets/newProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdStarOutline, IoMdStar, IoMdStarHalf } from "react-icons/io";

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    loading: ploading,
    data: pData,
    error: pError, 
  } = useSelector((state) => state.fetchProduct);

  const displayedProducts = pData?.slice(0, 8); // Display 8 products initially

  // const {
  //   loading: nLoading,  
  //   data: nData,
  //   error: nError,
  // } = useSelector((state) => state.newProduct);

  useEffect(() => {
    dispatch(fetchProduct());
    // dispatch(newProduct());
  }, [dispatch]);

  return (
    <div>
      <NavHeader />
      <HeroSection />
      <FeatureArea />

      <>
        {/* Begginning of new products */}
        {/* <div className="container content-area">
          <div className=" product-area d-lg-flex align-items-center justify-content-between mb-6 mb-lg-8">
            <h2 className="similar-products-title mt-5">Similar products</h2>
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              {nLoading && <p></p>}
              {nError && <p>error: {nError}</p>}
              {nData &&
                nData.map((products, i) => (
                  <div className="col-md-3" key={i}>
                    <Link
                      to={`/products/${products._id}`}
                      className="text-decoration-none"
                    >
                      <div className="imgDiv text-center">
                        <img
                          className="productImg"
                          src={products?.image[0]}
                          alt={products?.name}
                          width={"100%"}
                        />
                      </div>
                      <div className="product-item-info bg-white">
                        <h2 className="product-item-title">{products?.name}</h2>
                        <h5 className="product-item-brand">{products.brand}</h5>
                        <h5 className="relatedProduct-item-price">
                          &#8358;{products?.price}
                        </h5>
                        <div className="product-item-review-icon">
                          <p>
                            <span>
                              {products.rating >= 1 ? (
                                <IoMdStar />
                              ) : products.rating === 0.5 ? (
                                <IoMdStarHalf />
                              ) : (
                                <IoMdStarOutline />
                              )}
                            </span>
                            <span>
                              {products.rating >= 2 ? (
                                <IoMdStar />
                              ) : products.rating === 1.5 ? (
                                <IoMdStarHalf />
                              ) : (
                                <IoMdStarOutline />
                              )}
                            </span>
                            <span>
                              {products.rating >= 3 ? (
                                <IoMdStar />
                              ) : products.rating === 2.5 ? (
                                <IoMdStarHalf />
                              ) : (
                                <IoMdStarOutline />
                              )}
                            </span>
                            <span>
                              {products.rating >= 4 ? (
                                <IoMdStar />
                              ) : products.rating === 3.5 ? (
                                <IoMdStarHalf />
                              ) : (
                                <IoMdStarOutline />
                              )}
                            </span>
                            <span>
                              {products.rating >= 5 ? (
                                <IoMdStar />
                              ) : products.rating === 4.5 ? (
                                <IoMdStarHalf />
                              ) : (
                                <IoMdStarOutline />
                              )}
                            </span>
                          </p>
                        </div>
                        <div>
                          {products.quantity === 0 ? (
                            <p className="sold-out-btn" disabled>
                              Sold out
                            </p>
                          ) : (
                            <button
                              className="single_add_to_cart_button"
                              type="submit"
                              name="add-to-cart"
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div> */}

        {/* Beginning of Featured Products */}
        <div className="main-content-wrapper">
          <div className="container">
            <div className="content-area">
              <div className=" product-area d-lg-flex align-items-center justify-content-between mb-6 mb-lg-8">
                <h2 className="featuredHearder text-center text-lg-start mt-n2 mb-5 mb-lg-0 ">
                  Featured Products
                </h2>
                <div className="masonry-filter-menu text-center">
                  <button className="viewAll ms-0" data-filter="*">
                    <a href="/all-products">View all</a>
                  </button>
                </div>
              </div>

              <div className="row justify-content-center">
                {ploading && <p>Loading...</p>}
                {pError && <p>{pError}</p>}

                {displayedProducts &&
                  displayedProducts.map((products, i) => (
                    <div className="col-md-3 productCard" key={i}>
                      <Link className="linkTo" to={`/products/${products._id}`}>
                        <div className="imgDiv">
                          <img
                            className="cardImg"
                            src={products.image[0]}
                            alt={products.name}
                            width={"100%"}
                          />
                          {/* <button type = "button" className="product-action-btn action-btn-wishlist" data-bs-toggle = "modal" data-bs-target = "#action-wish-listModal">
                          <i className="icon-heart">
                             
                          </i>
                      </button> */}
                        </div>

                        <div className="product-item-info bg-white">
                          <h5 className="product-item-title">
                            {products.name}
                          </h5>
                          <h5 className="product-item-brand">
                            {products.brand}
                          </h5>
                          <div className="product-item-price">
                            <p>&#8358;{products.price.toLocaleString()}</p>

                            {/* <span className="price-old"> $260.00</span> */}
                          </div>
                          <div className="product-item-review-icon">
                            <p>
                              <span>
                                {products.rating >= 1 ? (
                                  <IoMdStar />
                                ) : products.rating === 0.5 ? (
                                  <IoMdStarHalf />
                                ) : (
                                  <IoMdStarOutline />
                                )}
                              </span>
                              <span>
                                {products.rating >= 2 ? (
                                  <IoMdStar />
                                ) : products.rating === 1.5 ? (
                                  <IoMdStarHalf />
                                ) : (
                                  <IoMdStarOutline />
                                )}
                              </span>
                              <span>
                                {products.rating >= 3 ? (
                                  <IoMdStar />
                                ) : products.rating === 2.5 ? (
                                  <IoMdStarHalf />
                                ) : (
                                  <IoMdStarOutline />
                                )}
                              </span>
                              <span>
                                {products.rating >= 4 ? (
                                  <IoMdStar />
                                ) : products.rating === 3.5 ? (
                                  <IoMdStarHalf />
                                ) : (
                                  <IoMdStarOutline />
                                )}
                              </span>
                              <span>
                                {products.rating >= 5 ? (
                                  <IoMdStar />
                                ) : products.rating === 4.5 ? (
                                  <IoMdStarHalf />
                                ) : (
                                  <IoMdStarOutline />
                                )}
                              </span>
                            </p>
                            <p>
                              {products.quantity === 0 ? (
                                <p className="sold-out-btn" disabled>
                                  Sold out
                                </p>
                              ) : (
                                <button
                                  className="single_add_to_cart_button"
                                  type="submit"
                                  name="add-to-cart"
                                >
                                  Add to Cart
                                </button>
                              )}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            {/* End of Featured Products */}
          </div>
        </div>
      </>
    </div>
  );
};

export default HomePage;
