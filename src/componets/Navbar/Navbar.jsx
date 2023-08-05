import search from "../../assets/search.svg";
import logo from "../../../logo.svg";
import person from "../../assets/person.svg";
import Rectangle from "./Rectangle";
import { useState } from "react";
import SideMenu from "./SideMenu";

function Navbar() {
  const [showRectangle, setShowRectangle] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  const toggleRectangle = () => {
    setShowRectangle(!showRectangle);
  };

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  return (
    <div className="h-auto w-full flex  items-center justify-between gap-5 fixed top-0 bg-zinc-900 z-50 p-4 border-b-[1px] border-b-neutral-600">
      <div className="h-full w-auto flex gap-10 items-center">
        <div className="md:hidden h-auto w-5 mr-5 z-50">
          {/* Hamb */}
          <div className="hamburger ml-4 " onClick={toggleSideMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          {showSideMenu && <SideMenu onClose={toggleSideMenu} />}
        </div>
        <div className="hidden md:flex gap-2">
          <div className="md:h-10 md:w-10 h-7 w-7 md:ml-5">
            <img src={logo} alt="" />
          </div>
          <div className="flex items-center font-semibold">SwiftCart</div>
        </div>
      </div>

      <div className="md:h-8 w-auto flex items-center bg-white rounded-sm">
        <input
          type="text"
          className="bg-white md:w-80 w-60 text-black focus:outline-none text-sm ml-3 "
          placeholder="Search for products"
        />
        <button className="bg-white p-2 rounded-md h-8 w-8 hover:border-white ">
          <img src={search} alt="" />
        </button>
      </div>

      <div
        className=" h-8 w-8 bg-slate-300 items-center hidden md:flex rounded-full p-1 border-2 border-black "
        onClick={toggleRectangle}
      >
        <img src={person} alt="" />
      </div>
      {showRectangle && <Rectangle onClose={toggleRectangle} />}
    </div>
  );
}

export default Navbar;
