"use client";
import { GET } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { create } from "zustand";

const useBrandStore = create((set) => ({
  brandData: [],
  data: [],
  brandLoading: false,
  brandError: null,

  startLoading: () => set({ brandLoading: true }),
  stopLoading: () => set({ brandLoading: false }),

  fetchBrandData: async () => {
    const currentState = useBrandStore.getState();

    if (currentState.data.length > 0) {
      set({ brandLoading: false });
      return;
    }

    set({ brandLoading: true, brandError: null });
    try {
      const res = await GET(endpoints.HOME.GET_BRANDS);
      if (res?.status === 200) {
        set({
          brandData: res?.data,
          data: res?.data,
          brandLoading: false,
        });
      } else {
        set({
          brandLoading: false,
          brandError: `Error: Received status ${res.status}`,
        });
      }
    } catch (err) {
      console.error("Error fetching addresses:", err);
      set({
        brandLoading: false,
        brandError:
          err.message || "Something went wrong while fetching addresses.",
      });
    }
  },
}));

export default useBrandStore;
