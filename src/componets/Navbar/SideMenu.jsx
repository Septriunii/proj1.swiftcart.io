import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SideMenu({ onClose }) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
  }, []);

  const handleClick = () => {
    setIsShowing((prevIsShowing) => !prevIsShowing);
  };

  const handleAnimationEnd = () => {
    if (!isShowing) {
      onClose();
    }
  };

  return (
    <div
      className={`w-40 h-auto bg-zinc-800 fixed top-[4.5rem] p-5 left-0 z-40 transition-transform duration-300 ease-in-out transform ${
        isShowing ? "translate-x-0" : "-translate-x-full"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className=" bg-opacity-50  w-full p-2 flex flex-col gap-7 justify-center items-center ">
        <Link to="/">
          <div className="cursor-pointer text-white h-11 w-11 p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center">
            <p className="text-xs opacity-70">Home</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="cursor-pointer text-white h-10 w-10  p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center">
            <p className="text-xs opacity-70">Products</p>
          </div>
        </Link>
        <Link to="/carts">
          <div className="cursor-pointer text-white h-10 w-10  p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center relative">
            <p className="text-xs opacity-70">Cart</p>
          </div>
        </Link>
        <Link to="/purchase">
          <div className="cursor-pointer text-white h-10 w-10  p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center relative">
            <p className="text-xs opacity-70">Purchase</p>
          </div>
        </Link>
      </div>

      <button
        onClick={handleClick}
        className="left-10 h-10 rounded-full bg-transparent hover:border-transparent absolute -top-14"
      ></button>
    </div>
  );
}

export default SideMenu;
