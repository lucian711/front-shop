import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import { Login } from "../pages/login";

function Routes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: []
    },
    {
      path: "login",
      element: <Login />
    }
  ]);
}

export default Routes;
