"use client";
import Drawer from "@/components/Drawer/Drawer";
import { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
    const [drawerConfig, setDrawerConfig] = useState({
        isOpen: false,
        title: "",
        size: "md",
        content: null,
        showClose: true,
        footer: null,
    });

    const showDrawer = (config) => {
        setDrawerConfig({ ...drawerConfig, ...config, isOpen: true });
    };

    const hideDrawer = () => {
        setDrawerConfig((prev) => ({ ...prev, isOpen: false }));
    };

    return (
        <DrawerContext.Provider value={{ showDrawer, hideDrawer }}>
            {children}
            <Drawer {...drawerConfig} onClose={hideDrawer} />
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => useContext(DrawerContext);