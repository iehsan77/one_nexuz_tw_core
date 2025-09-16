"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCarCompareStore = create(
  persist(
    (set) => ({
      slug: "",

      setSlug: (newSlug) => set({ slug: newSlug }),

      resetSlug: () => set({ slug: "" }),
    }),
    {
      name: "compare-car-storage",
    }
  )
);

export default useCarCompareStore;
