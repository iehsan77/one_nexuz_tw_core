"use client";
import { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";

const sortingOptions = {
  en: [
    { value: "", label: "Clear" },
    { value: "latest", label: "Latest" },
    { value: "lowToHigh", label: "Low To High" },
    { value: "highToLow", label: "High To Low" },
  ],
  ar: [
    { value: "", label: "مسح" },
    { value: "latest", label: "الأحدث" },
    { value: "lowToHigh", label: "من الأقل إلى الأعلى" },
    { value: "highToLow", label: "من الأعلى إلى الأقل" },
  ],
};

export default function SortingDropdown({ onChange }) {
  const { locale } = useContext(LanguageContext);
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const options = sortingOptions[locale] || sortingOptions.en;

  const handleSelect = (option) => {
    setSelected(option.value ? option : null); // Reset if "Clear" is selected
    setOpen(false);
    onChange?.(option.value); // Will be "" if Clear is selected
  };

  return (
    <div className="relative w-[150px]">
      <button
        className="w-full bg-white flex justify-end gap-1 items-center text-sm m hover:border-gray-400 transition"
        onClick={() => setOpen(!open)}
        type="button">
        <span className={`${!selected ? "text-gray-400" : ""}`}>
          {selected?.label ||
            (locale === "ar" ? "الترتيب الافتراضي" : "Sort by")}
        </span>
        <Icon icon="ic:round-expand-more" className="text-lg" />
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-full max-h-60 overflow-auto text-sm">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                selected?.value === option.value ? "bg-gray-200" : ""
              }`}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
