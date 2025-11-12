import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import Project from "../pages/Project.tsx";
import Contact from "../pages/Contact.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
