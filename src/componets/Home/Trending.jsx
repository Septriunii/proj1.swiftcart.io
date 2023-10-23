import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import products from "../../data/MAIN/products";
import { useMemo } from "react";
import CartButton from "../Template/CartButton";
import PurchasedButton from "../Template/PurchasedButton";

function Trending() {
  const productsToShow = useMemo(() => {
    const shuffledProducts = products.sort(() => 0.2 - Math.random());
    return shuffledProducts.slice(0, 10);
  }, []);

  return (
    <main className="flex">
      <section className="h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center p-2 w-full relative">
        {productsToShow.map((p) => (
          <main
            key={p.id}
            className="flex mb-2 flex-col rounded h-60 w-full md:h-72 md:w-full lg:h-80 lg:w-full relative gap-3 items-center object-cover overflow-hidden"
          >
            <figure className="object-cover h-full w-full hover:scale-105 duration-300 ease-in-out">
              <LazyLoadImage
                src={p.img}
                className="object-cover h-full w-full"
                height="100%"
                width="100%"
                effect="blur"
                placeholderSrc={p.img}
              />
            </figure>

            <section className="absolute top-3 left-3 text-sm">
              <p className="bg-orange-700 font-medium p-2 text-xs rounded-sm">
                Trending
              </p>
            </section>
            <section className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
              <div className="w-full flex flex-col">
                <p className="font-bold lg:text-base md:text-sm text-xs">
                  {p.name}
                </p>
                <p className="md:text-sm text-xs">$ {p.price}</p>
              </div>
              <section className="flex flex-col gap-1 h-full text-xs md:text-sm ">
                <CartButton product={p} />
                <PurchasedButton product={p} />
              </section>
            </section>
          </main>
        ))}
      </section>
    </main>
  );
}

export default Trending;
