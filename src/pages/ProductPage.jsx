import { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { BsCartPlus } from "react-icons/bs";

const ProductPage = () => {
  let { id } = useParams();
  const { addItem } = useCart();
  const [productDetails, setProductDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductDetails = async () => {
    setLoading(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProductDetails(data);
    setLoading(false);
  };

  useEffect(() => {
    getProductDetails();
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="my-16">
      <div className="py-4"></div>
      {!loading ? (
        <div className="container mx-auto flex items-center flex-col gap-8 md:flex-row px-4 md:px-0">
          <div className="flex-1 bg-white">
            <img src={productDetails.image} className="py-14 mx-auto w-2/5" alt={productDetails.title} />
          </div>
          <div className="flex-1">
            <span className="text-white capitalize bg-zinc-900 rounded-full px-4 py-1">{productDetails.category}</span>
            <h2 className="font-bold text-4xl mt-4">{productDetails.title}</h2>
            <p className="py-5 leading-normal">{productDetails.description}</p>
            <span className="text-2xl font-bold">${productDetails.price}</span>
            <div className="mt-7">
              <button onClick={() => addItem(productDetails)} className="add-to-cart-btn">
                <BsCartPlus /> <span className="ml-3">Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default ProductPage;
