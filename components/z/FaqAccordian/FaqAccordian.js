"use client";
import Paragraph from "@/components/Typography/Paragraph";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

export function FaqAccordian({ data }) {
  const [openItemId, setOpenItemId] = useState(null);

  const handleItemClick = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-3 grid-cols-1 sm:gap-4 gap-1">
        {data?.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.question}
            content={item.answer}
            isOpen={openItemId === item.id}
            onClick={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
}

const AccordionItem = ({ id, title, content, isOpen, onClick }) => {
  return (
    <div className="my-2">
      {/* Accordion Button */}
      <button
        className="border-b border-gray-400 pb-2 w-full flex justify-between items-center gap-4 text-left displayPara font-semibold"
        onClick={() => onClick(id)}
      >
        <span>{title}</span>
        <span>
          <Icon
            icon="iconamoon:arrow-right-2-duotone"
            width="1.5rem"
            height="1.5rem"
            className={`text-black transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "scale-100 opacity-100 max-h-screen pt-2"
            : "scale-50 opacity-0 max-h-0 p-0"
        }`}
      >
        <Paragraph blackText1={content} className={`!mb-0`} />
      </div>
    </div>
  );
};
