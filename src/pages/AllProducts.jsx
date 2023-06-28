import React, { useEffect } from "react";
import NavHeader from "../components/Navigation/NavHeader";
import "../style/homePage.css";
import { fetchProduct } from "../store/gets/fetchProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdStarOutline, IoMdStar, IoMdStarHalf } from "react-icons/io";
import CategoryComponent from "../components/CategorySection/CategoryComponent";

const AllProducts = () => {
  const dispatch = useDispatch();
  const {
    loading: ploading,
    data: pData,
    error: pError,
  } = useSelector((state) => state.fetchProduct);

  const displayedProducts = pData?.slice(0, 16); // Display 8 products initially

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div>
      <NavHeader />
      <div className="main-content-wrapper mt">
        <div className="container">
          {/* Beginning of Featured Products */}
          <div className="content-area">
            <div className=" product-area d-lg-flex align-items-center justify-content-between mb-6 mb-lg-8">
              <h2 className="featuredHearder text-center text-lg-start mt-n2 mb-5 mb-lg-0 ">
                Featured Products
              </h2>
            </div>

            <CategoryComponent />

            <div className="row ">
              {ploading && <p>Loading...</p>}
              {pError && <p>{pError}</p>}

              {displayedProducts &&
                displayedProducts.map((products, _id) => (
                  <div className="col-md-3 productCard" key={_id}>
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
                        <h5 className="product-item-title">{products.name}</h5>
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
    </div>
  );
};

export default AllProducts;
