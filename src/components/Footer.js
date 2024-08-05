import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">USA</h3>
            <p>SAFERTEK SOFTWARE LLC</p>
            <p>153 E State Highway 121</p>
            <p>Suite 100, Coppell, TX 75019</p>
            <p>Call: (972) 957-7596</p>
            <p>Email: sales@safertek.com</p>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-bold mb-2">INDIA</h3>
            <p>SAFERTEK IT SOLUTIONS PVT LTD</p>
            <p>8-B, 8th Floor, Western Pearl</p>
            <p>Survey No. 13(P), Kondapur</p>
            <p>Hyderabad, Telangana 500084</p>
            <p>Email: careers@safertek.com</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; Copyright 2023 SAFERTEK SOFTWARE LLC - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;