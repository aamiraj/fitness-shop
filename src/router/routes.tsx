import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Customer/Cart";
import Checkout from "../pages/Customer/Checkout";
import ProductManagement from "../pages/Admin/ProductManagement";
import AddProduct from "../pages/Admin/AddProduct";
import AboutUs from "../pages/AboutUs";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import EditProduct from "../pages/Admin/EditProduct";
import Admin from "../pages/Admin/Admin";
import Blog from "../pages/Blog";
import Success from "../pages/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/blog/1",
        element: <Blog />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/customer/cart",
        element: <Cart />,
      },
      {
        path: "/customer/checkout",
        element: <Checkout />,
      },
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "/admin/product-management",
            element: <ProductManagement />,
          },
          {
            path: "/admin/add-product",
            element: <AddProduct />,
          },
          {
            path: "/admin/edit-product/:productId",
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
  {
    path: "/log-in",
    element: <LogIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
