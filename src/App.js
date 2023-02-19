import { RouterProvider } from "react-router";
import { router } from "./utils/routesConfig";

function App() {
  console.log('router: ', router);
  return <RouterProvider router={router} />;
}

export default App;
