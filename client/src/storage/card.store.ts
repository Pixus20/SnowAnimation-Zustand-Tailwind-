import { create } from "zustand";

interface HeartState {
  likedProducts: Record<number, boolean>; 
  toggle: (id: number) => void;
}

export const useHeartButton = create<HeartState>((set) => ({
  likedProducts: typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("likedProducts") || "{}")
    : {},

  toggle: (id) =>
    set((state) => {
      const newLikedProducts = {
        ...state.likedProducts,
        [id]: !state.likedProducts[id],
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("likedProducts", JSON.stringify(newLikedProducts));
      }

      return { likedProducts: newLikedProducts };
    }),
}));
