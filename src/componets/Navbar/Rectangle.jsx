import { useState, useEffect } from "react";

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
      <p className="cursor-pointer opacity-80 hover:text-gray-500">
        Your Profile
      </p>
      <p className="cursor-pointer opacity-80 hover:text-gray-500">
        Account Info
      </p>
      <p className="cursor-pointer opacity-80 hover:text-gray-500">
        Contact Information
      </p>
      <p className="cursor-pointer opacity-80 hover:text-gray-500">
        Profile Overview
      </p>
      <p className="cursor-pointer opacity-80 hover:text-gray-500">
        Activity Log
      </p>
      <p className="cursor-pointer opacity-80 hover:text-gray-500">
        Help & Support
      </p>
      <p className="cursor-pointer opacity-80 hover:text-gray-500">Settings</p>
      <p className="cursor-pointer opacity-80 hover:text-gray-500">Logout</p>
      <button
        onClick={handleClick}
        className="right-0 h-10 rounded-full bg-transparent hover:border-transparent absolute -top-14"
      ></button>
    </div>
  );
}

export default Rectangle;
