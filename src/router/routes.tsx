import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout";
import { Login } from "../pages/login";

import { routesCompression } from "./routesCompression";

import { ErrorBoundary } from "@/components";

const childrenArray = routesCompression;

function Routes() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: childrenArray
    },
    {
      path: "login",
      element: <Login />
    }
  ]);
}

export default Routes;
