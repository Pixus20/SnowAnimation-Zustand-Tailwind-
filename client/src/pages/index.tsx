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
    <div className="bg-purple-200 flex flex-col items-center justify-center">
      <div className="w-[80%] flex flex-col justify-center ">
        <Filter />
        <ProductList />
      </div>
    </div>
  );
}
