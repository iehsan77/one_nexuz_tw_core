"use client";
import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import Typography from "../ui/Typography";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

export function FaqAccordian({ data }) {
  const [openItemId, setOpenItemId] = useState(null);

  const handleItemClick = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className=" space-y-4">
      {data?.map((item) => (
        <AccordionItem
          key={item?.id}
          id={item?.id}
          number={item?.number}
          title={item?.question}
          list={item?.list}
          listTitle={item?.listTitle}
          content={item?.answer}
          isOpen={openItemId === item?.id}
          onClick={handleItemClick}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({
  id,
  title,
  number,
  content,
  isOpen,
  list,
  onClick,
}) => {
  const { locale } = useContext(LanguageContext);
  const ar = locale === "ar";
  return (
    <div
      className={`border border-gray-400 hover:cursor-pointer transition-colors duration-300 ${
        isOpen ? "bg-secondary text-white" : "bg-white"
      }`}
      onClick={() => onClick(id)}>
      {/* Accordion Button */}
      <div
        className={`w-full flex justify-between ${
          isOpen ? "items-start" : "items-center"
        } gap-4 p-4 text-left displayPara font-semibold`}>
        <div
          className={`flex gap-6 ${isOpen ? "items-start" : "items-center"}`}>
          <Typography
            size="3xl"
            weight="bold"
            color={`${isOpen ? "white" : "gray"}`}>
            {number}
          </Typography>
          <div className="">
            {/* Accordion Content */}
            <Typography
              weight="medium"
              color={`${isOpen ? "white" : "gray"}`}
              className="text-start">
              {title}
            </Typography>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
                isOpen
                  ? "scale-100 opacity-100 max-h-screen pt-4"
                  : "scale-50 opacity-0 max-h-0 p-0"
              }`}>
              <Typography color="white" className="text-start">
                {content}
              </Typography>
              {/* List Section */}
              {list?.items?.length > 0 && (
                <div className="space-y-2">
                  {list.listTitle && (
                    <Typography color="white" className="text-start">
                      {list.listTitle}
                    </Typography>
                  )}
                  <ul className="space-y-1">
                    {list.items.map((item, ind) => {
                      const segments = item.split("^");
                      return (
                        <li
                          className={`${
                            ar ? "mr-6" : "ml-6"
                          } list-decimal text-start !font-normal leading-relaxed`}
                          key={ind}>
                          {segments.map((text, index) =>
                            index % 2 === 0 ? (
                              text
                            ) : (
                              <Typography
                                key={index}
                                size="xs"
                                className="text-current">
                                {text}
                              </Typography>
                            )
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <span
          className={`min-w-8 min-h-8 md:min-w-10 md:min-h-10 flex items-center justify-center ${
            isOpen ? "bg-white" : "bg-gray"
          }`}>
          <Icon
            icon={ar ? "mynaui:arrow-up-left" : "mynaui:arrow-up-right"}
            className={`transition-transform duration-300 text-xl md:text-2xl ${
              isOpen ? "rotate-90 text-gray" : "rotate-0 text-white"
            }`}
          />
        </span>
      </div>
    </div>
  );
};
