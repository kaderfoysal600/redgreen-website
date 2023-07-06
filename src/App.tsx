import {Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import ProductDetails from "./pages/ProductDetails";
import Footer from "./component/Footer/Footer";

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
  return (
    <>
      {


        <div className="app">

          <Header />
          <Routes>
              <Route path="/" element={
                <Home />
              }> 
              </Route>


              <Route path="/product-details" element={
                <ProductDetails />
              }>
                  </Route>

                  
                <Route path="/phone" element={
                  <Phone />
                }>
                  
                </Route>


          </Routes>
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
