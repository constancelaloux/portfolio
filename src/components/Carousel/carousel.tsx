import { useEffect, useState } from "react";
import { portfolio } from "../../datas/portfolioList";
import "../../styles/portfolio.css";
import { SeePortfolioButton } from "../Buttons/seePortfolio";

export default function Carousel(){

  return(
    <div className="grid-container mx-auto flex flex-col flex items-center flex justify-center mt-8">
      <h2 className="text-3xl font-bold text-black border-b-4 border-indigo-500 pb-6">
        PORTFOLIO   
      </h2>
      < ShowPortfolio />
      < SeePortfolioButton />
    </div>
  );
};

function ShowPortfolio() {
  const [portfolioData] = useState(portfolio);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className="section-center grid grid-cols-3 flex space-x-4 mt-8">
      {portfolioData.map((portfolio, portfolioIndex) => {
        const { id, image} = portfolio;
        let position = "nextSlide";

        if (portfolioIndex === index) {
          position = "activeSlide";
        }

        if (
          portfolioIndex === index - 1 ||
          (index === 0 && portfolioIndex === portfolioData.length - 1)
        ){
          position = "lastSlide";
        }
        
        return (
          <article key={id} className={position}>
              <img src={image} alt='img' className="person-img animate:scale-125" />
          </article>
        );
      })}
    </div>
  );
};
/*
          <article key={id} className={position}>
            {id < 4 &&
              <img src={image} alt='img' className="person-img" />
            }
          </article>*/
/*      return (
          <ul className="grid grid-cols-3 flex space-x-4 mt-8">
              <li key={id} className={position}>
                {id < 4 &&
                  <div className="grid grid-cols-1">
                    <img className='Product screenshot' src={image} alt='img'/>
                  </div>
                }
              </li>
          </ul>
      );*/