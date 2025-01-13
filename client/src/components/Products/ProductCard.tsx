import { ShoppingBag } from 'lucide-react'

const ProductCard = () => {
  return (
   <div className="border flex flex-col items-center justify-center  bg-red-400 opacity-80 rounded-lg shadow-md  h-[300px]">
      <ShoppingBag/>
      <h2 className="text-lg font-semibold mt-2">Назва</h2>
      <p className="text-gray-600 text-sm mt-1">Опис</p>
      <div className="flex flex-col justify-between items-center mt-4">
         <span className="text-lg font-bold text-green-500">Ціна</span>
         <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition">
            Купити
         </button>
      </div>
   </div>
  )
}

export default ProductCard