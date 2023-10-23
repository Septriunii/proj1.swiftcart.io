import products from "../../data/MAIN/products";
import { useState, useCallback, useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Discover() {
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
    () => shuffledProducts.slice(0, 20),
    [shuffledProducts]
  );

  return (
    <main className="mt-5 flex flex-col items-center border-t-[1px] border-neutral-700">
      <section className="p-5 font-bold">Discover Products</section>
      <section className="h-auto grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-3 place-items-center p-2 w-full relative bg-zinc-900">
        {productsToShow.map((p) => (
          <div
            key={p.id}
            className="flex mb-2 flex-col rounded lg:h-80 md:h-72 h-64 w-full relative bg-slate-900 gap-3 items-center overflow-hidden"
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
              <div className="w-full flex flex-col text-sm">
                <p className="font-bold lg:text-base md:text-sm text-xs">
                  {p.name}
                </p>
                <p className="lg:text-base md:text-sm text-xs">$ {p.price}</p>
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
      </section>
    </main>
  );
}

export default Discover;
