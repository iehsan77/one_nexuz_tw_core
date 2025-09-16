"use client";
import { GET } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categoryData: [],
  data: [],
  categoryLoading: false,
  categoryError: null,

  startLoading: () => set({ categoryLoading: true }),
  stopLoading: () => set({ categoryLoading: false }),

  fetchCategoriesData: async () => {
    const currentState = useCategoryStore.getState();

    if (currentState.data.length > 0) {
      set({ categoryLoading: false });
      return;
    }

    set({ categoryLoading: true, categoryError: null });
    try {
      const res = await GET(endpoints.HOME.GET_CATEGORIES);
      if (res?.status === 200) {
        set({
          categoryData: res?.data,
          data: res?.data,
          categoryLoading: false,
        });
      } else {
        set({
          categoryLoading: false,
          categoryError: `Error: Received status ${res.status}`,
        });
      }
    } catch (err) {
      console.error("Error fetching addresses:", err);
      set({
        categoryLoading: false,
        categoryError:
          err.message || "Something went wrong while fetching addresses.",
      });
    }
  },
}));

export default useCategoryStore;
