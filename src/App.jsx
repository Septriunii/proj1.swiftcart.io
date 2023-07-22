import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import Products from "./pages/Main/Products";
import Carts from "./pages/Main/Carts";
import Purchased from "./pages/Main/Purchased";
import Electronics from "./pages/minor/Electronics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/purchase" element={<Purchased />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </Router>
  );
}

export default App;
