import { useEffect, useState } from "react";
import Body from "../../componets/Body";

function Carts() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleCancelOrder = (itemId) => {
    // Filter out the canceled item from the purchased items
    const updatedPurchasedItems = cartItems.filter(
      (item) => item.id !== itemId
    );

    // Update the purchased items in local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedPurchasedItems));

    // Update the state with the updated purchased items
    setCartItems(updatedPurchasedItems);
  };

  const handlePurchase = (itemId) => {
    // Find the purchased item
    const purchasedItem = cartItems.find((item) => item.id === itemId);

    // Perform purchase logic for the individual item here
    // You can remove the item from the cart, update the database, or perform any other required actions

    // For example, removing the item from the cart after purchase
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);

    // Add the purchased item to the purchased items list in local storage
    const storedPurchasedItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    const updatedPurchasedItems = [...storedPurchasedItems, purchasedItem];
    localStorage.setItem(
      "purchaseItems",
      JSON.stringify(updatedPurchasedItems)
    );
  };

  return (
    <main className="flex">
      <Body>
        <section className="bg-zinc-900 bg-opacity-50 h-auto flex flex-col items-center gap-2 p-2 justify-center">
          <div className="font-bold bg-zinc-900 w-full h-auto p-1 flex justify-center text-xs md:text-sm lg:text-base">
            <h1>Cart Items</h1>
          </div>
          <div className="bg-zinc-900 p-2 w-full min-h-[26rem]">
            {cartItems.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p>Your cart is empty.</p>
              </div>
            ) : (
              <div>
                <ul className="flex flex-col items-center gap-2">
                  {Array.from(new Set(cartItems.map((item) => item.id))).map(
                    (itemId) => {
                      const item = cartItems.find((item) => item.id === itemId);
                      const count = cartItems.filter(
                        (item) => item.id === itemId
                      ).length;

                      return (
                        <li
                          key={item.id}
                          className="flex items-center justify-between bg-zinc-600 bg-opacity-30 p-1 w-[95%] md:w-[90%] lg:w-[75%]"
                        >
                          <div className="flex items-center">
                            <div className="h-10 w-10 mr-3">
                              <img
                                src={item.img}
                                alt=""
                                className="object-cover h-full w-full"
                              />
                            </div>
                            <p className="text-xs md:text-sm lg:text-base">
                              {item.name} -{" "}
                            </p>
                            <span className="text-amber-700 font-bold text-xs md:text-sm lg:text-base">
                              ${item.price}
                            </span>
                          </div>
                          <div className="flex items-center justify-center gap-1 md:gap-2 text-xs md:text-sm lg:text-base">
                            <span className="text-neutral-400">
                              {count > 1 ? `x${count}` : "x1"}{" "}
                            </span>
                            <button
                              className="ml-5 md:ml-8 lg:ml-10 "
                              onClick={() => handleCancelOrder(item.id)}
                            >
                              Remove
                            </button>
                            <button onClick={() => handlePurchase(item.id)}>
                              Purchase
                            </button>
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            )}
          </div>
        </section>
      </Body>
    </main>
  );
}

export default Carts;
