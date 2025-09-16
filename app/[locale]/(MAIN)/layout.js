import BottomStickyCall from "@/components/BottomStickyCall";
import Footer from "@/components/Footer/Footer";
import { StickyNavbar } from "@/components/StickyNavBar/StickyNavBar";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div>
        <StickyNavbar />
        {children}
        <Footer />
        <BottomStickyCall />
      </div>
    </>
  );
}
