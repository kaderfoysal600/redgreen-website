import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./component/Footer/Footer";
import Laptop from "./pages/Laptop";
import Tv from "./pages/Tv";
import { useEffect } from "react";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     children: [
//       // {
//       //   path: "/",
//       //   element: <Home />,
//       // },
//       // {
//       //   path: "/calculator",
//       //   element: <Calculator />,
//       // },
//     ],
//   },
//   // {
//   //   path: "*",
//   //   element: <Errorpage />,
//   // },
//   {
//     path: "/phone",
//     element: <Phone />,
//   },
//   {
//     path: "/product-details",
//     element: <ProductDetails />,
//   },
// ]);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route
              path="/product-details/:productSlug"
              element={<ProductDetails />}
            ></Route>

            <Route path="/phone" element={<Phone />}></Route>
            <Route path="/laptop" element={<Laptop />}></Route>
            <Route path="/tv" element={<Tv />}></Route>
          </Routes>
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
