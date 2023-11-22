import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import WorkandExperiencePage from "./pages/workandexperience/index";
import ProjectsPage from "./pages/projects/index";
import Root from "./pages/root";
import Greetings from "./pages/root/greetings";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/greetings",
        index: true,
        element: <Greetings />,
      },
    ],
  },
  {
    path: "/home",
    index: true,
    element: <HomePage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/worknexperience",
    element: <WorkandExperiencePage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
