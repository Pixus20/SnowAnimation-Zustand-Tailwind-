'use client';

import { useCartStore } from "@/storage/cart.store";
import { LucideTrash2 } from "lucide-react";

const OrderCart = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Корзина</h1>
      
      {cart.length === 0 ? (
        <p className="text-white">Корзина порожня</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-4 mb-2 rounded-lg flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>{item.description}</p>
                <p className="font-bold">{item.price} грн</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
              >
                <LucideTrash2/>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderCart;