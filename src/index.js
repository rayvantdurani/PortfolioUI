import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Router/Layout";
import Home from "../src/Components/Home/Home.js";
import Aboutme from "../src/Components/About/Aboutme.js";
import Skills from "../src/Components/Skills/Skills.js";
import ContactMe from "../src/Components/Contactme/ContactMe";
import BackG from "./Components/Background/BackG";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "AboutMe",
        element: <Aboutme />,
      },
      {
        path: "Skills",
        element: <Skills />,
      },
      {
        path: "ContactMe",
        element: <ContactMe />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BackG />
    <RouterProvider router={router} />
  </React.StrictMode>
);
