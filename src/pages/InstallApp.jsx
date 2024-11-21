import React from 'react';
import img7 from "../svgs/googleplay.svg";
import img8 from "../svgs/applestore.svg";
import Navbar from "../components/Navbar";

export default function InstallApp() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-[15%] mb-auto">
        <h1 className="px-2 text-sm text-center sm:text-xl md:px-10">
          Download our app now by clicking the button below and enjoy a seamless
          experience on your device.
        </h1>
        {/* Add appstore and playstore download icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://play.google.com/store/apps/details?id=ca.planexa" target="_blank" rel="noopener noreferrer">
            <img src={img7} alt="Download from Google Play" className="w-32 h-auto" />
          </a>
          <a href="https://apps.apple.com/us/app/planexa/id6736920900" target="_blank" rel="noopener noreferrer">
            <img src={img8} alt="Download from Apple Store" className="w-32 h-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}
