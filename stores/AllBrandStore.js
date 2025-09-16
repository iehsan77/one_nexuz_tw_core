"use client";
import { GET } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { create } from "zustand";

const useAllBrandStore = create((set) => ({
  allBrandData: [],
  data: [],
  allBrandLoading: false,
  allBrandError: null,

  startLoading: () => set({ allBrandLoading: true }),
  stopLoading: () => set({ allBrandLoading: false }),

  fetchAllBrandData: async () => {
    const currentState = useAllBrandStore.getState();

    if (currentState.data.length > 0) {
      set({ allBrandLoading: false });
      return;
    }

    set({ allBrandLoading: true, allBrandError: null });
    try {
      const res = await GET(endpoints.BRANDS.GET_ALL_BRANDS);
      if (res?.status === 200) {
        set({
          allBrandData: res?.data,
          data: res?.data,
          allBrandLoading: false,
        });
      } else {
        set({
          allBrandLoading: false,
          allBrandError: `Error: Received status ${res.status}`,
        });
      }
    } catch (err) {
      console.error("Error fetching addresses:", err);
      set({
        allBrandLoading: false,
        allBrandError:
          err.message || "Something went wrong while fetching addresses.",
      });
    }
  },
}));

export default useAllBrandStore;
