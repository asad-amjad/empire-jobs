import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';
import config from '../config/index.json';

const PortfolioFull = () => {
  const { portfolio } = config;
  const { allImages } = portfolio;

  return (
    <div className="pb-12 bg-background w-full" id="features">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto">
          <PhotoProvider>
            {allImages.map((src, index) => (
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
      </div>
    </div>
  );
};

export default PortfolioFull;
