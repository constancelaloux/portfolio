import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import Contact from './components/Contact/contact';
import Home from './pages/Home/home';
import Portfolio from './components/Portfolio/portfolio';
import About from './components/About/about';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />, // Ce composant contient ton menu burger
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/about",
          element: <About />
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}
