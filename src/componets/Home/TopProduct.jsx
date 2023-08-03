import Lists from "../../data/MAIN/Lists";
import { Link } from "react-router-dom";

function TopProduct() {
  return (
    <div>
      <div className="w-full h-auto p-3 flex flex-col bg-zinc-900 border-[1px] border-neutral-700">
        <div className="font-bold ml-3 p-2 mb-5">Top Products</div>
        <div className="grid grid-cols-4 grid-rows-1 place-items-center overflow-auto ">
          {Lists.map((p) => (
            <div
              key={p.id}
              className=" flex gap-2 mb-2 flex-col rounded h-72 w-60 relative bg-slate-900"
            >
              <img src={p.img} alt="" className="object-cover h-full " />
              <div className=" absolute top-3 left-3 text-sm">
                <p className="bg-green-900 font-medium p-2 text-xs rounded-sm">
                  Top Product
                </p>
              </div>
              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm items-center">
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
      </div>
    </div>
  );
}

export default TopProduct;
