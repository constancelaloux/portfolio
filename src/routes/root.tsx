import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa"; 
console.log(FaLinkedin);

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fonction pour fermer le menu après la navigation
  const handleNavigation = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Header */}
      <header
        className={`sticky top-0 z-50 flex justify-between items-center p-4 bg-purple-900 text-white transition-colors duration-300 ${
          menuOpen ? "text-white" : "text-black"
        }`}
      >
        {/* Logo */}
        <div className={`text-2xl ${menuOpen ? "text-white" : "text-black"}`}>
          <a href="/">Constance Laloux</a>
        </div>

        {/* Menu burger */}
        <button
          className={`flex justify-center items-center w-8 h-8 ${menuOpen ? "text-white" : "text-black"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-3xl">X</span> /* Menu fermé */
          ) : (
            <span className="text-3xl">☰</span> /* Menu ouvert */
          )}
        </button>
      </header>

      {/* Menu burger (s'affiche lorsque menuOpen est true) */}
      <div
        className={`bg-black absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 flex flex-col justify-center items-center space-y-4 transition-transform duration-300  ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 40 }} // Assurer que le menu est au-dessus des autres éléments
      >
        <div className="grid grid-cols-2 gap-8 text-center w-full h-full relative">
          {/* Ligne verticale au centre */}
          <div className="absolute left-1/2 top-0 h-full border-l-2 border-white"></div>

        {/* Bouton LinkedIn centré */}
        <div className="flex justify-center items-center">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>

          {/* Première colonne (3 éléments) */}
          <div className="flex flex-col justify-center items-end space-y-4 pr-4">
            <NavLink
              to="/"
              onClick={handleNavigation} // Ferme le menu et navigue vers la page
              className="text-white text-xl"
            >
              ACCUEIL
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleNavigation} // Ferme le menu et navigue vers la page
              className="text-white text-xl"
            >
              A PROPOS
            </NavLink>
            <NavLink
              to="/portfolio"
              onClick={handleNavigation} // Ferme le menu et navigue vers la page
              className="text-white text-xl"
            >
              PORTFOLIO
            </NavLink>
          </div>
          <div className="flex flex-col justify-center items-start space-y-4 pl-4">
            <NavLink
              to="/contact"
              onClick={handleNavigation} // Ferme le menu et navigue vers la page
              className="text-white text-xl"
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/presta"
              onClick={handleNavigation} // Ferme le menu et navigue vers la page
              className="text-white text-xl"
            >
              PRESTATIONS
            </NavLink>
          </div>
        </div>
      </div>

      {/* 🚀 C'est ici que les pages enfants s'afficheront */}
      <main>
        <Outlet />
      </main>
    </>
  );
}
