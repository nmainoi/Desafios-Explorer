import { BrowserRouter } from "react-router-dom";

import { PagesRoutes } from "./pages.routes";


export function Routes() {
  return (
    <BrowserRouter>
      <PagesRoutes />
    </BrowserRouter>
  );
}