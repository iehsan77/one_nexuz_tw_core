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
    <div className="max-w-xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 gap-4">
        {data?.map((item) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            number={item.number}
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

const AccordionItem = ({ id, title, number, content, isOpen, onClick }) => {
  return (
    <div className={`P-6 border border-gray-400 hover:cursor-pointer ${id ? "bg-primary" : ""}`}
      onClick={() => onClick(id)}
    >
      {/* Accordion Button */}
      <div
        className="w-full flex justify-between items-center gap-4 p-4 text-left displayPara font-semibold"

      >
        <div className="flex items-center gap-6">
          <span className="display3">{number}</span>
          <span>{title}</span>
        </div>
        <span>
          <Icon
            icon="iconamoon:arrow-right-2-duotone"
            width="1.5rem"
            height="1.5rem"
            className={`text-black transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"
              }`}
          />
        </span>
      </div>

      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out transform ${isOpen
          ? "scale-100 opacity-100 max-h-screen pl-6"
          : "scale-50 opacity-0 max-h-0 p-0"
          }`}
      >
        <Paragraph blackText1={content} className={`!mb-0`} />
      </div>
    </div>
  );
};
