import { createBrowserRouter } from "react-router-dom";
import { Dashboard, PageNotFound, ProductDetails } from "pages";
import { ROUTES } from "./routes";
import { BaseLayout } from "layout";

export const router = createBrowserRouter([
  {
    path: ROUTES.BASE,
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
