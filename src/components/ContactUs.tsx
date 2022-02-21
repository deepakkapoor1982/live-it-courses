import React from 'react';

import config from '../config/index.json';

const ContactUs = () => {
  const { contactUs } = config;
  return (
    <main className={`bg-background py-8`} id="contactUs">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a href={contactUs.href}>{contactUs.title}</a>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
