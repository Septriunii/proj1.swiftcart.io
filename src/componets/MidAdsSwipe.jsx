import { useState } from "react";
import right from "../assets/right-arrow.svg";
import left from "../assets/left-arrow.svg";
import ad from "../assets/ad.png";

// Red component
const FirstSlide = () => (
  <section className="h-96 component" style={{ backgroundColor: "red" }}>
    <div className="h-full w-full">
      <img src={ad} alt="" className="h-full" />
    </div>
  </section>
);

// Green component
const SecondSlide = () => (
  <div className="h-96 component" style={{ backgroundColor: "green" }}>
    Green Component
  </div>
);

// Blue component
const ThirdSlide = () => (
  <div className="h-96 component" style={{ backgroundColor: "blue" }}>
    Blue Component
  </div>
);

const Swipe2 = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Track animation direction
  const components = [FirstSlide, SecondSlide, ThirdSlide];

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
    <main className="relative h-full">
      <section className={`carousel ${direction} `}>
        <CurrentComponent />
      </section>

      <section className=" absolute top-1 left-2 h-full w-10 bg-contain">
        <div className="w-full h-full relative flex items-center">
          <div
            onClick={handlePrev}
            className="swipe w-full h-12 z-40 bg-transparent "
          ></div>
          <img src={left} alt="" className="h-full absolute opacity-80" />
        </div>
      </section>

      <section className=" absolute top-40 right-2 h-auto w-10 bg-contain">
        <div className="w-full h-full relative flex items-center">
          <div
            onClick={handleNext}
            className="swipe w-full h-12 z-40 bg-transparent focus:outline-none hover:outline-none"
          ></div>
          <img src={right} alt="" className="h-full absolute opacity-80" />
        </div>
      </section>
    </main>
  );
};

export default Swipe2;
