"use client";

import { createContext, useContext, useState } from "react";
import MenuModal from "@/components/MenuModal";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [drawerConfig, setDrawerConfig] = useState({
    isOpen: false,
    className: "",
    children: null,
    onCloseCallback: null,
  });

  const showMenu = (config) => {
    setDrawerConfig((prev) => ({
      ...prev,
      ...config,
      isOpen: true,
    }));
  };

  const hideMenu = () => {
    setDrawerConfig((prev) => {
      if (prev.onCloseCallback) {
        prev.onCloseCallback();
      }
      return {
        ...prev,
        isOpen: false,
        onCloseCallback: null,
      };
    });
  };

  return (
    <MenuContext.Provider
      value={{ showMenu, hideMenu, isSubmitting, setIsSubmitting }}>
      {children}
      <MenuModal
        {...drawerConfig}
        onClose={hideMenu}
        isSubmitting={isSubmitting}
      />
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
