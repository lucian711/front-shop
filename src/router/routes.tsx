import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import { Login } from "../pages/login";
import { Shop } from "../pages/shop";

function Routes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/pages/shop", element: <Shop /> }]
    },
    {
      path: "login",
      element: <Login />
    }
  ]);
}

export default Routes;
