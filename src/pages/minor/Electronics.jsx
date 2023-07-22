import electronics from "../../data/products/electronics";

import Body from "../../componets/Body";

function Electronics() {
  return (
    <div className="flex">
      <Body>
        <div className="h-auto grid grid-cols-5 grid-rows-2 gap-3 place-items-center p-2 w-full relative">
          {electronics.map((p) => (
            <div
              key={p.id}
              className=" flex gap-2 mb-2 flex-col rounded h-80 w-52 relative bg-slate-900 gap-3"
            >
              <img src={p.img} alt="" className="bg-cover h-full " />

              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm">
                  <p className="font-bold">{p.name}</p>
                  <p>$ {p.price}</p>
                </div>
                <div className="flex flex-col gap-1 h-full text-sm">
                  <button onClick={() => addToCart(p)} className="w-full">
                    Add to cart
                  </button>
                  <button onClick={() => purchase(p)} className="w-full">
                    Purchase
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Body>
    </div>
  );
}
export default Electronics;
