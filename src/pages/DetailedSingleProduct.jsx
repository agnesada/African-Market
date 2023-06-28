import React, { useEffect, useState } from "react";
import NavHeader from "../components/Navigation/NavHeader";
import { singleProduct } from "../store/gets/singleProductSlice";
import { relatedProduct } from "../store/gets/relatedProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import "../style/detailedSingleProduct.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";

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
    <div>
      <div className="nav-">
        <NavHeader />
      </div>
      <div className="container mt">
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="bc-home">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active></Breadcrumb.Item>
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

                <div className="quantity">
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
                </div>

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

          <h2 className="similar-products-title mt-5">Similar products</h2>

          {relatedLoading && <p>Loading...</p>}
          {relatedError && <p>error: {relatedError}</p>}
          {relatedData && relatedData.length > 0 ?(
            <>
              {relatedData.map((products, i) =>(
                <div>
                  <Link to={`/products/${products._id}`} className="text-decoration-none">
                    <div className="card shadow text-center">
                      <img src={products.image[0]} alt={products.name} width={"100%"} />
                    </div>
                    <div className="card-body">
                      <h2 className="text">{products.name}</h2>
                      <h5>&#8358;{products.price}</h5>
                    </div>
                  </Link>
                </div>
              ))}
            </>
          ):( <p>No related products</p> ) }
        </div>
      </div>
    </div>
  );
};

export default DetailedProduct;
