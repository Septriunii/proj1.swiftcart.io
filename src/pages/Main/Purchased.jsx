import { useEffect, useState } from "react";
import Body from "../../componets/Body";

function Purchased() {
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    // Retrieve purchased items from local storage
    const storedPurchasedItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    setPurchasedItems(storedPurchasedItems);
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

    // Update the state with the updated purchased items
    setPurchasedItems(updatedPurchasedItems);
  };

  return (
    <main className="flex">
      <Body>
        <section className="bg-zinc-900 bg-opacity-50 h-auto flex flex-col items-center gap-2 p-2 justify-center">
          <div className="font-bold bg-zinc-900 w-full h-auto p-1 flex justify-center text-xs md:text-sm lg:text-base">
            <h1>Purchased Items</h1>
          </div>
          <section className="bg-zinc-900 p-2 w-full min-h-[26rem]">
            {purchasedItems.length === 0 ? (
              <div className="h-full flex items-center justify-center">
                <p>No purchases</p>
              </div>
            ) : (
              <div>
                <ul className="flex flex-col items-center gap-2">
                  {Array.from(
                    new Set(purchasedItems.map((item) => item.id))
                  ).map((itemId) => {
                    const item = purchasedItems.find(
                      (item) => item.id === itemId
                    );
                    const count = purchasedItems.filter(
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
                            Cancel
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </section>
        </section>
      </Body>
    </main>
  );
}

export default Purchased;
