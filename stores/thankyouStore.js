import { create } from "zustand";
import { persist } from "zustand/middleware";

const useThankyouStore = create(
  persist(
    (set) => ({
      booking: null,
      setBooking: (data) => set({ booking: data }),
      clearBooking: () => set({ booking: null }),
    }),
    {
      name: "thankyou-booking",
    }
  )
);

export default useThankyouStore;
