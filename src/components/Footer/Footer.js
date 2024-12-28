import React from "react";


const Footer = () => {
  return (
    <div className="sticky bottom-0 bg-gray-100 p-1 border">
      <div className="flex justify-center gap-4 p-1">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 rounded-md border-2 border-blue-500"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
