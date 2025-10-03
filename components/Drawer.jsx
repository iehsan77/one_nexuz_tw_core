"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Drawer({
  isOpen,
  onClose,
  position = "right", // left | right | top | bottom
  size = "md", // sm | md | lg | full
  hasOverlay = true,
  disableOutsideClick = false,
  disableEscClose = false,
  trapFocus = true,
  portal = false,
  withCloseButton = true,
  header,
  footer,
  className = "",
  children,
  isSubmitting = false,
}) {
  const drawerRef = useRef(null);
  const previouslyFocused = useRef(null);

  const sizeClasses = {
    sm: "w-[300px] xs:w-64",
    md: "w-[300px] xs:w-96",
    lg: "w-[36rem]",
    full: "w-screen h-screen",
  };

  const positionStyles = {
    right: "fixed right-0 top-0 h-full",
    left: "fixed left-0 top-0 h-full",
    top: "fixed top-0 left-0 w-full",
    bottom: "fixed bottom-0 left-0 w-full",
  };

  const variants = {
    right: {
      hidden: { x: "100%" },
      visible: { x: 0 },
      exit: { x: "100%" },
    },
    left: {
      hidden: { x: "-100%" },
      visible: { x: 0 },
      exit: { x: "-100%" },
    },
    top: {
      hidden: { y: "-100%" },
      visible: { y: 0 },
      exit: { y: "-100%" },
    },
    bottom: {
      hidden: { y: "100%" },
      visible: { y: 0 },
      exit: { y: "100%" },
    },
  };

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape" && !disableEscClose && !isSubmitting) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", escHandler);
    return () => document.removeEventListener("keydown", escHandler);
  }, [disableEscClose, isSubmitting]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !disableOutsideClick &&
        !isSubmitting &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target)
      ) {
        onClose?.();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [disableOutsideClick, isSubmitting]);

  useEffect(() => {
    if (trapFocus && isOpen) {
      previouslyFocused.current = document.activeElement;
      const focusable = drawerRef.current?.querySelector(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      );
      focusable?.focus();
    }

    return () => {
      if (trapFocus && previouslyFocused.current && isOpen === false) {
        previouslyFocused.current.focus?.();
      }
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          {hasOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black"
            />
          )}

          {/* Drawer panel */}
          <motion.div
            ref={drawerRef}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants[position]}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`bg-white shadow-xl flex flex-col overflow-hidden ${positionStyles[position]} ${sizeClasses[size]} ${className}`}
            role="dialog"
            aria-modal="true">
            {/* Header */}
            {(header || withCloseButton) && (
              <div className="flex items-center justify-between px-5 py-3">
                <div>{header}</div>
                {withCloseButton && (
                  <button
                    onClick={() => !isSubmitting && onClose?.()}
                    className="text-white text-xl cursor-pointer"
                    aria-label="Close drawer">
                    {/* &times; */}
                    <Icon icon="si:close-fill" width="24" height="24" />
                  </button>
                )}
              </div>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-4">{children}</div>

            {/* Footer */}
            {footer && <div className="px-4 pt-4 pb-8">{footer}</div>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
