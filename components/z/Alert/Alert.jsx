import React, { useState } from "react";
import { Icon } from "@iconify/react";

const Alert = ({ type, message, onClose }) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const typeStyles = {
    success: "bg-green-100 border-green-500 text-green-700",
    error: "bg-red-100 border-red-500 text-red-700",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
    info: "bg-blue-100 border-blue-500 text-blue-700",
  };

  return (
    <div
      className={`flex items-center p-3 border-l-4 ${typeStyles[type]} rounded-md shadow-md mb-4`}
    >
      <Icon icon={`mdi:${type}-circle-outline`} className="w-6 h-6 mr-2" />
      <span className="flex-grow displayAnchor">{message}</span>
      <button
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
        className="text-lg"
      >
        <Icon icon="mdi:close" className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Alert;
