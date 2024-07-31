import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';
import config from '../config/index.json';

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
          <div className="rounded-md shadow inline-block">
            <a
              href="/portfolio"
              className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-white md:py-4 md:text-lg md:px-10`}
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHome;
