// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="flex flex-col items-start justify-center w-full">
//       <div className="row-1 w-full flex items-center justify-center py-2 bg-[#233A95] text-white text-xs">
//         Due to the <span className="font-bold mx-1">COVID 19</span> epidemic,
//         orders may be processed with a slight delay
//       </div>
//       <div className="row-2 my-container nav-bar flex items-center justify-between w-full">
//         <div className="left flex items-center justify-start w-full gap-4 text-sm py-2">
//           <div className="items1">About us</div>
//           <div className="items2">My account</div>
//           <div className="items3">Wishlist</div>
//           <div className="items4">Order Tracking</div>
//         </div>
//         <div className="right flex items-center justify-end w-full gap-4 text-xs py-2">
//           <div className="items1"> 100% Secure delivery without contacting the courier </div>
//           <div className="items2">Need help? Call Us: + 0020 500</div>
//           <div className="items3">English</div>
//           <div className="items4">USD</div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Navbar;

import React from 'react';

const Navbar = () => {
  return (
    <div className="flex flex-col w-full">
      {/* COVID Notice */}
      <div className="w-full flex items-center justify-center py-2 bg-[#233A95] text-white text-xs">
        Due to the <span className="font-bold mx-1">COVID 19</span> epidemic, orders may be processed with a slight delay
      </div>

      {/* Top Section */}
      <div className="my-container flex items-center justify-between py-2 text-sm border-b">
        {/* Left Links */}
        <div className="flex gap-4">
          <span className="cursor-pointer hover:text-blue-500">About Us</span>
          <span className="cursor-pointer hover:text-blue-500">My account</span>
          <span className="cursor-pointer hover:text-blue-500">Wishlist</span>
          <span className="cursor-pointer hover:text-blue-500">Order Tracking</span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">100% Secure delivery</span>
          </div>
          <div className="text-blue-500 font-bold">Need help? Call Us: +0020 500</div>
          <div className="flex gap-2 items-center">
            <select className="bg-transparent text-gray-700">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <select className="bg-transparent text-gray-700">
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
      </div>

      {/* Logo and Search Bar */}
      <div className="my-container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center text-2xl font-bold text-blue-700">
          <span className="text-yellow-400 mr-2">🛍️</span> bacola
        </div>

        {/* Location Selector */}
        <div className="flex items-center border rounded px-4 py-2">
          <span className="text-gray-500 mr-2">Your Location</span>
          <select className="text-blue-600 font-semibold bg-transparent">
            <option>Select a Location</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border rounded w-full max-w-xl">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-4 py-2 w-full outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2">🔍</button>
        </div>

        {/* Account and Cart */}
        <div className="flex items-center gap-4">
          <div className="text-gray-600 cursor-pointer">👤</div>
          <div className="font-semibold">$2.98</div>
          <div className="relative cursor-pointer">
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="my-container flex items-center justify-between border-t py-2 text-sm">
        <div className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          ALL CATEGORIES
        </div>
        <div className="flex gap-4">
          <span className="hover:text-blue-500 cursor-pointer">HOME</span>
          <span className="hover:text-blue-500 cursor-pointer">SHOP</span>
          <span className="hover:text-blue-500 cursor-pointer">MEATS & SEAFOOD</span>
          <span className="hover:text-blue-500 cursor-pointer">BAKERY</span>
          <span className="hover:text-blue-500 cursor-pointer">BEVERAGES</span>
          <span className="hover:text-blue-500 cursor-pointer">BLOG</span>
          <span className="hover:text-blue-500 cursor-pointer">CONTACT</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

