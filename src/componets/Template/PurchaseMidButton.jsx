import { useState, useCallback } from "react";

const LOCAL_STORAGE_KEY_PURCHASE = "purchaseItems";

const PurchaseMidButton = (props) => {
  const [purchaseLoadingStates, setPurchaseLoadingStates] = useState({});
  const [purchasedProductIds, setPurchasedProductIds] = useState([]);

  const purchase = useCallback((product) => {
    setPurchaseLoadingStates((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    setTimeout(() => {
      const purchaseItems =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_PURCHASE)) || [];
      purchaseItems.push(product);
      localStorage.setItem(
        LOCAL_STORAGE_KEY_PURCHASE,
        JSON.stringify(purchaseItems)
      );

      setPurchaseLoadingStates((prevState) => ({
        ...prevState,
        [product.id]: false,
      }));

      setPurchasedProductIds((prevIds) => [...prevIds, product.id]);

      setTimeout(() => {
        setPurchasedProductIds((prevIds) =>
          prevIds.filter((id) => id !== product.id)
        );
      }, 2000);
    }, 2000);
  }, []);
  return (
    <>
      <button
        onClick={() => purchase(props.product)}
        className={`w-full h-5 flex justify-center items-center rounded-sm  ${
          purchaseLoadingStates[props.product.id] ? "loading" : ""
        } ${purchasedProductIds.includes(props.product.id) ? "purchased" : ""}`}
        disabled={purchaseLoadingStates[props.product.id]}
      >
        {purchaseLoadingStates[props.product.id] && (
          <div className="loader"></div>
        )}
        {!purchaseLoadingStates[props.product.id] &&
          !purchasedProductIds.includes(props.product.id) && (
            <span className="text-xs">Purchase</span>
          )}
        {!purchaseLoadingStates[props.product.id] &&
          purchasedProductIds.includes(props.product.id) && (
            <span className="text-xs">Purchased</span>
          )}
      </button>
    </>
  );
};

export default PurchaseMidButton;
