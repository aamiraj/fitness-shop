import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import ProductManagement from "../pages/ProductManagement";
import AddProduct from "../pages/AddProduct";
import AboutUs from "../pages/AboutUs";

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
        path: '/shop',
        element: <Shop />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/product-management',
        element: <ProductManagement />,
      },
      {
        path: '/add-product',
        element: <AddProduct />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
    ],
  },
  {
    path: "/log-in",
    element: <div>Log in</div>,
  },
  {
    path: "/sign-up",
    element: <div>Sign up</div>,
  },
]);

export default router;
