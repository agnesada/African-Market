import React, { useEffect, useState } from "react";
import NavHeader from "../components/Navigation/NavHeader";
import { singleProduct } from "../store/gets/singleProductSlice";
import { relatedProduct } from "../store/gets/relatedProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "../style/detailedSingleProduct.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import emptyState from "../assets/empty-state.png";

const DetailedProduct = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [qty, setQty] = useState(1);
  console.log(qty);

  const {
    loading: sLoading,
    error: sError,
    data: sData,
  } = useSelector((state) => state.singleProduct);

  const {
    loading: relatedLoading,
    error: relatedError,
    data: relatedData,
  } = useSelector((state) => state.relatedProduct);

  useEffect(() => {
    dispatch(singleProduct(params.id));
    dispatch(relatedProduct(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <NavHeader />
      <div className="container mt">
        <Breadcrumb>
          <Breadcrumb.Item href="/all-products" className="bc-all-products ">
            All Products
          </Breadcrumb.Item>
          <Breadcrumb.Item className="bc-all-products text-decoration-none">
            {sData?.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="row">
          {sLoading && <p>Loading...</p>}
          {sError && <p>{sError}</p>}
          {sData && (
            <>
              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pt-3">
                <div className="imgContainer">
                  <img
                    className="productImg"
                    src={sData?.image[0]}
                    alt=""
                    width={"100%"}
                  />
                </div>

                <div className="row">
                  {sData.image.map((item, i) => (
                    <div
                      className="col-sm-4 col-md-4 col-lg-4 col-xl-4 pt-3"
                      key={i}
                    >
                      <div className="imgContainer">
                        <img
                          className="productImg"
                          src={item}
                          alt=""
                          width={"100%"}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <h2 className="product-item-title mt-2">{sData?.name}</h2>
                <h5 className="product-item-brand">{sData?.brand}</h5>
                <h2 className="product-item-price">
                  &#8358;{sData?.price.toLocaleString()}
                </h2>
                <div className="product-description-div">
                  <h2 className="product-description-header mt-4">
                    Description
                  </h2>
                  <p className="description-text">{sData.description}</p>
                </div>
                <p>
                  <span className="product-item-review-icon">
                    {sData.rating >= 1 ? (
                      <FaStar />
                    ) : sData.rating === 0.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                  <span className="product-item-review-icon">
                    {sData.rating >= 2 ? (
                      <FaStar />
                    ) : sData.rating === 1.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                  <span className="product-item-review-icon">
                    {sData.rating >= 3 ? (
                      <FaStar />
                    ) : sData.rating === 2.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                  <span className="product-item-review-icon">
                    {sData.rating >= 4 ? (
                      <FaStar />
                    ) : sData.rating === 3.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                  <span className="product-item-review-icon">
                    {sData.rating >= 5 ? (
                      <FaStar />
                    ) : sData.rating === 4.5 ? (
                      <FaStarHalfAlt />
                    ) : (
                      <FaRegStar />
                    )}
                  </span>
                </p>

                {/* <div className="quantity">
                  <input type="button" value="-" className="minus"></input>

                  <label class="screen-reader-text" for="product-qty"></label>
                  <input
                    type="number"
                    id="product-qty"
                    className="input-text"
                    min="1"
                    max=""
                    step="1"
                    placeholder="1"
                    inputemode="numeric"
                    autocomplete="off"
                  ></input>

                  <input type="button" value="+" className="plus"></input>
                </div> */}

                <select onChange={(e) => setQty(e.target.value)}>
                  {[...Array(sData.quantity).keys()].map((i) => (
                    <option value={i + 1} key={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div className="pt-4">
                  {sData.quantity === 0 ? (
                    <p className="soldOutGrey">Sold out</p>
                  ) : (
                    <button className="add-to-cart-btn">Add to cart</button>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Begginning of related products */}
        </div>
      </div>

      <div className="container content-area">
        <div className=" product-area d-lg-flex align-items-center justify-content-between mb-6 mb-lg-8">
          <h2 className="similar-products-title mt-5">Similar products</h2>
        </div>
        <div className="row mt-4">
          {relatedLoading && <p>Loading...</p>}
          {relatedError && <p>error: {relatedError}</p>}
          {relatedData && relatedData.length > 0 ? (
            <>
              {relatedData.map((products, i) => (
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
                      <h5 className="product-item-brand">{products?.brand}</h5>
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
            </>
          ) : (
            <>
              <div className="empty">
                <img className="emptyimg" src={emptyState} alt="emptyState" />
              </div>{" "}
              <p>No related products</p>
            </>
          )}
          {console.log(relatedData)}
        </div>
      </div>
      
    </>
  );
};

export default DetailedProduct;
