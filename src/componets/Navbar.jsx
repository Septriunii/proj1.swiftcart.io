import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-10 w-full flex items-center justify-center gap-5 bg-slate-800 fixed top-0">
      <Link to="/">
        <div className="cursor-pointer">Home</div>
      </Link>
      <Link to="/products">
        <div className="cursor-pointer">Products</div>
      </Link>
      <Link to="/carts">
        <div className="cursor-pointer">Carts</div>
      </Link>
      <Link to="/purchase">
        <div className="cursor-pointer">Purchase</div>
      </Link>
    </div>
  );
}

export default Navbar;
