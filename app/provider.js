import { DrawerProvider } from "@/context/drawer-context";
import { LanguageProvider } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import React from "react";
import { Toaster } from "sonner";

export default function Provider({ children }) {
  return (
    <LanguageProvider>
      <DrawerProvider>
        {children}
        <Toaster richColors closeButton expand={true} position="top-center" />
      </DrawerProvider>
    </LanguageProvider>
  );
}
