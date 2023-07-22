import { useState, useEffect } from "react";

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
      className={`w-40 h-[30rem] bg-red-800 fixed top-20 left-0 z-40 transition-transform duration-300 ease-in-out transform ${
        isShowing ? "translate-x-0" : "-translate-x-full"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      {/* Content of the side menu */}
      <button
        onClick={handleClick}
        className="left-10 h-10 rounded-full bg-transparent hover:border-transparent absolute -top-14 bg-green-900"
      ></button>
    </div>
  );
}

export default SideMenu;
