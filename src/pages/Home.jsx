import { useState, useEffect } from "react";
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
          <div className="py-4"></div>
          <h1 className="font-bold text-3xl pb-6">Browse Items</h1>
          <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 lg:gap-8">
            {products.map((product) => (
              <article key={product.id}>
                <ProductCard
                  id={product.id}
                  name={product.title}
                  price={product.price}
                  image={product.image}
                  item={product}
                />
              </article>
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
