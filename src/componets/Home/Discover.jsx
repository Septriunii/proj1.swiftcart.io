import products from "../../data/MAIN/products";
import { useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PurchasedButton from "../Template/PurchasedButton";
import CartButton from "../Template/CartButton";

function Discover() {
  const shuffledProducts = useMemo(
    () => products.sort(() => 0.2 - Math.random()),
    []
  );
  const productsToShow = useMemo(
    () => shuffledProducts.slice(0, 20),
    [shuffledProducts]
  );

  return (
    <main className="mt-5 flex flex-col items-center border-t-[1px] border-neutral-700">
      <section className="p-5 font-bold">Discover Products</section>
      <section className="h-auto grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-3 place-items-center p-2 w-full relative bg-zinc-900">
        {productsToShow.map((p) => (
          <div
            key={p.id}
            className="flex mb-2 flex-col rounded lg:h-80 md:h-72 h-64 w-full relative bg-slate-900 gap-3 items-center overflow-hidden"
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
      </section>
    </main>
  );
}

export default Discover;
