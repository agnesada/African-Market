import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./categoryComponent.css";
import { category } from "../../store/gets/categorySlice";
import { useParams } from "react-router-dom";

const CategoryComponent = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { data: cData } = useSelector((state) => state.category);

  const handleCategoryClick = (event) => {
    event.preventDefault();
    const filteredProducts = cData.filter((products) => products.category === category);
    console.log("Filtered products:", filteredProducts);
    console.log("Category clicked:", category);
    console.log(handleCategoryClick);
  };

  useEffect(() => {
    dispatch(category(params.category));
  }, [dispatch, params.category]);

  return (
    <div className="container container-pd">
      {cData && (
        <div className="button-set react-horizontal-scrolling-menu--scroll-container">
          <button
            onClick={(event) => handleCategoryClick(event)}
            className="categories-scrolling-item aria-current"
          >
            All
          </button>
          <button
            onClick={(event) => handleCategoryClick(event)}
            className="categories-scrolling-item "
          >
            Cereals
          </button>
          <button
            onClick={(event) => handleCategoryClick(event)}
            className="categories-scrolling-item "
          >
            Soft Drinks
          </button>
          <button
            onClick={(event) => handleCategoryClick(event)}
            className="categories-scrolling-item "
          >
            Seafood
          </button>
          <button
            onClick={(event) => handleCategoryClick(event)}
            className="categories-scrolling-item "
          >
            Meat
          </button>
          <button
            onClick={(event) => handleCategoryClick(event)}
            className="categories-scrolling-item "
          >
            Meat
          </button>
          {/* {cData.filter((products, i) => (
            <button
              key={i}
              onClick={(event) => handleCategoryClick(event, products.category)}
              className="categories-scrolling-item aria-current"
            >
              Cereals
            </button>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default CategoryComponent;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "./categoryComponent.css";
// import fetchCategory from "../../store/gets/fetchCategorySlice";

// const CategoryComponent = () => {
//   const dispatch = useDispatch();

//   const {
//     loading: cloading,
//     data: cData,
//     error: cError,
//   } = useSelector((state) => state.fetchCategory);

//   useEffect(() => {
//     dispatch(fetchCategory());
//   }, [dispatch]);

//   return (
//     <div className="container container-pd">
//       {cloading && <p></p>}
//       {cError && <p>{cError}</p>}
//       {cData && (
//         <div className="button-set react-horizontal-scrolling-menu--scroll-container">
//           {cData.filter.map((categories, _id) => (
//             <div className="category-div" key={_id}>
//               {/* <img src="" alt="" /> */}
//               <a href="/categories" className="categories-scrolling-item">
//                 {categories.category}
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryComponent;
