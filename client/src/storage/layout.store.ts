import { create } from 'zustand';

interface Snow_btn {
  isActive: boolean; 
  toggle: () => void; 
  isHydrated: boolean;
}

interface DarkTheme_btn{
  isActiveTheme:boolean;
  toggleTheme:()=>void;
  isHydratedTheme:boolean;
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

export const useButtonStoreTheme = create<DarkTheme_btn>((set) => ({
  isActiveTheme: false, 
  isHydratedTheme: false,
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isActiveTheme ? 'dark' : 'light'; 
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark'); 
      }
      return { isActiveTheme: newTheme === 'dark' };
    }),
}));

if (typeof window !== 'undefined') {
  const storedTheme = localStorage.getItem('theme') || 'light'; 
  useButtonStoreTheme.setState({
    isActiveTheme: storedTheme === 'dark',
    isHydratedTheme: true,
  });
  document.documentElement.classList.toggle('dark', storedTheme === 'dark');
}
