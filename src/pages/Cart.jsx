import { useCart } from "react-use-cart";
import { FiTrash } from "react-icons/fi";

const Cart = () => {
  const { items, isEmpty, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

  return (
    <section className="mb-20">
      <div className="py-7"></div>
      <div className="container mx-auto grid md:grid-cols-12 gap-x-6 px-4 md:px-0">
        {!isEmpty ? (
          <div className="col-span-8">
            <header>
              <h2 className="text-white uppercase font-semibold bg-zinc-900 my-8 py-5 px-6">Your Cart: {totalItems}</h2>
            </header>
            <section className="flex flex-col gap-y-6">
              {items.map((item) => (
                <article key={item.id} className="shadow bg-white p-6 flex items-center">
                  <img src={item.image} className="w-24" alt={item.title} />
                  <div className="ml-6">
                    <h3 className="font-bold text-lg pb-2">{item.title}</h3>
                    <p className="font-semibold">
                      Price: <span className="text-gray-600">${item.price}</span>
                    </p>
                    <p className="font-semibold">
                      Quantity: <span className="text-gray-600">{item.quantity}</span>
                    </p>
                    <div className="flex items-center">
                      <div className="md:space-x-2 flex flex-col md:flex-row w-full md:w-auto items-center">
                        <button
                          onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                          className="w-full md:w-auto border-0 text-white mt-3 bg-red-700 hover:bg-red-800 inline-block py-2 px-5"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                          className="w-full md:w-auto border-0 text-white mt-3 bg-green-600 hover:bg-green-700 inline-block py-2 px-5"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-full md:w-auto flex justify-center my-2 pt-4 md:pt-3"
                        >
                          <FiTrash className="ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </section>
          </div>
        ) : (
          <div className="col-span-8">
            <header>
              <h2 className="text-white uppercase font-semibold bg-zinc-900 my-8 py-5 px-6">Your Cart: {totalItems}</h2>
            </header>
            <section className="flex flex-col gap-y-6">
              <p className="text-center py-20 text-xl">Cart is Empty.</p>
            </section>
          </div>
        )}
        <div className="col-span-8 md:col-span-4">
          <h2 className="text-white uppercase font-semibold bg-zinc-900 mt-8 py-5 px-6">Summary</h2>
          <div className="bg-zinc-900 px-5 text-white pb-5">
            <p className="font-semibold">
              Items: <span className="font-normal">{totalItems}</span>
            </p>
            <p className="font-semibold">
              Total Price: <span className="font-normal">${cartTotal.toLocaleString()}</span>
            </p>
            <div className="mt-5 flex flex-col space-y-2">
              <button className="bg-white hover:bg-gray-100 text-black p-3">Checkout</button>
              <button onClick={() => emptyCart()} className="bg-red-700 hover:bg-red-800 text-white p-3">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
