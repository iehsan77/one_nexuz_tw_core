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
    <div
      className={`border border-gray-400 hover:cursor-pointer transition-colors duration-300 ${isOpen ? "bg-secondary text-white" : "bg-white"
        }`}
      onClick={() => onClick(id)}
    >
      {/* Accordion Button */}
      <div
        className="w-full flex justify-between items-center gap-4 p-4 text-left displayPara font-semibold"

      >
        <div className={`flex gap-6 ${isOpen ? "items-start" : "items-center"}`}>
          <span className="display3">{number}</span>
          <div className="">
            {/* Accordion Content */}
            <span>{title}</span>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out transform ${isOpen
                ? "scale-100 opacity-100 max-h-screen pt-4"
                : "scale-50 opacity-0 max-h-0 p-0"
                }`}
            >
              <Paragraph blackText1={content} className={`!mb-0`} />
            </div>
          </div>
        </div>
        <span className={`w-10 h-10 flex items-center justify-center ${isOpen ? "bg-white" : "bg-[#404040]"
          }`}>
          <Icon
            icon="mynaui:arrow-up-right"
            width="1.5rem"
            height="1.5rem"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-[#404040]" : "rotate-0 text-white"
              }`}
          />
        </span>
      </div>


    </div>
  );
};
