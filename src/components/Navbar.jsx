import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-zinc-900 fixed inset-x-0 top-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:px-0">
        <div>
          <Link to="/" className="text-white uppercase font-bold">
            Assorted
          </Link>
        </div>
        <div className="space-x-7">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/cart" className="text-white hover:underline">
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
