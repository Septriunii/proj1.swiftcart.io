import Swipe from "../Swipe";
import Show from "../Slidehow2";
import products from "../../data/MAIN/products";
import { useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import CartMidButton from "../Template/CartMidButton";
import PurchaseMidButton from "../Template/PurchaseMidButton";

function MidAds() {
  const shuffledProducts = useMemo(
    () => products.sort(() => 0.2 - Math.random()),
    []
  );
  const productsToShow = useMemo(
    () => shuffledProducts.slice(0, 8),
    [shuffledProducts]
  );
  return (
    <main className="bg-zinc-900 h-auto flex p-1 w-full items-center flex-col md:flex-row">
      <section className="bg-zinc-900  w-full overflow-hidden h-full flex flex-col ">
        <div className=" lg:h-52 h-32 md:h-48">
          <Swipe />
        </div>
        <div className="lg:h-52 h-32 md:h-48">
          <Show />
        </div>
      </section>

      <section className=" h-auto w-full flex flex-col justify-center items-center p-1">
        <p className="my-2 font-bold">New Arrival</p>
        <main className="h-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  gap-1 place-items-center p-2 w-full relative">
          {productsToShow.map((p) => (
            <div
              key={p.id}
              className=" flex mb-2 flex-col rounded h-52 w-full relative bg-slate-900 gap-3 overflow-hidden"
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
                  <p className="font-bold text-xs">{p.name}</p>
                  <p className="text-xs">$ {p.price}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <CartMidButton product={p} />
                  <PurchaseMidButton product={p} />
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
    </main>
  );
}

export default MidAds;
