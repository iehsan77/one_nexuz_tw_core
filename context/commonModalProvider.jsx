"use client";

import CommonModal from "@/components/CommonModal";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const CommonModalProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    header: null,
    size: "md",
    hasOverlay: true,
    withCloseButton: true,
    className: "",
    children: null,
    footer: null,
  });

  const showModal = (config) => {
    setModalConfig((prev) => ({
      ...prev,
      ...config,
      isOpen: true,
    }));
  };

  const hideModal = () => {
    setModalConfig((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  return (
    <ModalContext.Provider
      value={{ showModal, hideModal, isSubmitting, setIsSubmitting }}>
      {children}
      <CommonModal
        {...modalConfig}
        onClose={hideModal}
        isSubmitting={isSubmitting}
      />
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
