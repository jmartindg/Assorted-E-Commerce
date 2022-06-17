import { BsCartPlus } from "react-icons/bs";

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="shadow bg-white">
      <img className="p-5 aspect-[16/16] object-contain" src={image} alt={name} title={name} />
      <div className="p-4">
        <h2 className="font-bold truncate">{name}</h2>
        <div className="pt-2 flex items-center justify-between">
          <p>${price}</p>
          <button title="Add to Cart">
            <BsCartPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
