import { useEffect, useState } from "react";
import Navbar from "../Navbar";

function Purchased() {
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    // Retrieve purchased items from local storage
    const storedpurchasedItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setPurchasedItems(storedpurchasedItems);
  }, []);

  const handleCancelOrder = (itemId) => {
    // Filter out the canceled item from the purchased items
    const updatedPurchasedItems = purchasedItems.filter(
      (item) => item.id !== itemId
    );
    // Update the purchased items in local storage
    localStorage.setItem(
      "purchaseItems",
      JSON.stringify(updatedPurchasedItems)
    );
    setPurchasedItems(updatedPurchasedItems);
  };

  return (
    <div>
      <Navbar />
      <h1>Purchased</h1>
      {purchasedItems.length === 0 ? (
        <p>Your purchase is empty.</p>
      ) : (
        <div>
          <ul>
            {purchasedItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => handleCancelOrder(item.id)}>
                  Cancel Order
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Purchased;
