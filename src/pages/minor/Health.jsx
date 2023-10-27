import Body from "../../componets/Body";
import health from "../../data/products/healthAndFitness";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CartButton from "../../componets/Template/CartButton";
import PurchasedButton from "../../componets/Template/PurchasedButton";

function Health() {
  return (
    <div className="flex">
      <Body>
        <div className="h-auto grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 place-items-center p-2 w-full relative">
          {health.map((p) => (
            <div
              key={p.id}
              className="flex mb-2 flex-col rounded h-64 md:h-72 lg:h-80 w-full relative bg-slate-900 gap-3 items-center overflow-hidden"
            >
              <div className="object-cover h-full w-full hover:scale-105 duration-300 ease-in-out">
                <LazyLoadImage
                  src={p.img}
                  className="object-cover h-full w-full"
                  height="100%"
                  width="100%"
                  effect="blur"
                  placeholderSrc={p.img}
                />
              </div>

              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm">
                  <p className="font-bold lg:text-base md:text-sm text-xs">
                    {p.name}
                  </p>
                  <p className="lg:text-base md:text-sm text-xs">$ {p.price}</p>
                </div>

                <div className="flex flex-col gap-1 h-full text-sm">
                  <CartButton product={p} />
                  <PurchasedButton product={p} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </div>
  );
}

export default Health;
