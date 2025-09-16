"use client";
import { GET } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { create } from "zustand";

const useBodyTypeStore = create((set) => ({
  bodyTypeData: [],
  data: [],
  bodyTypeLoading: false,
  bodyTypeError: null,

  startLoading: () => set({ bodyTypeLoading: true }),
  stopLoading: () => set({ bodyTypeLoading: false }),

  fetchBodyTypeData: async () => {
    const currentState = useBodyTypeStore.getState();

    if (currentState.data.length > 0) {
      set({ bodyTypeLoading: false });
      return;
    }

    set({ bodyTypeLoading: true, bodyTypeError: null });
    try {
      const res = await GET(endpoints.HOME.GET_BODY_TYPES);
      if (res?.status === 200) {
        set({
          bodyTypeData: res?.data,
          data: res?.data,
          bodyTypeLoading: false,
        });
      } else {
        set({
          bodyTypeLoading: false,
          bodyTypeError: `Error: Received status ${res.status}`,
        });
      }
    } catch (err) {
      console.error("Error fetching addresses:", err);
      set({
        bodyTypeLoading: false,
        bodyTypeError:
          err.message || "Something went wrong while fetching addresses.",
      });
    }
  },
}));

export default useBodyTypeStore;
