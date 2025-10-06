// "use client";
// import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
// import { Icon } from "@iconify/react";
// import { useContext } from "react";

// export default function MultilineInput({
//   label,
//   icon,
//   error,
//   helperText,
//   tooltip,
//   disabled,
//   placeholder = " ",
//   maxLength,
//   rows = 2,
//   id,
//   ...props
// }) {
//   const inputId = id || `textarea-${Math.random().toString(36)}`;

//   const { locale } = useContext(LanguageContext);
//   const isRTL = locale === "ar";

//   return (
//     <div>
//       <div className="w-full relative group">
//         {/* Input Container */}
//         <div
//           className={`relative border-b ${
//             error ? "border-red-500" : "border-gray-dark"
//           } focus-within:border-primary transition-all`}>
//           {/* Icon */}
//           {icon && (
//             <div className="absolute top-3 left-0 flex items-start pointer-events-none">
//               <Icon
//                 icon={icon}
//                 className={`h-5 w-5 ${
//                   error ? "text-red-500" : "text-gray-400"
//                 } group-focus-within:text-primary`}
//               />
//             </div>
//           )}

//           {/* Textarea */}
//           <textarea
//             id={inputId}
//             {...props}
//             disabled={disabled}
//             placeholder={placeholder}
//             maxLength={maxLength}
//             rows={rows}
//             className={`text-gray-dark w-full py-1 text-sm focus:outline-none peer resize-none ${
//               icon ? "pl-10" : "pl-2"
//             } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
//           />

//           {/* Label */}
//           <label
//             htmlFor={inputId}
//             className={`text-sm absolute left-0 text-gray-light cursor-text truncate max-w-[calc(100%-18px)] float-labels ${
//               isRTL
//                 ? icon
//                   ? "right-10"
//                   : "right-0"
//                 : icon
//                 ? "left-10"
//                 : "left-0"
//             } ${
//               error ? "text-red-500" : "peer-focus:text-primary"
//             } peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-xs peer-focus:left-0 peer-focus:-top-5 -top-5 text-xs`}>
//             {label}
//           </label>

//           {/* Tooltip */}
//           {tooltip && (
//             <div className="absolute top-3 right-2 flex items-center">
//               <div className="relative group/tooltip">
//                 <Icon
//                   icon={"mdi:information"}
//                   className="h-4 w-4 text-gray-400 cursor-pointer"
//                 />
//                 <div className="absolute bottom-full right-0 mb-1 w-max rounded-md bg-gray-800 text-white text-xs py-1 px-2 hidden group-hover/tooltip:block">
//                   {tooltip}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="flex items-center justify-between">
//           {/* Helper Text */}
//           {helperText && !error && (
//             <div className="text-[10px] text-gray-500 mt-1">{helperText}</div>
//           )}
//           {error && (
//             <div className="text-[10px] text-red-500 mt-1">{error}</div>
//           )}
//           {/* Character Counter
//           {maxLength && (
//             <div
//               className={`ml-auto text-xs ${
//                 charCount > maxLength ? "text-red-500" : "text-gray-400"
//               }`}
//             >
//               {charCount}/{maxLength}
//             </div>
//           )} */}
//         </div>

//         {/* Error Message */}
//       </div>
//     </div>
//   );
// }

"use client";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { Icon } from "@iconify/react";
import { useContext } from "react";

export default function MultilineInput({
  label,
  icon,
  error,
  helperText,
  tooltip,
  disabled,
  placeholder = " ",
  maxLength,
  rows = 2,
  id,
  is_Modal = false, // 👈 added prop
  ...props
}) {
  const inputId = id || `textarea-${Math.random().toString(36)}`;

  const { locale } = useContext(LanguageContext);
  const isRTL = locale === "ar";

  // 🧠 Dynamic color logic
  const borderColor = is_Modal
    ? "border-white"
    : error
    ? "border-red-500"
    : "border-gray-dark";

  const iconColor = is_Modal
    ? "text-white"
    : error
    ? "text-red-500"
    : "text-gray-400";

  const labelColor = is_Modal
    ? "text-white"
    : error
    ? "text-red-500"
    : "peer-focus:text-primary";

  const errorTextColor = is_Modal ? "text-white" : "text-red-500";

  const textColor = is_Modal ? "text-white" : "text-gray-dark";

  return (
    <div>
      <div className="w-full relative group">
        {/* Input Container */}
        <div
          className={`relative border-b ${borderColor} focus-within:${
            is_Modal ? "border-white" : "border-primary"
          } transition-all`}>
          {/* Icon */}
          {icon && (
            <div className="absolute top-3 left-0 flex items-start pointer-events-none">
              <Icon
                icon={icon}
                className={`h-5 w-5 ${iconColor} group-focus-within:${
                  is_Modal ? "text-white" : "text-primary"
                }`}
              />
            </div>
          )}

          {/* Textarea */}
          <textarea
            id={inputId}
            {...props}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={maxLength}
            rows={rows}
            className={`${textColor} w-full py-1 text-sm focus:outline-none peer resize-none bg-transparent ${
              icon ? "pl-10" : "pl-2"
            } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          />

          {/* Label */}
          <label
            htmlFor={inputId}
            className={`text-sm absolute text-gray-light cursor-text truncate max-w-[calc(100%-18px)] float-labels
              ${
                isRTL
                  ? icon
                    ? "right-10"
                    : "right-0"
                  : icon
                  ? "left-10"
                  : "left-0"
              }
              ${labelColor}
              peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:text-xs peer-focus:-top-5 -top-5 text-xs`}>
            {label}
          </label>

          {/* Tooltip */}
          {tooltip && (
            <div className="absolute top-3 right-2 flex items-center">
              <div className="relative group/tooltip">
                <Icon
                  icon={"mdi:information"}
                  className={`h-4 w-4 ${
                    is_Modal ? "text-white" : "text-gray-400"
                  } cursor-pointer`}
                />
                <div
                  className={`absolute bottom-full right-0 mb-1 w-max rounded-md ${
                    is_Modal ? "bg-white text-black" : "bg-gray-800 text-white"
                  } text-xs py-1 px-2 hidden group-hover/tooltip:block`}>
                  {tooltip}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Helper / Error */}
        <div className="flex items-center justify-between">
          {helperText && !error && (
            <div
              className={`text-[10px] mt-1 ${
                is_Modal ? "text-white/80" : "text-gray-500"
              }`}>
              {helperText}
            </div>
          )}
          {error && (
            <div className={`text-[10px] mt-1 ${errorTextColor}`}>{error}</div>
          )}
        </div>
      </div>
    </div>
  );
}
