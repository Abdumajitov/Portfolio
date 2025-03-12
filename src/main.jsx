import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
const App = lazy(() => import("./App.jsx"));
const Footer = lazy(() => import("./components/footer/Footer.jsx"));
const Projects = lazy(() => import("./pages//Projects.jsx"));
const Project = lazy(() => import("./pages//Project.jsx"));
const Contacts = lazy(() => import("./pages/Contacts.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/project/:id",
    element: <Project />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense>
      <RouterProvider router={router} />
      <Footer/>
    </Suspense>
  </StrictMode>
);
