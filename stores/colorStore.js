"use client";
import { GET } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { create } from "zustand";

const useColorStore = create((set) => ({
  colorData: [],
  data: [],
  colorLoading: false,
  colorError: null,

  startLoading: () => set({ colorLoading: true }),
  stopLoading: () => set({ colorLoading: false }),

  fetchColorData: async () => {
    const currentState = useColorStore.getState();

    if (currentState.data.length > 0) {
      set({ colorLoading: false });
      return;
    }

    set({ colorLoading: true, colorError: null });
    try {
      const res = await GET(endpoints.LISTING.COLOR_FILTER);
      if (res?.status === 200) {
        set({
          colorData: res?.data,
          data: res?.data,
          colorLoading: false,
        });
      } else {
        set({
          colorLoading: false,
          colorError: `Error: Received status ${res.status}`,
        });
      }
    } catch (err) {
      console.error("Error fetching addresses:", err);
      set({
        colorLoading: false,
        colorError:
          err.message || "Something went wrong while fetching addresses.",
      });
    }
  },
}));

export default useColorStore;
