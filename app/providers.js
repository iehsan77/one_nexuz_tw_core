import { DrawerProvider } from "@/context/drawer-context";
import React from "react";
import { Toaster } from "sonner";
import { LanguageProvider } from "./[locale]/(main)/context/LanguageContext";
import { MenuProvider } from "@/context/menu-context";
import { CommonModalProvider } from "@/context/commonModalProvider";

const Providers = ({ children }) => {
  return (
    <LanguageProvider>
      <DrawerProvider>
        <MenuProvider>
          <CommonModalProvider>
            {children}
            <Toaster richColors />
          </CommonModalProvider>
        </MenuProvider>
      </DrawerProvider>
    </LanguageProvider>
  );
};

export default Providers;
