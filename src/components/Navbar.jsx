import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-gray-200 shadow-md">
      <nav className="max-w-[1444px] mx-auto py-4 lg:px-20 px-10 h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="bg-[#458FF6] text-white rounded-full px-3 py-1 font-semibold text-lg">
            T
          </h1>
          <span className="text-lg font-semibold text-black">Trafalgar</span>
        </div>
        <ul className="items-center justify-center hidden gap-6 lg:flex">
          <li>Home</li>
          <li>Find a Doctor</li>
          <li>Apps</li>
          <li>Testimonials</li>
          <li>About Us</li>
        </ul>
        <div
          className="flex text-3xl cursor-pointer lg:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
