import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Router/Layout";
import Home from "../src/Components/Home/Home.js";
import Aboutme from "../src/Components/About/Aboutme.js";
import Skills from "../src/Components/Skills/Skills.js";
import ContactMe from "../src/Components/Contactme/ContactMe";

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
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
