import ProductCard from './ProductCard'

const ProductList = () => {
   return (
      <div className="grid  grid-cols-1 p-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
      </div>
   )
}

export default ProductList