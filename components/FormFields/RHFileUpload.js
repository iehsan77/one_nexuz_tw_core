// import React from 'react'

// const RHFileUpload = () => {
//   return (
//     <div>
//       RHFileUpload
//     </div>
//   )
// }

// export default RHFileUpload

"use client";
import { Icon } from "@iconify/react";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function RHFileUpload({
  label,
  icon = "mdi:image-plus",
  error,
  helperText,
  tooltip,
  disabled,
  value = null,
  onChange,
  maxSize = 10 * 1024 * 1024,
  setError,
  name,
  accept = "image/*",
  id,
  isHide,
  onRemove,
  ...props
}) {
  const [file, setFile] = useState(value);
  const fileInputRef = useRef();
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    if (value instanceof File) {
      setFile(value);
    } else if (typeof value === "string" && value) {
      setFile(value);
    } else {
      setFile(null);
    }
  
    // return () => {
    //   if (file instanceof File) {
    //     URL.revokeObjectURL(file);
    //   }
    // };
  }, [value]);

  // useEffect(() => {
  //   if (value !== file) {
  //     setFile(value);
  //   }
  // }, [value]);

  const clearError = () => {
    if (setError && name) setError(name, { message: "" });
  };

  const validateFile = async (file) => {
    clearError();

    if (!file.type.startsWith("image/")) {
      const msg = "Only image files are allowed";
      setError?.(name, msg);
      return { valid: false, error: msg };
    }

    if (file.size > maxSize) {
      const msg = `Max file size is ${Math.round(maxSize / 1024 / 1024)}MB`;
      setError?.(name, msg);
      return { valid: false, error: msg };
    }

    return { valid: true };
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const selected = e.target.files?.[0];
    if (!selected) return;

    const { valid } = await validateFile(selected);
    if (!valid) return;

    setFile(selected);
    onChange?.(selected);

    // ✅ Reset input to allow re-uploading same file
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files?.[0];
    if (!droppedFile) return;
    const { valid } = await validateFile(droppedFile);
    if (!valid) return;

    setFile(droppedFile);
    onChange?.(droppedFile);
  };

  const handleRemove = () => {
    setFile(null);

    // ✅ Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }

    onChange?.("");
    onRemove?.("");
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label
          className={`block text-sm mb-1 ${
            error ? "text-red-500" : "text-gray-dark"
          }`}
        >
          {label}
        </label>
      )}

      <div className="grid gap-3 grid-cols-1">
        {file ? (
          <div className="relative group w-full h-44">
            <div className="flex items-center justify-center w-full h-full p-5 rounded-lg border-2 border-dashed border-primary overflow-hidden">
              <Image
                src={
                  typeof file === "string" ? file : URL.createObjectURL(file)
                }
                alt="preview"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className={`absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ${
                isHide ? "hidden" : "block"
              }`}
              disabled={disabled}
            >
              <Icon icon="mdi:close" className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div
            onClick={() => !disabled && fileInputRef.current.click()}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className={`w-full h-44 flex flex-col items-center justify-center border-2 border-dashed border-primary rounded-lg cursor-pointer ${
              disabled
                ? "opacity-50 cursor-not-allowed"
                : dragActive
                ? "border-blue-400 bg-blue-50"
                : "hover:border-gray-400"
            } transition-all border-gray-300 gap-2`}
          >
            {/* <Upload className="text-gray-400" /> */}
            <span className="text-base text-gray-500">
              <span className="text-primary">Choose a file {` `}</span>
              {dragActive ? "Drop file here" : "or drop it here"}
            </span>
            {/* <span className="text-xs text-gray-500">
              Max size: {maxSize / 1024 / 1024}mb
            </span> */}
            <span className="text-sm text-gray-500">
              {maxSize / 1024 / 1024}MB Size Limit
            </span>
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        disabled={disabled}
        {...props}
      />

      {helperText && !error && (
        <div className="text-xs text-gray-500 mt-1">{helperText}</div>
      )}
      {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
      {tooltip && (
        <div className="flex items-center mt-1 text-gray-400">
          <Icon icon="mdi:information" className="h-3 w-3 mr-1" />
          <span className="text-xs">{tooltip}</span>
        </div>
      )}
    </div>
  );
}