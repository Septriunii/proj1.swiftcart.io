import { useState, useCallback } from "react";
import food from "../../data/products/foodAndBeverages";
import Body from "../../componets/Body";

function Food() {
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

  return (
    <div className="flex">
      <Body>
        <div className="h-auto grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 place-items-center p-2 w-full relative">
          {food.map((p) => (
            <div
              key={p.id}
              className="flex mb-2 flex-col rounded h-64 md:h-72 lg:h-80 w-full relative bg-slate-900 gap-3 items-center"
            >
              <img src={p.img} alt="" className="object-cover h-full w-full" />

              <div className="bg-black bg-opacity-50 w-full  p-2 flex flex-col gap-3 absolute bottom-0">
                <div className="w-full flex flex-col text-sm">
                  <p className="font-bold">{p.name}</p>
                  <p>$ {p.price}</p>
                </div>
                <div className="flex flex-col gap-1 h-full text-sm">
                  <button
                    onClick={() => addToCart(p)}
                    className={`w-full ${
                      addToCartLoadingStates[p.id] ? "loading" : ""
                    } ${addedProductIds.includes(p.id) ? "added" : ""}`}
                    disabled={addToCartLoadingStates[p.id]}
                  >
                    {addToCartLoadingStates[p.id] && (
                      <div className="loader"></div>
                    )}
                    {!addToCartLoadingStates[p.id] &&
                      !addedProductIds.includes(p.id) && (
                        <span className="button-text">Add to Cart</span>
                      )}
                    {!addToCartLoadingStates[p.id] &&
                      addedProductIds.includes(p.id) && (
                        <span className="button-text">Added to Cart</span>
                      )}
                  </button>
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
      </Body>
    </div>
  );
}

export default Food;
