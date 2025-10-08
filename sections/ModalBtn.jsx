"use client";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { useModal } from "@/context/commonModalProvider";
import { Icon } from "@iconify/react";
import { useContext } from "react";
import CommonForm from "./Forms/CommonForm";
import Image from "@/components/Image/Image";

function ModalBtn({ text, className, calendar, icon, variant = "primary" }) {
  const { showModal } = useModal();
  const { locale } = useContext(LanguageContext);
  const ar = locale === "ar";

  const openModal = () => {
    showModal({
      className: "!bg-secondary",
      size: "sm",
      children: <CommonForm />,
    });
  };

  return (
    <button
      onClick={openModal}
      className={`${className} text-base flex font-medium items-center gap-1  text-nowrap cursor-pointer transition-colors 
      ${
        variant === "primary"
          ? "px-0 h-fit w-fit py-1 text-white border-b-2"
          : variant === "solid"
          ? "px-4 py-2 rounded-md text-white bg-primary hover:bg-primary/80"
          : ""
      }`}>
      {calendar && (
        <Image src="/icons/calendar.svg" alt="icon" width={24} height={24} />
      )}
      {text}
      {variant === "primary" && !icon && (
        <Icon
          icon={ar ? "uil:angle-left" : "uil:angle-right"}
          width="26"
          height="26"
          className={ar ? "-ml-1" : "-mr-1"}
        />
      )}
    </button>
  );
}

export default ModalBtn;
