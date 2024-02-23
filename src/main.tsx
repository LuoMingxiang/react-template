import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "virtual:uno.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
