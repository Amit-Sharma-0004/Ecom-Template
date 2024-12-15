import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full">
      <div className="row-1 w-full flex items-center justify-center py-2 bg-[#233A95] text-white text-xs">
        Due to the <span className="font-bold mx-1">COVID 19</span> epidemic,
        orders may be processed with a slight delay
      </div>
      <div className="row-2 my-container nav-bar flex items-center justify-between w-full">
        <div className="left flex items-center justify-start w-full gap-4 text-sm py-2">
          <div className="items1">About us</div>
          <div className="items2">My account</div>
          <div className="items3">Wishlist</div>
          <div className="items4">Order Tracking</div>
        </div>
        <div className="right flex items-center justify-end w-full gap-4 text-sm py-2">
          <div className="items1"> 100% Secure delivery without contacting the courier </div>
          <div className="items2">Need help? Call Us: + 0020 500</div>
          <div className="items3">English</div>
          <div className="items4">USD</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
