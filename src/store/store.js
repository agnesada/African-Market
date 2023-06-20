import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import fetchProductReducer from "./gets/fetchProductSlice";
import singleProductReducer from "./gets/singleProductSlice";
import relatedProducReducer from "./gets/relatedProductSlice";
import loginReducer from "./auth/loginSlice";
import registerReducer  from "./auth/signUpSlice";
import newProductReducer  from "./gets/newProductSlice";

const reducer = {
	fetchProduct: fetchProductReducer,
	singleProduct: singleProductReducer,
	relatedProduct: relatedProducReducer,
	login: loginReducer,
	register: registerReducer,
	newProduct: newProductReducer

};

const middleware = [...getDefaultMiddleware(), createLogger()];

const store = configureStore({
	reducer,
	middleware,
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
