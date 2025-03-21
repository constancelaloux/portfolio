import React, { useState } from "react";
import { portfolio } from "../../datas/portfolioList"; // Assure-toi que les données sont bien présentes

function Portfolio() {
  console.log('Portfolio page loaded');
  return (
    <div className="grid-container mx-auto flex flex-col items-center justify-center mt-8">
      <h2 className="text-3xl font-bold text-black border-b-4 border-indigo-500 pb-6">
        MES PROJETS
      </h2>
      <>
        <GetFilters />
        <ShowPortfolio />
      </>
    </div>
  );
}

function ShowPortfolio() {
  const [show, setShow] = useState<number | null>(null);

  function handleMouseEnter(id: number) {
    setShow(id);
  }

  function handleMouseLeave() {
    setShow(null);
  }

  return (
    <ul className="grid grid-cols-3 flex space-x-4 mt-8">
      {portfolio.map((portfolioItem) => (
        <li key={portfolioItem.id}>
          <div className="grid grid-cols-1">
            <div className="relative">
              <img
                className="Product screenshot"
                src={portfolioItem.image}
                alt="img"
                onMouseEnter={() => handleMouseEnter(portfolioItem.id)}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            {show === portfolioItem.id && (
              <div className="absolute text-white">
                <h3>{portfolioItem.name}</h3>
                <h4>{portfolioItem.title}</h4>
                <p>{portfolioItem.text}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

function GetFilters() {
  return (
    <p className="grid grid-cols-4 mt-8 text-center">
      <a href="#cuisine">PHP</a>
      <a href="#jardin">Symfony</a>
      <a href="#salon">React</a>
      <a href="#salon">Angular</a>
    </p>
  );
}

export default Portfolio;
