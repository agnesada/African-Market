import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  // Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Loadable from "react-loadable";
import PreLoader from "./components/PreLoader";
// import Error from "./pages/Error";
// import Layout from "./Layout";


const SignUpPage = Loadable({
  loader: () => import("./pages/SignUpPage"),
  loading: PreLoader,
});

const LoginPage = Loadable({
  loader: () => import("./pages/LoginPage"),
  loading: PreLoader,
});

const HomePage = Loadable({
  loader: () => import("./pages/HomePage"),
  loading: PreLoader,
});

const AllProducts = Loadable({
  loader: () => import("./pages/AllProducts"),
  loading: PreLoader,
});

const DetailedProduct = Loadable({
  loader: () => import("./pages/DetailedSingleProduct"),
  loading: PreLoader,
});

// const ErrorPage = Loadable({
//   loader: () => import("./pages/Error"),
//   loading: PreLoader,
// });




const App = () => {
  return (
    <Router>
      <main className="main-section">
        <Suspense fallback={<PreLoader />}>
          <Routes>
            {/* <Route path="*" element={<ErrorPage />} /> */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/all-products" element={<AllProducts />} />
            <Route path="/products/:id" element={<DetailedProduct />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<SignUpPage />} />


          </Routes>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
