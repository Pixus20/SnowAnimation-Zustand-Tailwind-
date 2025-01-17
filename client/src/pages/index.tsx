import { LoadMore } from "@/components/Pagination/LoadMore";
import Pagination from "@/components/Pagination/Pagination";
import ProductList from "@/components/Products/ProductList";
import Filter from "@/components/ProductsFilter/Filter";
import { useButtonStoreTheme } from "@/storage/layout.store";
import { useEffect } from "react";

export default function Home() {
  const { isActiveTheme, isHydratedTheme } = useButtonStoreTheme();

  useEffect(() => {
    if (!isHydratedTheme) return;

    document.documentElement.classList.toggle("dark", isActiveTheme);
  }, [isActiveTheme, isHydratedTheme]);

  if (!isHydratedTheme) {
    return null; 
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col justify-center ">
        <Filter />
        <ProductList />
        <LoadMore/>
        <Pagination/>
      </div>
    </div>
  );
}
