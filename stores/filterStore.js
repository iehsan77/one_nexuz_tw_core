"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFilterStore = create(
  persist(
    (set) => ({
      filters: {
        brand_id: 0,
        model_id: 0,
        category_id: 0,
        body_type_id: 0,
        color_id: 0,
        price_min: 0,
        price_max: 0,
        keywords: "",
        year: "",
      },
      setFilter: (key, value) =>
        set((state) => ({
          filters: {
            ...state.filters,
            [key]: value,
          },
        })),
      setMultipleFilters: (payload) =>
        set((state) => ({
          filters: {
            ...state.filters,
            ...payload,
          },
        })),
      resetFilters: () =>
        set(() => ({
          filters: {
            brand_id: 0,
            model_id: 0,
            category_id: 0,
            body_type_id: 0,
            color_id: 0,
            price_min: 0,
            price_max: 0,
            keywords: "",
            year: "",
          },
        })),
    }),
    {
      name: "filter-store",
    }
  )
);

export default useFilterStore;
