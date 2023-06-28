import { useEffect, useState } from "react";
import Navbar from "../Navbar";

function Carts() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handlePurchase = (itemId) => {
    // Find the purchased item
    const purchasedItem = cartItems.find((item) => item.id === itemId);

    // Perform purchase logic for the individual item here
    // You can remove the item from the cart, update the database, or perform any other required actions

    // For example, removing the item from the cart after purchase
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);

    // Add the purchased item to the purchased items list in the local storage
    const storedPurchasedItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    const updatedPurchasedItems = [...storedPurchasedItems, purchasedItem];
    localStorage.setItem(
      "purchaseItems",
      JSON.stringify(updatedPurchasedItems)
    );
  };

  return (
    <div>
      <Navbar />
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => handlePurchase(item.id)}>
                  Purchase
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Carts;
