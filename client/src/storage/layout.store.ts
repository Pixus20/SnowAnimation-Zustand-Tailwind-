import { create } from 'zustand';

interface Snow_btn {
  isActive: boolean; 
  toggle: () => void; 
  isHydrated: boolean;
}

export const useButtonStoreSnow = create<Snow_btn>((set) => ({
  isActive: false, 
  isHydrated: false,
  toggle: () =>
    set((state) => {
      const newState = !state.isActive;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isActive', String(newState)); 
      }
      return { isActive: newState };
    }),
}));

if (typeof window !== 'undefined') {
  useButtonStoreSnow.setState({
    isActive: localStorage.getItem('isActive') === 'true', 
    isHydrated: true,
  });
}

