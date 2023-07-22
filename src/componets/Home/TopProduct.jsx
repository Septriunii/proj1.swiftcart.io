import products from "../../data/MAIN/products";
import Lists from "../../data/MAIN/Lists";
import { Link } from "react-router-dom";

function TopProduct() {
  const addToCart = (product) => {
    // Get the existing cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Add the selected product to the cart
    cartItems.push(product);
    // Update the cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const purchase = (product) => {
    // Get the existing cart items from local storage or initialize an empty array
    const purchaseItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    // Add the selected product to the purchase
    purchaseItems.push(product);
    // Update the purchase items in local storage
    localStorage.setItem("purchaseItems", JSON.stringify(purchaseItems));
  };

  return (
    <div>
      <div className="w-full h-auto p-3 flex flex-col bg-zinc-900">
        <div className="bg-green-950 w-28 ml-3 p-2 mb-5">Top Products</div>
        <div className="grid grid-cols-6 grid-rows-1 place-items-center overflow-auto">
          {Lists.slice(0, 6).map((p) => (
            <div
              key={p.id}
              className=" flex gap-2 mb-2 flex-col rounded h-72 w-44 relative bg-slate-900"
            >
              <img src={p.img} alt="" className="bg-cover h-full " />
              <div className=" absolute top-3 left-3 text-sm">
                <p className="bg-green-800 p-2 rounded-sm">Top Product</p>
              </div>
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
      </div>
    </div>
  );
}

export default TopProduct;
