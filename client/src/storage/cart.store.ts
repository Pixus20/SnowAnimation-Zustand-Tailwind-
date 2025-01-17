import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string;
}

interface CartState {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => ({
          cart: [...state.cart, product],
        })),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        })),
      clearCart: () =>
        set(() => ({
          cart: [],
        })),
    }),
    {
      name: 'cart-storage',
    }
  )
);

