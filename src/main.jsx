import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./pages/Home";
import Project from "./pages/Project";
import RootLayout from "./Layouts/RootLayout";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErroPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="Project" element={<Project/>}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="*" element={<ErrorPage/>}/>

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
