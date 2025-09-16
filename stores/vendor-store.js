import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useVendorStore = create(
    persist(
        (set) => ({
            vendor: null,
            loading: false,
            setVendor: (vendor) => set({ vendor }),
            setLoading: (loading) => set({ loading }),
        }),
        {
            name: "vendor-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useVendorStore;
