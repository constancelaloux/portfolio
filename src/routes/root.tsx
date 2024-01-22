import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Outlet
} from "react-router-dom";

export default function Root() {
  const [colorChange, setColorchange] = useState(false);
  const style = {color: colorChange ? "black" : "white", backgroundColor: colorChange ?'white' : '#2F3B69'};
  
  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
    return (
      <>
         <header className= "sticky top-0 z-40 grid-container mx-auto flex flex-row flex items-center flex justify-center h-24 bg-purple text-white" style={style}>
          <div className="basis-2/3 pl-4">
            <a href="/" className="text-2xl">
              Constance Laloux
            </a>
          </div>
          <div className="basis-1/3">
            <nav 
              className="grid grid-cols-4"
              >
              <NavLink className="hover:underline decoration-sky-500" to="/">
                ACCUEIL
              </NavLink>
              <NavLink className="hover:underline decoration-sky-500" to="/about">
                A PROPOS
              </NavLink>
              <NavLink className="hover:underline decoration-sky-500" to="/portfolio">
                PORTFOLIO
              </NavLink>
              <NavLink className="hover:underline decoration-sky-500" to="/contact">
                CONTACT
              </NavLink>
            </nav>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  }