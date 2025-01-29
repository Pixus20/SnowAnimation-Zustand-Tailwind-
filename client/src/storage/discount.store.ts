import { create } from "zustand";

interface DiscountStore {
  usedCoupons: number;
  bonusReceived: boolean;
  incrementUsedCoupons: () => void;
  resetProgress: () => void;
}

const useDiscountStore = create<DiscountStore>((set) => {
  // Перевіряємо, чи доступний window, щоб уникнути помилок SSR
  const savedData = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("discountProgress") || "{}") : {};

  return {
    usedCoupons: savedData.usedCoupons || 0,
    bonusReceived: savedData.bonusReceived || false,
    
    incrementUsedCoupons: () =>
      set((state) => {
        const newUsedCoupons = state.usedCoupons + 1;
        const newBonusReceived = newUsedCoupons >= 10;

        const newState = {
          usedCoupons: newUsedCoupons,
          bonusReceived: newBonusReceived,
        };

        if (typeof window !== "undefined") {
          localStorage.setItem("discountProgress", JSON.stringify(newState));
        }

        return newState;
      }),
    
    resetProgress: () =>
      set(() => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("discountProgress");
        }
        return { usedCoupons: 0, bonusReceived: false };
      }),
  };
});

export default useDiscountStore;