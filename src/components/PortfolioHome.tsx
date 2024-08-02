// @ts-nocheck
import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import config from "../config/index.json";

// eslint-disable-next-line import/order
import Link from "next/link";

const PortfolioHome = () => {
  const { portfolio } = config;
  const { primaryImages } = portfolio;

  return (
    <div className="bg-background w-full" id="our-work">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center">
          Our
          <span className="text-primary"> Work</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto">
          <PhotoProvider>
            {primaryImages.map((src, index) => (
              <PhotoView key={index} src={src}>
                <div className="w-full h-64 bg-gray-200 cursor-pointer">
                  <img
                    src={src}
                    alt={`Portfolio ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>

        <div className="text-center mt-5">
          <div className="rounded-md shadow inline-block px-4 py-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-3 py-1 font-medium text-primary bg-white border border-primary rounded-lg shadow-md transition-colors duration-300 hover:bg-primary hover:text-white hover:border-transparent"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;
