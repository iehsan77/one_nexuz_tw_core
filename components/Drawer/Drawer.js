"use client";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const drawerSizes = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-3xl",
    full: "w-full max-w-full",
};

export default function Drawer({
    isOpen,
    onClose,
    title,
    size = "sm",
    content,
    showClose = true,
    footer,
    direction = "right", // 'left' or 'right'
}) {
    const [visible, setVisible] = useState(false);
    const [entered, setEntered] = useState(false);

    const isRight = direction === "right";
    const slideFrom = isRight ? "translate-x-full" : "-translate-x-full";
    const slideTo = "translate-x-0";

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            // wait one tick to trigger transition
            setTimeout(() => setEntered(true), 20);
        } else {
            setEntered(false);
            const timeout = setTimeout(() => setVisible(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-50 flex">
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${entered ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

            {/* Drawer Panel */}
            <div
                className={`
          fixed top-0 h-full bg-white shadow-xl flex flex-col w-[320px]
          ${drawerSizes[size]}
          ${isRight ? "right-0" : "left-0"}
          transform transition-transform duration-300
          ${entered ? slideTo : slideFrom}
        `}
            >
                {/* Header */}
                <div className="p-4 flex items-center justify-between border-b border-gray-300">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    {showClose && (
                        <button onClick={onClose}>
                            <Icon
                                icon="mdi:close"
                                className="w-6 h-6 text-gray-600 cursor-pointer"
                            />
                        </button>
                    )}
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-4">{content}</div>

                {/* Footer */}
                {footer && <div className="p-4 border-t">{footer}</div>}
            </div>
        </div>
    );
}

