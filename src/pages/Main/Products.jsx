import productsLists from "../../data/MAIN/Lists";
import Body from "../../componets/Body";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="flex">
      <Body>
        <div className="h-auto grid grid-cols-5 grid-rows-2 gap-3 place-items-center p-2 w-full relative">
          {productsLists.map((p) => (
            <div
              key={p.id}
              className=" flex gap-2 mb-2 flex-col rounded h-80 w-52 relative bg-slate-900 gap-3"
            >
              <img src={p.img} alt="" className="bg-cover h-full " />

              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm">
                  <p className="font-bold">{p.name}</p>
                </div>
                <div className="flex flex-col gap-1 h-full text-sm">
                  <Link to={p.link}>
                    <button className="w-full">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </div>
  );
}

export default Products;
