import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Slideshow = ({ images, interval = 4000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const timer = setInterval(nextImage, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  return (
    <div className="slideshow">
      <div className="slideshow-image">
        <LazyLoadImage
          effect="blur"
          src={images[currentImageIndex]}
          alt={`Slideshow Image ${currentImageIndex + 1}`}
        />
      </div>
    </div>
  );
};

export default Slideshow;
