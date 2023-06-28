import Navbar from "../componets/Navbar";
import products from "../data/products";

function Products() {
  const addToCart = (product) => {
    // Get the existing cart items from local storage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Add the selected product to the cart
    cartItems.push(product);
    // Update the cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  const purchase = (product) => {
    // Get the existing cart items from local storage or initialize an empty array
    const purchaseItems =
      JSON.parse(localStorage.getItem("purchaseItems")) || [];
    // Add the selected product to the purchase
    purchaseItems.push(product);
    // Update the purchase items in local storage
    localStorage.setItem("purchaseItems", JSON.stringify(purchaseItems));
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 gap-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-slate-800 flex gap-2 mb-2 flex-col p-2 rounded items-center h-auto"
          >
            <p>{p.name}</p>
            <p>$ {p.price}</p>
            <button onClick={() => addToCart(p)} className="w-full">
              Add to cart
            </button>
            <button onClick={() => purchase(p)} className="w-full">
              Purchase
            </button>
          </div>
        ))}
      </div>

      {/* Choose specific products  */}
      <div className="flex flex-col bg-blue-600 justify-center items-center p-2 rounded">
        Food
        <div className="grid grid-cols-3 gap-3">
          {products
            .filter((p) => p.category === "food")
            .map((p) => (
              <div
                key={p.id}
                className="bg-slate-800 flex gap-2 mb-2 flex-col p-2 rounded items-center h-auto"
              >
                <p>{p.name}</p>
                <p>$ {p.price}</p>
                <button onClick={() => addToCart(p)} className="w-full">
                  Add to cart
                </button>
                <button onClick={() => purchase(p)} className="w-full">
                  Purchase
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="flex flex-col bg-red-600 justify-center items-center p-2 rounded">
        Electronics
        <div className="grid grid-cols-3 gap-3">
          {products
            .filter((p) => p.category === "electronics")
            .map((p) => (
              <div
                key={p.id}
                className="bg-slate-800 flex gap-2 mb-2 flex-col p-2 rounded items-center h-auto"
              >
                <p>{p.name}</p>
                <p>$ {p.price}</p>
                <button onClick={() => addToCart(p)} className="w-full">
                  Add to cart
                </button>
                <button onClick={() => purchase(p)} className="w-full">
                  Purchase
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
