import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router";
import { theme } from "theme/theme";
import { router } from "./utils/routesConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
