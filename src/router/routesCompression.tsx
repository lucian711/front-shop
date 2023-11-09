import { lazy } from "react";

import { Spinner } from "@/components";
const ProductList = lazy(() => import("@/pages/product"));

export const routesCompression = [
  {
    path: "/product",
    Component: ProductList,
    loader: Spinner
  }
];
