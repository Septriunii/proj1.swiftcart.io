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
      className={`w-80 h-[30rem] bg-zinc-800 fixed top-20 right-0 z-40 transition-transform duration-300 ease-in-out transform ${
        isShowing ? "translate-x-0" : "translate-x-full"
      }`}
      onAnimationEnd={handleAnimationEnd}
    >
      {/* Content of the rectangle */}
      <button
        onClick={handleClick}
        className="right-0 h-10 rounded-full bg-transparent hover:border-transparent absolute -top-14"
      ></button>
    </div>
  );
}

export default Rectangle;
