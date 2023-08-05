import productsLists from "../../data/MAIN/Lists";

function CustomerService() {
  return (
    <div className="flex justify-evenly gap-5  border-t-[1px] border-neutral-700 p-5 md:flex-row flex-col ">
      <div className="flex gap-10">
        <div>
          <p className="font-bold">ABOUT SWIFTCART</p>
          <ul className="cursor-pointer opacity-70 flex flex-col gap-3 mt-5 text-sm">
            <li className="hover:underline">About Us</li>
            <li className="hover:underline">Blog</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Policies</li>
            <li className="hover:underline">Privacy Policy</li>
            <li className="hover:underline">SwiftCart Mall</li>
            <li className="hover:underline">Seller Centre</li>
            <li className="hover:underline">Flash Deals</li>
            <li className="hover:underline">Media Contact</li>
          </ul>
        </div>
        <div>
          <p className="font-bold">CUSTOMER SERVICE</p>
          <ul className="cursor-pointer opacity-70 flex flex-col gap-3 mt-5 text-sm">
            <li className="hover:underline">Help Center</li>
            <li className="hover:underline">Contact Us</li>
            <li className="hover:underline">Order Tracking</li>
            <li className="hover:underline">Return & Refund</li>
            <li className="hover:underline">Payment Methods</li>
            <li className="hover:underline">Free Shipping</li>
            <li className="hover:underline">SwiftCart Guarantee</li>
          </ul>
        </div>
      </div>

      <div className=" h-auto flex p-1 flex-col">
        <p className="font-bold">CATEGORIES</p>

        <div className="container mx-auto p-4 grid grid-cols-2 ">
          {productsLists.map((category) => (
            <div key={category.id} className="mb-4">
              <p className="text-sm font-bold mb-2">{category.name}</p>
              <ul className=" ml-4 opacity-70 text-xs">
                {category.subcategories.map((subcategory, index) => (
                  <li
                    className="hover:underline cursor-pointer leading-7"
                    key={index}
                  >
                    {subcategory}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerService;
