'use client'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useButtonStoreTheme } from "@/storage/layout.store";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isActiveTheme, isHydratedTheme } = useButtonStoreTheme();

  useEffect(() => {
    if (!isHydratedTheme) return;

    const rootElement = document.documentElement;

    if (isActiveTheme) {
      rootElement.classList.add("dark");
      rootElement.classList.remove("light");
    } else {
      rootElement.classList.add("light");
      rootElement.classList.remove("dark");
    }
  }, [isActiveTheme, isHydratedTheme]);

  if (!isHydratedTheme) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-[5rem] bg-purple-200 mt ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
