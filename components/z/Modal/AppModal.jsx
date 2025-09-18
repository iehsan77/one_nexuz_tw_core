"use client";
import React from "react";

const AppModal = ({ title, className, isOpen, setIsOpen, children }) => {
  const handleModal = () => setIsOpen(true);
  return (
    <>
      {/* <button onClick={handleModal} className={className}>
        {title}
      </button> */}
      {isOpen && (
        <div className={"absolute top-0 z-[9999] w-full h-full "}>
          <div
            onClick={() => setIsOpen(false)}
            className={"fixed top-0 left-0 bottom-0 right-0 bg-gray-900/50"}
          ></div>
          <div className="relative">
            <div
              className={`px-4 pb-6 sm:pt-6 pt-16 bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] xl:w-[70%] md:w-[80%] sm:w-[80%] w-[96%] rounded-2xl overflow-hidden xl:h-[70%] md:h-[80%] h-[85%] md:overflow-y-auto overflow-y-scroll transition-all ease-in-out duration-300 ${className}`}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AppModal;
