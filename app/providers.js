import { DrawerProvider } from "@/context/drawer-context";
import { VideoPlayerProvider } from "@/context/player-context";
import React from "react";
import { Toaster } from "sonner";
import { LanguageProvider } from "./[locale]/(main)/context/LanguageContext";
import { MenuProvider } from "@/context/menu-context";

const Providers = ({ children }) => {
  return (
    <LanguageProvider>
      <DrawerProvider>
        <MenuProvider>
          <VideoPlayerProvider>
            {children}
            <Toaster richColors />
          </VideoPlayerProvider>
        </MenuProvider>
      </DrawerProvider>
    </LanguageProvider>
  );
};

export default Providers;
