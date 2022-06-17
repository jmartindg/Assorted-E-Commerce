import { Link } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { useCart } from "react-use-cart";

const ProductCard = ({ id, name, price, image, item }) => {
  const { addItem } = useCart();

  return (
    <div className="shadow bg-white">
      <Link to={`/product-details/${id}`}>
        <img className="p-5 aspect-[16/16] object-contain" src={image} alt={name} title={name} />
      </Link>
      <div className="p-4">
        <h2 className="font-bold truncate">{name}</h2>
        <div className="pt-2 flex items-center justify-between">
          <p>${price}</p>
          <button title="Add to Cart" onClick={() => addItem(item)}>
            <BsCartPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
