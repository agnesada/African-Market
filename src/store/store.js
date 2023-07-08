import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import fetchProductReducer from "./gets/fetchProductSlice";
import singleProductReducer from "./gets/singleProductSlice";
import relatedProducReducer from "./gets/relatedProductSlice";
import loginReducer from "./auth/loginSlice";
import registerReducer  from "./auth/signUpSlice";
import newProductReducer  from "./gets/newProductSlice";
import categoryReducer from "./gets/categorySlice";
import fetchCategoryReducer from "./gets/fetchCategorySlice";

const reducer = {
	fetchProduct: fetchProductReducer,
	singleProduct: singleProductReducer,
	relatedProduct: relatedProducReducer,
	login: loginReducer,
	register: registerReducer,
	newProduct: newProductReducer,
	category: categoryReducer,
	fetchCategory: fetchCategoryReducer

};

const middleware = [...getDefaultMiddleware(), createLogger()];

const store = configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(() => {
	const state = store.getState();
	// localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
  
	localStorage.setItem('userInfo', JSON.stringify(state.login.data));
  
  });

export default store;
