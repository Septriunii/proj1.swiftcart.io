import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import Products from "./pages/Main/Products";
import Carts from "./pages/Main/Carts";
import Purchased from "./pages/Main/Purchased";
import Electronics from "./pages/minor/Electronics";
import Food from "./pages/minor/Food";
import Fashion from "./pages/minor/Fashion";
import Health from "./pages/minor/Health";

function App() {
  return (
    <Router basename="/proj1.swiftcart.io">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/purchase" element={<Purchased />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/health" element={<Health />} />
      </Routes>
    </Router>
  );
}

export default App;
