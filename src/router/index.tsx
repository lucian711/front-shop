import { RouterProvider } from "react-router-dom";

import Routes from "./routes";
function Router() {
  const router = Routes();
  return <RouterProvider router={router} />;
}

export default Router;
