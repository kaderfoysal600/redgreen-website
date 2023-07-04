import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Phone from "./pages/Phone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "/calculator",
      //   element: <Calculator />,
      // },
    ],
  },
  // {
  //   path: "*",
  //   element: <Errorpage />,
  // },
  {
    path: "/phone",
    element: <Phone />,
  },
]);
function App() {
  return (
    <>
      {
        <div className="app">
          <Header />
          <RouterProvider router={router} />
        </div>
      }
    </>
  );
}

export default App;
