import { useButtonStoreSnow } from "@/storage/layout.store";
import { Snowflake, SunMediumIcon } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const Layout = () => {
  const { isActive, toggle, isHydrated } = useButtonStoreSnow();

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
    <div className="flex justify-center flex-col items-center">
      <header className="w-[80%] bg-orange-400 flex justify-around items-center">
        <div className="logo h-20 w-20 bg-slate-700 text-center leading-[80px]">
          LOGO
        </div>
        <div
          className={`Snow_btn text-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer `}
        >
          <Snowflake onClick={toggle} />
        </div>
        <div className="Theme_btn text-white hover:text-black transition-colors duration-200 ease-in-out cursor-pointer">
          <SunMediumIcon />
        </div>
      </header>

      {isActive && (
        <Particles
          options={{
            particles: {
              color: {
                value: "#fff",
              },
              number: {
                value: 100,
              },
              opacity: {
                value: { min: 0.3, max: 0.9 },
              },
              shape: {
               type: "image",
               image: {
                 src: "/assets/snowflake-white.svg", 
                 width: 50, 
                 height: 50, 
               },
            },
              size: {
                value: { min: 1, max: 5 },
              },
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

      <main className="h-[1000px] bg-slate-900"></main>
    </div>
  );
};

export default Layout;
