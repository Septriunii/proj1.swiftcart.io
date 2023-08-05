import { useState } from "react";
import right from "../assets/right-arrow.svg";
import left from "../assets/left-arrow.svg";
import ad from "../assets/ad.png";

// Red component
const RedComponent = () => (
  <div className="h-52 component" style={{ backgroundColor: "red" }}>
    <div className="h-full w-full">
      <img src={ad} alt="" className="h-full" />
    </div>
  </div>
);

// Green component
const GreenComponent = () => (
  <div className="h-52 component" style={{ backgroundColor: "green" }}>
    Green Component
  </div>
);

// Blue component
const BlueComponent = () => (
  <div className="h-52 component" style={{ backgroundColor: "blue" }}>
    Blue Component
  </div>
);

const Swipe = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Track animation direction
  const components = [RedComponent, GreenComponent, BlueComponent];

  const handlePrev = () => {
    setDirection("right-to-left"); // Set animation direction to right-to-left
    setComponentIndex((prevIndex) =>
      prevIndex === 0 ? components.length - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setDirection(""); // Reset animation direction after the animation is complete
    }, 500);
  };

  const handleNext = () => {
    setDirection("left-to-right"); // Set animation direction to left-to-right
    setComponentIndex((prevIndex) =>
      prevIndex === components.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => {
      setDirection(""); // Reset animation direction after the animation is complete
    }, 500);
  };

  const CurrentComponent = components[componentIndex];

  return (
    <div className="relative h-full">
      <div className={`carousel ${direction} `}>
        <CurrentComponent />
      </div>

      <div className="absolute top-12 md:top-14 lg:top-20 left-2 h-8 w-6 md:h-12 md:w-8 lg:h-16 lg:w-10 bg-contain">
        <div className="w-full h-full relative flex items-center">
          <div
            onClick={handlePrev}
            className="swipe w-full h-12 z-40 bg-transparent "
          ></div>
          <img src={left} alt="" className="h-full absolute opacity-80" />
        </div>
      </div>

      <div className=" absolute top-12 md:top-14 lg:top-20 right-2 h-8 w-6 md:h-12 md:w-8 lg:h-16 lg:w-10">
        <div className="w-full h-full relative flex items-center">
          <div
            onClick={handleNext}
            className="swipe w-full h-12 z-40 bg-transparent focus:outline-none hover:outline-none"
          ></div>
          <img src={right} alt="" className="h-full absolute opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default Swipe;
