import { useButtonStoreSnow, useButtonStoreTheme } from "@/storage/layout.store";
import { ShoppingCart, Snowflake, SunMediumIcon, User } from "lucide-react";
import Link from 'next/link';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const Header = () => {
   const { isActive, toggle, isHydrated } = useButtonStoreSnow();
   const { toggleTheme } = useButtonStoreTheme();
 
   if (!isHydrated) {
     return null;
   }
 
   const initParticles = async (engine: Engine) => {
     try {
       await loadFull(engine);
     } catch (error) {
       console.error("Error initializing tsparticles:", error);
     }
   };
 
   return (
     <div  className="fixed top-0 left-0 w-full h-[5rem] bg-red-400 opacity-80 flex justify-around items-center z-50">
       <header className="w-full bg-red-400 opacity-80 flex justify-around items-center ">
         <div className="logo h-20 w-20 flex">
           <Link href="/">
             <img
               src="/assets/logo_christmas_ornament_store.png"
               alt="Store Logo"
               className="hover:cursor-pointer"
             />
           </Link>
         </div>
         <div className="flex lg:gap-10">
           <div
             className="Snow_btn text-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer"
           >
             <Snowflake onClick={toggle} />
           </div>
           <div className="Theme_btn text-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer">
             <SunMediumIcon onClick={toggleTheme} />
           </div>
           <div className="Theme_btn text-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer">
             <Link href="Cart">
               <ShoppingCart />
             </Link>
           </div>
           <div className="text-white">
            <Link href='/Login'>
            Увійти
            </Link>
            </div>
           <div className="text-white">
            <Link href='/Register'>
            Зареєструватися
            </Link>
            </div>
           <div className="Theme_btn text-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer">
            <Link href='User'>
              <User />
            </Link>
           </div>
         </div>
       </header>
 
       {isActive && (
         <Particles
           options={{
             particles: {
               color: { value: "#fff" },
               number: { value: 100 },
               opacity: { value: { min: 0.3, max: 0.9 } },
               shape: {
                 type: "image",
                 image: {
                   src: "/assets/snowflake-white.svg",
                   width: 50,
                   height: 50,
                 },
               },
               size: { value: { min: 1, max: 5 } },
               move: {
                 direction: "bottom-left",
                 enable: true,
                 speed: { min: 3, max: 8 },
                 straight: false,
               },
             },
           }}
           init={initParticles}
         />
       )}
     </div>
   );
 };
 
 export default Header;
 