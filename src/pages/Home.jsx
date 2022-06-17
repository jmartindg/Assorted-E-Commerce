import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      {!loading ? (
        <section className="container mx-auto my-16 px-4 md:px-0">
          <h1 className="font-bold text-3xl pb-6">Browse Items</h1>
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {products.map((product) => (
              <Link to={`/product-details/${product.id}`} key={product.id}>
                <article>
                  <ProductCard name={product.title} price={product.price} image={product.image} />
                </article>
              </Link>
            ))}
          </section>
        </section>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Home;
