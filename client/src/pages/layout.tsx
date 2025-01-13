// import Footer from "@/components/Footer/Footer";
// import Header from "@/components/Header/Header";



// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
//       <Header />
//       {children}
//       <Footer />
//     </>
//   );
// };

// export default Layout;


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
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
