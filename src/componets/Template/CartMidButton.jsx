import { useCallback, useState } from "react";

const LOCAL_STORAGE_KEY_CART = "cartItems";

const CartMidButton = (props) => {
  const [addToCartLoadingStates, setAddToCartLoadingStates] = useState({});
  const [addedProductIds, setAddedProductIds] = useState([]);

  const addToCart = useCallback((product) => {
    setAddToCartLoadingStates((prevState) => ({
      ...prevState,
      [product.id]: true,
    }));

    setTimeout(() => {
      const cartItems =
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_CART)) || [];
      cartItems.push(product);
      localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(cartItems));

      setAddToCartLoadingStates((prevState) => ({
        ...prevState,
        [product.id]: false,
      }));

      setAddedProductIds((prevIds) => [...prevIds, product.id]);

      setTimeout(() => {
        setAddedProductIds((prevIds) =>
          prevIds.filter((id) => id !== product.id)
        );
      }, 2000);
    }, 2000);
  }, []);
  return (
    <>
      <button
        onClick={() => addToCart(props.product)}
        className={`w-full h-5 flex items-center justify-center rounded-sm ${
          addToCartLoadingStates[props.product.id] ? "loading" : ""
        } ${addedProductIds.includes(props.product.id) ? "added" : ""}`}
        disabled={addToCartLoadingStates[props.product.id]}
      >
        {addToCartLoadingStates[props.product.id] && (
          <div className="loader"></div>
        )}
        {!addToCartLoadingStates[props.product.id] &&
          !addedProductIds.includes(props.product.id) && (
            <span className="text-xs">Cart</span>
          )}
        {!addToCartLoadingStates[props.product.id] &&
          addedProductIds.includes(props.product.id) && (
            <span className="text-xs">Carted</span>
          )}
      </button>
    </>
  );
};

export default CartMidButton;
