import productsLists from "../../data/MAIN/Lists";
import Body from "../../componets/Body";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Products() {
  return (
    <main className="flex">
      <Body>
        <section className="w-full h-auto bg-zinc-900 bg-opacity-50 p-2 overflow-hidden flex flex-col gap-5">
          <div className="h-auto grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-3 place-items-center p-2 w-full relative ">
            {productsLists.map((p) => (
              <div
                key={p.id}
                className=" flex mb-2 flex-col rounded h-60 w-full md:h-80 relative bg-slate-900 m-2 overflow-hidden"
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
                  <div className="w-full flex flex-col text-xs md:text-sm items-center">
                    <p className="font-bold">{p.name}</p>
                  </div>
                  <div className="flex flex-col gap-1 h-full text-xs md:text-sm">
                    <Link to={p.link}>
                      <button className="w-full text-white">See More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Body>
    </main>
  );
}

export default Products;
