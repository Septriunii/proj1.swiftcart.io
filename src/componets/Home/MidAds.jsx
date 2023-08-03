import React from "react";
import Swipe from "../Swipe";
import Show from "../Slidehow2";
import products from "../../data/MAIN/products";
import { useState, useCallback, useMemo } from "react";

function MidAds() {
  const [addToCartLoadingStates, setAddToCartLoadingStates] = useState({});
  const [purchaseLoadingStates, setPurchaseLoadingStates] = useState({});
  const [addedProductIds, setAddedProductIds] = useState([]);
  const [purchasedProductIds, setPurchasedProductIds] = useState([]);

  const addToCart = useCallback((product) => {
    setAddToCartLoadingStates((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    // Simulate a loading time of 2 seconds
    setTimeout(() => {
      // Get the existing cart items from local storage or initialize an empty array
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      // Add the selected product to the cart
      cartItems.push(product);
      // Update the cart items in local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      setAddToCartLoadingStates((prevState) => ({
        ...prevState,
        [product.id]: false,
      }));

      setAddedProductIds((prevIds) => [...prevIds, product.id]);

      // Reset the added product ids after 2 seconds
      setTimeout(() => {
        setAddedProductIds((prevIds) =>
          prevIds.filter((id) => id !== product.id)
        );
      }, 2000);
    }, 2000);
  }, []);

  const purchase = useCallback((product) => {
    setPurchaseLoadingStates((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    // Simulate a loading time of 2 seconds
    setTimeout(() => {
      // Get the existing purchase items from local storage or initialize an empty array
      const purchaseItems =
        JSON.parse(localStorage.getItem("purchaseItems")) || [];
      // Add the selected product to the purchase
      purchaseItems.push(product);
      // Update the purchase items in local storage
      localStorage.setItem("purchaseItems", JSON.stringify(purchaseItems));

      setPurchaseLoadingStates((prevState) => ({
        ...prevState,
        [product.id]: false,
      }));

      setPurchasedProductIds((prevIds) => [...prevIds, product.id]);

      // Reset the purchased product ids after 2 seconds
      setTimeout(() => {
        setPurchasedProductIds((prevIds) =>
          prevIds.filter((id) => id !== product.id)
        );
      }, 2000);
    }, 2000);
  }, []);

  const shuffledProducts = useMemo(
    () => products.sort(() => 0.2 - Math.random()),
    []
  );
  const productsToShow = useMemo(
    () => shuffledProducts.slice(0, 8),
    [shuffledProducts]
  );
  return (
    <div className="bg-zinc-900 h-auto flex p-1 w-full">
      <div className="bg-zinc-900  w-full overflow-hidden h-full flex flex-col ">
        <div className="bg-zinc-800 h-auto">
          <Swipe />
        </div>
        <div className="bg-blue-800 h-auto">
          <Show />
        </div>
      </div>

      <div className=" h-auto w-full flex flex-col justify-center items-center p-1">
        <p className="my-2 font-bold">New Arrival</p>
        <div className="h-auto grid grid-cols-4  gap-1 place-items-center p-2 w-full relative">
          {productsToShow.map((p) => (
            <div
              key={p.id}
              className=" flex mb-2 flex-col rounded h-52 w-full relative bg-slate-900 gap-3"
            >
              <img src={p.img} alt="" className="bg-cover h-full" />

              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm">
                  <p className="font-bold text-xs">{p.name}</p>
                  <p className="text-xs">$ {p.price}</p>
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() => addToCart(p)}
                    className={`w-full h-5 flex items-center justify-center rounded-sm ${
                      addToCartLoadingStates[p.id] ? "loading" : ""
                    } ${addedProductIds.includes(p.id) ? "added" : ""}`}
                    disabled={addToCartLoadingStates[p.id]}
                  >
                    {addToCartLoadingStates[p.id] && (
                      <div className="loader"></div>
                    )}
                    {!addToCartLoadingStates[p.id] &&
                      !addedProductIds.includes(p.id) && (
                        <span className="text-xs">Cart</span>
                      )}
                    {!addToCartLoadingStates[p.id] &&
                      addedProductIds.includes(p.id) && (
                        <span className="text-xs">Carted</span>
                      )}
                  </button>
                  <button
                    onClick={() => purchase(p)}
                    className={`w-full h-5 flex justify-center items-center rounded-sm  ${
                      purchaseLoadingStates[p.id] ? "loading" : ""
                    } ${purchasedProductIds.includes(p.id) ? "purchased" : ""}`}
                    disabled={purchaseLoadingStates[p.id]}
                  >
                    {purchaseLoadingStates[p.id] && (
                      <div className="loader"></div>
                    )}
                    {!purchaseLoadingStates[p.id] &&
                      !purchasedProductIds.includes(p.id) && (
                        <span className="text-xs">Purchase</span>
                      )}
                    {!purchaseLoadingStates[p.id] &&
                      purchasedProductIds.includes(p.id) && (
                        <span className="text-xs">Purchased</span>
                      )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MidAds;
