import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layout/BaseLayout";
import { Dashboard, PageNotFound, ProductDetails } from "../pages";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: ROUTES.DASHBOARD,
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: ROUTES.PRODUCT_DETAILS,
        element: <ProductDetails />,
      },
    ],
  },
  // For any routes that does not exist in application
  { path: ROUTES.PAGE_NOTE_FOUND, element: <PageNotFound /> },
]);
