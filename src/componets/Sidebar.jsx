import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import purchase from "../assets/purchase.svg";
import cart from "../assets/shopping-cart.svg";
import products from "../assets/sell.svg";
import CartNumbers from "./CartNumbers";
import PurchasedNumbers from "../componets/PurchaseNumber";
import { useState, useEffect } from "react";

function Sidebar() {
  const [cartItems, setCartItems] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    // Retrieve purchased items from local storage
    const storedPurchasedItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setPurchasedItems(storedPurchasedItems);
  }, []);

  return (
    <div>
      <div className="bg-black bg-opacity-50  w-auto h-96 p-2 flex flex-col gap-7 justify-center items-center fixed top-28">
        <Link to="/">
          <div className="cursor-pointer text-white h-11 w-11 p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center">
            <img src={home} alt="" className="hover:bg-zinc-800 rounded" />
            <p className="text-xs opacity-70">Home</p>
          </div>
        </Link>
        <Link to="/products">
          <div className="cursor-pointer text-white h-10 w-10  p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center">
            <img src={products} alt="" className="hover:bg-zinc-800 rounded" />
            <p className="text-xs opacity-70">Products</p>
          </div>
        </Link>
        <Link to="/carts">
          <div className="cursor-pointer text-white h-10 w-10  p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center relative">
            <img src={cart} alt="" className="hover:bg-zinc-800 rounded" />
            <p className="text-xs opacity-70">Cart</p>
            <div className="h-auto w-auto text-red-600 absolute top-0 right-0 text-xs opacity-70 ">
              <CartNumbers cartItems={cartItems} />
            </div>
          </div>
        </Link>
        <Link to="/purchase">
          <div className="cursor-pointer text-white h-10 w-10  p-1 rounded-sm focus:border-b-2 border-blue-950 flex justify-center flex-col items-center relative">
            <img src={purchase} alt="" className="hover:bg-zinc-800 rounded" />
            <p className="text-xs opacity-70">Purchase</p>
            <div className="h-auto w-auto text-red-600 absolute top-0 right-0 text-xs ">
              <PurchasedNumbers purchasedItems={purchasedItems} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
