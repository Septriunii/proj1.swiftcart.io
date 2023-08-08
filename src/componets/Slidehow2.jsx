import img1 from "../assets/prom/prom-1.jpg";
import img2 from "../assets/prom/prom-2.jpg";
import img3 from "../assets/prom/prom-3.jpg";
import img4 from "../assets/prom/prom-4.jpg";

import Slideshow from "./Slideshow";

const Show = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="">
      <Slideshow images={images} interval={3000} className="" />
    </div>
  );
};

export default Show;
