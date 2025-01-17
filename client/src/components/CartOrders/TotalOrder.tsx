'use client'
import { useCartStore } from "@/storage/cart.store";

export const TotalOrder = () => {
  const { cart, clearCart } = useCartStore();

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="sm:ml-2 flex justify-center bg-green-400 py-2 sm:px-1 w-full sm:mt-1 rounded-md">
      <div className="flex items-start flex-col">
        <div className="flex">
          <h1>Кількість:</h1>
          <p className="ml-1">{totalItems}</p>
        </div>
        <div className="flex">
          <h1>Total:</h1>
          <p className="ml-1">{totalPrice} грн</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={clearCart}
            className="p-2 uppercase bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors ease-in-out duration-300"
          >
            Очистити корзину
          </button>
          <button className="p-2 uppercase bg-purple-200 rounded-md hover:bg-purple-700 transition-colors ease-in-out duration-300">
            Купити
          </button>
        </div>
      </div>
    </div>
  );
};
