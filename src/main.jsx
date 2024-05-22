import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Notion from "./pages/Notion.jsx";
import NotFound from "./pages/NotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "notion",
    element: <Notion />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen w-full bg-neutral-900 text-neutral-400 px-8 sm:px-0 pt-8">
      <div className="max-w-3xl mx-auto lg:mt-40">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
