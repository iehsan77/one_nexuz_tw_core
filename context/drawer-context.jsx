"use client";

import { createContext, useContext, useState } from "react";
import Drawer from "@/components/Drawer";

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [drawerConfig, setDrawerConfig] = useState({
    isOpen: false,
    header: null,
    size: "md",
    position: "right",
    hasOverlay: true,
    withCloseButton: true,
    className: "",
    children: null,
    footer: null,
    isSubmitting: false,
  });

  const showDrawer = (config) => {
    setDrawerConfig((prev) => ({
      ...prev,
      ...config,
      isOpen: true,
    }));
  };

  const hideDrawer = () => {
    setDrawerConfig((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <DrawerContext.Provider
      value={{ showDrawer, hideDrawer, isSubmitting, setIsSubmitting }}
    >
      {children}
      <Drawer
        {...drawerConfig}
        onClose={hideDrawer}
        isSubmitting={isSubmitting}
      />
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
