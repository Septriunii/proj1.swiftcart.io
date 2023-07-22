import React from "react";
import productsLists from "../../data/MAIN/Lists";

function Catergories() {
  return (
    <div className=" h-auto flex p-1">
      <div className="container mx-auto p-4 grid grid-cols-5 text-sm">
        {productsLists.map((category) => (
          <div key={category.id} className="mb-4">
            <p className="text-sm font-bold mb-2">{category.name}</p>
            <ul className="list-disc list-inside ml-4">
              {category.subcategories.map((subcategory, index) => (
                <li key={index}>{subcategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catergories;
