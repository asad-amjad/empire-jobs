import React from 'react';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHashtag } from 'react-icons/fa';

const ContactCard = ({
  icon: Icon,
  title,
  info,
}: {
  icon: React.ElementType;
  title: string;
  info: string;
}) => (
  <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center">
    <div className="flex flex-col items-center">
      <Icon className="text-primary text-5xl mb-4" />
      <div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-600">{info}</p>
      </div>
    </div>
  </div>
);

const ContactInfo = () => {
  return (
    <div className="py-12 bg-background" id="contact-us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="w-full mb-12 text-5xl font-bold leading-tight text-center">
          <span className="text-primary">Contact </span>
          Us
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ContactCard
            icon={FaEnvelope}
            title="Email"
            info="danilo@empirejobs.nl"
          />
          <ContactCard
            icon={FaPhone}
            title="Phone"
            info="+31 (0)61 020 42 19"
          />
          <ContactCard icon={FaHashtag} title="KVK Nr." info="77593685" />
          <ContactCard
            icon={FaMapMarkerAlt}
            title="Address"
            info="showroom in Culemborg,"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
