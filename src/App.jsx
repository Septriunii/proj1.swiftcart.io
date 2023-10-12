import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { Suspense } from "react";

const Home = lazy(() => import("./pages/Main/Home"));
const Products = lazy(() => import("./pages/Main/Products"));
const Carts = lazy(() => import("./pages/Main/Carts"));
const Purchased = lazy(() => import("./pages/Main/Purchased"));
const Electronics = lazy(() => import("./pages/minor/Electronics"));
const Food = lazy(() => import("./pages/minor/Food"));
const Fashion = lazy(() => import("./pages/minor/Fashion"));
const Health = lazy(() => import("./pages/minor/Health"));

function App() {
  return (
    <Router basename="/proj1.swiftcart.io">
      <Suspense fallback={null}>
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
      </Suspense>
    </Router>
  );
}

export default App;
