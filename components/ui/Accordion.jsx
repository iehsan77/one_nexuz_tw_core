"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Typography from "./Typography";

const Accordion = ({
  items = [],
  allowMultiple = false,
  defaultOpenIndexes = [],
  showDivider = true,
  transitionDuration = 300,
  // customIcon: Icon = ChevronDown,
  iconPosition = "right", // or "left"
  defaultOpenAll = false, // 🔥 NEW FEATURE
}) => {
  const [openIndexes, setOpenIndexes] = useState(() => {
    if (defaultOpenAll) {
      return items.map((_, index) => index);
    }
    return defaultOpenIndexes;
  });

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="w-full">
      {items.map(({ id, title, content }, index) => {
        const isOpen = openIndexes.includes(index);
        const contentRef = useRef(null);
        const [height, setHeight] = useState(0);

        useEffect(() => {
          if (isOpen && contentRef.current) {
            setHeight(contentRef.current.scrollHeight);
          } else {
            setHeight(0);
          }
        }, [isOpen]);

        return (
          <div
            key={id || index}
            className={cn(
              "transition-all",
              showDivider && "border-t border-gray-200"
            )}>
            <button
              type="button"
              className={cn(
                "w-full flex justify-between items-center py-4 focus:outline-none transition-colors duration-200 hover:text-primary",
                iconPosition === "left" && "flex-row-reverse"
              )}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${index}`}>
              <Typography as="span" size="lg" weight="medium">
                {title}
              </Typography>
              <Icon
                className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </button>

            <div
              id={`accordion-content-${index}`}
              ref={contentRef}
              style={{ height: `${height}px` }}
              className={cn(
                "overflow-hidden transition-all ease-in-out",
                `duration-[${transitionDuration}ms]`
              )}>
              <div className="pb-4 text-gray-600">{content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
