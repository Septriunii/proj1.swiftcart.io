import { useState } from "react";
import right from "../assets/right-arrow.svg";
import left from "../assets/left-arrow.svg";
import img1 from "../assets/prom/prom-5.png";
import img2 from "../assets/prom/prom-6.png";
import img3 from "../assets/prom/prom-7.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FirstSlide = () => (
  <figure className="h-52 component">
    <div className="h-full ">
      <LazyLoadImage loading="eager" src={img1} alt="" className="h-full" />
    </div>
  </figure>
);

const SecondSlide = () => (
  <figure className="h-52 component">
    <div className="h-full w-full">
      <LazyLoadImage loading="eager" src={img2} alt="" className="h-full" />
    </div>
  </figure>
);

const ThirdSlide = () => (
  <figure className="h-52 component">
    <div className="h-full w-full">
      <LazyLoadImage loading="eager" src={img3} alt="" className="h-full" />
    </div>
  </figure>
);

const Swipe = () => {
  const [componentIndex, setComponentIndex] = useState(0);
  const [direction, setDirection] = useState(""); // Track animation direction
  const components = [FirstSlide, SecondSlide, ThirdSlide, ThirdSlide];

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
      <figure className={`carousel ${direction} `}>
        <CurrentComponent />
      </figure>

      <section className="absolute top-12 md:top-14 lg:top-20 left-2 h-8 w-6 md:h-12 md:w-8 lg:h-16 lg:w-10 bg-contain">
        <div className="w-full h-full relative flex items-center">
          <div
            onClick={handlePrev}
            className="swipe w-full h-12 z-40 bg-transparent "
          ></div>
          <img src={left} alt="" className="h-full absolute opacity-80" />
        </div>
      </section>

      <section className=" absolute top-12 md:top-14 lg:top-20 right-2 h-8 w-6 md:h-12 md:w-8 lg:h-16 lg:w-10">
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

export default Swipe;
