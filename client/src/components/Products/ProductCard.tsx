'use client'
import { useCartStore } from '@/storage/cart.store';
import { ShoppingBag, ShoppingCartIcon } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  tags:string
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
       id, name, description, price,
       tags: ''
    });
  };

  return (
    <div className="border flex flex-col items-center justify-center bg-red-400 opacity-80 rounded-lg shadow-md h-[300px]">
      <ShoppingBag />
      <h2 className="text-lg font-semibold mt-2 text-white">{name}</h2>
      <p className="text-sm mt-1 text-white">{description}</p>
      <div className="flex flex-col justify-between items-center mt-4">
        <span className="text-lg font-bold text-green-500">{price} грн</span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition flex"
        >
          Купити
          <ShoppingCartIcon className="pl-1" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
