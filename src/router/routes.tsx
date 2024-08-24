import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

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
