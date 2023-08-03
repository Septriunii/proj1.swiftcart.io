import electronics from "../../assets/electronics.jpeg";
import fashion from "../../assets/fashion.jpg";
import fitness from "../../assets/fitness.jpg";
import food from "../../assets/food.jpg";

const productsLists = [
  {
    id: 1,
    name: "Electronics",
    link: "/electronics",
    subcategories: [
      "Mobile Phones",
      "Laptops and Computers",
      "Televisions",
      "Audio and Video Devices",
      "Gaming Consoles",
    ],
    img: electronics,
  },

  {
    id: 2,
    name: "Food and Beverages",
    link: "/food",
    subcategories: [
      "Snacks and Confectionery",
      "Beverages",
      "Dairy and Eggs",
      "Canned and Packaged Foods",
      "Baking and Cooking Ingredients",
    ],
    img: food,
  },
  {
    id: 3,
    name: "Fashion and Apparel",
    link: "/fashion",
    subcategories: [
      "Clothing",
      "Shoes and Footwear",
      "Accessories",
      "Jewelry",
      "Watches",
    ],
    img: fashion,
  },

  {
    id: 4,
    name: "Health and Fitness",
    link: "/health",
    subcategories: [
      "Fitness Equipment",
      "Vitamins and Supplements",
      "Sports Nutrition",
      "Yoga and Meditation",
      "Personal Care",
    ],
    img: fitness,
  },
];

export default productsLists;
