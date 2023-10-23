import { useState, useEffect } from "react";
import navs from "../../data/recnav";

function Rectangle({ onClose }) {
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
      className={`w-72 hidden md:flex flex-col items-center justify-center p-5 gap-6 bg-zinc-800 fixed top-[4.6rem] right-0 z-40 transition-transform duration-300 ease-in-out transform ${
        isShowing ? "translate-x-0" : "translate-x-full"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      {navs.map((nav) => (
        <p
          key={nav.id}
          className="cursor-pointer opacity-80 hover:text-gray-500"
        >
          {nav.name}
        </p>
      ))}

      <button
        onClick={handleClick}
        className="right-0 h-10 rounded-full bg-transparent hover:border-transparent absolute -top-14"
      ></button>
    </div>
  );
}

export default Rectangle;
