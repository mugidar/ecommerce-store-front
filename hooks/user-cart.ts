import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
  totalPrice: number;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      totalPrice: 0,
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast("Item already in cart.");
        }

        set((state) => ({
          items: [...get().items, data],
          totalPrice: state.totalPrice + Number(data.price),
        }));
        toast.success("Item added.");
      },

      removeItem: (id: string) => {
        set((state) => ({
          items: [...get().items.filter((item) => item.id !== id)],
          totalPrice:
            state.totalPrice -
            Number(state.items.find((item) => item.id === id)?.price),
        }));
        toast.success("Item removed.");
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
