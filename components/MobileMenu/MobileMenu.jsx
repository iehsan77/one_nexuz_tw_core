"use client";
import React, { useState } from "react";
import Image from "../Image/Image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

function MobileMenu() {
  const data = [
    { icon: "/social/1.svg", url: "#" },
    { icon: "/social/2.svg", url: "#" },
    { icon: "/social/3.svg", url: "#" },
    { icon: "/social/4.svg", url: "#" },
  ];

  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-30 sm:hidden">
      <div className="space-y-2">
        {/* Social icons - slide from right */}
        <AnimatePresence>
          {showSocial && (
            <motion.div
              key="social-icons"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed bottom-36.5 right-18 flex items-center z-40">
              {data?.map((s, i) => (
                <Link key={i} href={s?.url || "#"}>
                  <Image
                    src={s?.icon}
                    alt="icon"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat button */}
        <button
          onClick={() => setShowSocial((prev) => !prev)}
          className="cursor-pointer flex items-center justify-center bg-secondary h-13 w-13 rounded-full">
          <Image
            src="/logo/chat.svg"
            alt="icon"
            width={22}
            height={22}
            className="w-auto h-auto object-contain"
          />
        </button>

        {/* Fixed logo button */}
        <button className="cursor-pointer flex items-center justify-center bg-primary h-13 w-13 rounded-full">
          <Image
            src="/logo/fixedLogo.svg"
            alt="icon"
            width={22}
            height={22}
            className="w-auto h-auto object-contain"
          />
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
