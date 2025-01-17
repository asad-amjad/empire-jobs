/* eslint-disable prettier/prettier */
import React from "react";

import About from "../components/Footer";
import Header from "../components/Header";
import MainHeroImage from "../components/MainHeroImage";
import PortfolioFull from "../components/PortfolioFull";

const Portfolio = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Our</span>
                  <span className={`block text-primary xl:inline`}> Work</span>
                </h1>
              </div>
            </main>
          </div>
        </div>
        <MainHeroImage />
      </div>
      <PortfolioFull />
      <About />
    </div>
  );
};

export default Portfolio;
