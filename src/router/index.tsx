import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import App from "@/pages/App";
import { MainLayout } from "@/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  { path: "/app", element: <App /> },
]);

export { router };
