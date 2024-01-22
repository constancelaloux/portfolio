import * as React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  //createRoutesFromElements,
  //Route,
} from "react-router-dom";

import Root from "./routes/root";
import Contact from './components/Contact/contact';
//import ErrorPage from './pages/ErrorPages/Error-page';
import Home from './pages/Home/home';
import Portfolio from './components/Portfolio/portfolio';
import About from './components/About/about';


export default function App() {
  const router = createBrowserRouter([
    {
      path:"/", 
      element:<Root />,
     // errorElement:<ErrorPage />,
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
          element: <Portfolio />
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

/*import './App.css';

function App() {
  return (
    <div className="App">
      <p>Bonjour les amis</p>
    </div>
  );
}



export default App;*/
