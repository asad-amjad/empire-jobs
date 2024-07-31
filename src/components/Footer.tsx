import React from 'react';

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

import config from '../config/index.json';

const Footer = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="footer"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} style={{ height: '100px' }} />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section) => (
            // <Link key={`${section.name}-${index}`} href={section.href} passHref>
            //   <a className="font-medium text-gray-500 hover:text-gray-900">
            //     {section.name}
            //   </a>
            // </Link>
            <ScrollLink
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={section.name}
              to={section.href}
              className="font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
            >
              {section.name}
            </ScrollLink>
            // <a
            //   key={`${section.name}-${index}`}
            //   href={section.href}
            //   className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            // >
            //   {section.name}
            // </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="facebook"
            href={socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF
              className="text-gray-800 dark:text-white hover:text-primary"
              size={24}
            />
          </a>
          <a
            aria-label="instagram"
            href={socialMedia.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram
              className="text-gray-800 dark:text-white hover:text-primary"
              size={24}
            />
          </a>
          <a
            aria-label="youtube"
            href={socialMedia.youtube}
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube
              className="text-gray-800 dark:text-white hover:text-primary"
              size={24}
            />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} Empire Jobs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
