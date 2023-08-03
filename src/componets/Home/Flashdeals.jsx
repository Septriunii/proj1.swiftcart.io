import products from "../../data/MAIN/products";
import CountdownApp from "../Countdown";
import { useState, useCallback, useMemo } from "react";

function Flashdeals() {
  const [purchaseLoadingStates, setPurchaseLoadingStates] = useState({});
  const [purchasedProductIds, setPurchasedProductIds] = useState([]);

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
    () => shuffledProducts.slice(0, 5),
    [shuffledProducts]
  );

  return (
    <div>
      <div className="bg-zinc-900 w-full h-auto p-3 flex flex-col border-[1px] border-neutral-700">
        <div className="flex gap-2  h-auto items-center p-3 mb-3">
          <div className="font-bold h-full p-2">Flashdeal</div>
          <div className="p-2 h-full text-orange-600 bg-black bg-opacity-40 text-sm font-semibold">
            <CountdownApp />
          </div>
        </div>
        <div className="grid grid-cols-5 grid-rows-1 place-items-center">
          {productsToShow.map((p) => (
            <div
              key={p.id}
              className=" flex gap-2 mb-2 flex-col rounded h-80 w-52 relative bg-slate-900 gap-3"
            >
              <img src={p.img} alt="" className="bg-cover h-full" />
              <div className="absolute top-3 left-3 text-sm">
                <p className="bg-blue-950 font-medium p-2 text-xs rounded-sm">
                  {p.off}% off
                </p>
              </div>
              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm">
                  <p className="font-bold">{p.name}</p>
                  <div className="flex gap-2">
                    <p className="line-through text-gray-300">$ {p.price}</p>
                    <p className="">
                      $ {(p.price - (p.price * p.off) / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1 h-full text-sm">
                  <button
                    onClick={() => purchase(p)}
                    className={`w-full ${
                      purchaseLoadingStates[p.id] ? "loading" : ""
                    } ${purchasedProductIds.includes(p.id) ? "purchased" : ""}`}
                    disabled={purchaseLoadingStates[p.id]}
                  >
                    {purchaseLoadingStates[p.id] && (
                      <div className="loader"></div>
                    )}
                    {!purchaseLoadingStates[p.id] &&
                      !purchasedProductIds.includes(p.id) && (
                        <span className="button-text">Purchase</span>
                      )}
                    {!purchaseLoadingStates[p.id] &&
                      purchasedProductIds.includes(p.id) && (
                        <span className="button-text">Purchased</span>
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

export default Flashdeals;
