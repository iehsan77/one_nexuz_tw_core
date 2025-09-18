// "use client";
// import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
// import { Icon } from "@iconify/react";
// import React, { useState, useMemo, useContext, useEffect } from "react";

// const Pagination = ({ count, handlePageNumber, pageNumber }) => {
//   const { locale } = useContext(LanguageContext);
//   const [activePage, setActivePage] = useState(pageNumber);
//   const itemsPerPage = 5;
//   const totalPages = Math.ceil(count / 12);

//   useEffect(() => {
//     setActivePage(pageNumber);
//   }, [pageNumber]);

//   const { startPage, endPage } = useMemo(() => {
//     let startPage, endPage;

//     if (totalPages <= itemsPerPage) {
//       startPage = 1;
//       endPage = totalPages;
//     } else {
//       const halfItems = Math.floor(itemsPerPage / 2);

//       if (activePage <= halfItems) {
//         startPage = 1;
//         endPage = itemsPerPage;
//       } else if (activePage + halfItems >= totalPages) {
//         startPage = totalPages - itemsPerPage + 1;
//         endPage = totalPages;
//       } else {
//         startPage = activePage - halfItems;
//         endPage = activePage + halfItems;
//       }
//     }

//     return { startPage, endPage };
//   }, [activePage, totalPages, itemsPerPage]);

//   const setPageNumber = (item) => {
//     if (item <= totalPages && item > 0) {
//       setActivePage(item);
//       handlePageNumber(item);
//       if (typeof window !== "undefined") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     }
//   };

//   const handleNext = () => {
//     if (activePage < totalPages) {
//       setPageNumber(activePage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (activePage > 1) {
//       setPageNumber(activePage - 1);
//     }
//   };

//   const handleFirst = () => {
//     setPageNumber(1);
//   };

//   const handleLast = () => {
//     setPageNumber(totalPages);
//   };

//   const pageNumbers = useMemo(() => {
//     return Array.from(
//       { length: endPage - startPage + 1 },
//       (_, index) => startPage + index
//     );
//   }, [startPage, endPage]);

//   if (totalPages <= 1) return null; // Don't show pagination if only one page

//   return (
//     <div
//       className="flex items-center gap-2 sm:gap-5 justify-center mt-4"
//       dir="ltr">
//       <span className="text-black font-medium">
//         {locale === "ar" ? "عرض النتائج" : "Show Result"}
//       </span>

//       {/* First Page Button */}
//       {startPage > 1 && (
//         <div
//           onClick={handleFirst}
//           className="flex items-center cursor-pointer text-gray-400 hover:text-primary">
//           <Icon icon="ant-design:double-left-outlined" height={20} width={20} />
//         </div>
//       )}

//       {/* Previous Button */}
//       <div
//         onClick={handlePrevious}
//         className={`${
//           activePage === 1
//             ? "text-gray-400/30 cursor-default"
//             : "text-gray-400 cursor-pointer hover:text-primary"
//         } flex items-center sm:gap-2`}>
//         <Icon icon="ant-design:left-outlined" height={20} width={20} />
//       </div>

//       {/* Page Numbers */}
//       <div className="flex gap-2 sm:gap-5 items-center">
//         {pageNumbers.map((item) => (
//           <button
//             onClick={() => setPageNumber(item)}
//             className={`${
//               activePage === item
//                 ? "bg-primary text-white"
//                 : "text-gray-400 hover:bg-gray-100"
//             } cursor-pointer rounded-full py-1 px-3 transition-all duration-300`}
//             key={item}>
//             {item}
//           </button>
//         ))}
//       </div>

//       {/* Next Button */}
//       <div
//         onClick={handleNext}
//         className={`${
//           activePage === totalPages
//             ? "text-gray-400/30 cursor-default"
//             : "text-gray-400 cursor-pointer hover:text-primary"
//         } flex items-center sm:gap-2`}>
//         <Icon icon="ant-design:right-outlined" height={20} width={20} />
//       </div>

//       {/* Last Page Button */}
//       {endPage < totalPages && (
//         <div
//           onClick={handleLast}
//           className="flex items-center cursor-pointer text-gray-400 hover:text-primary">
//           <Icon
//             icon="ant-design:double-right-outlined"
//             height={20}
//             width={20}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pagination;

"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { Icon } from "@iconify/react";
import React, {
  useState,
  useMemo,
  useContext,
  useEffect,
  useCallback,
} from "react";

const Pagination = ({ count, itemsPerPage, handlePageNumber, pageNumber }) => {
  const { locale } = useContext(LanguageContext);
  const [activePage, setActivePage] = useState(pageNumber);
  const paginationButtonsToShow = 5; // Number of page buttons visible at once
  const totalPages = Math.ceil(count / itemsPerPage);

  // Memoize pagination range calculation
  const { startPage, endPage } = useMemo(() => {
    if (totalPages <= paginationButtonsToShow) {
      return { startPage: 1, endPage: totalPages };
    }

    const halfItems = Math.floor(paginationButtonsToShow / 2);

    if (activePage <= halfItems) {
      return { startPage: 1, endPage: paginationButtonsToShow };
    }

    if (activePage + halfItems >= totalPages) {
      return {
        startPage: totalPages - paginationButtonsToShow + 1,
        endPage: totalPages,
      };
    }

    return {
      startPage: activePage - halfItems,
      endPage: activePage + halfItems,
    };
  }, [activePage, totalPages, paginationButtonsToShow]);

  // Memoize page numbers array
  const pageNumbers = useMemo(() => {
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  }, [startPage, endPage]);

  // Wrap page change handler in useCallback
  const setPageNumber = useCallback(
    (item) => {
      if (item <= totalPages && item > 0) {
        setActivePage(item);
        handlePageNumber(item);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    },
    [totalPages, handlePageNumber]
  );

  // Memoize navigation handlers
  const handleNext = useCallback(() => {
    if (activePage < totalPages) setPageNumber(activePage + 1);
  }, [activePage, totalPages, setPageNumber]);

  const handlePrevious = useCallback(() => {
    if (activePage > 1) setPageNumber(activePage - 1);
  }, [activePage, setPageNumber]);

  const handleFirst = useCallback(() => setPageNumber(1), [setPageNumber]);
  const handleLast = useCallback(
    () => setPageNumber(totalPages),
    [totalPages, setPageNumber]
  );

  // Sync with parent component's pageNumber
  useEffect(() => {
    setActivePage(pageNumber);
  }, [pageNumber]);

  if (totalPages <= 1) return null;

  return (
    <div
      className="flex items-center gap-2 sm:gap-5 justify-center mt-4"
      dir="ltr">
      <span className="text-black font-medium">
        {locale === "ar" ? "عرض النتائج" : "Show Result"}
      </span>

      {/* First Page Button */}
      {startPage > 1 && (
        <button
          onClick={handleFirst}
          aria-label="First page"
          className="flex items-center cursor-pointer text-gray-400 hover:text-primary">
          <Icon icon="ant-design:double-left-outlined" height={20} width={20} />
        </button>
      )}

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={activePage === 1}
        aria-label="Previous page"
        className={`${
          activePage === 1
            ? "text-gray-400/30 cursor-default"
            : "text-gray-400 cursor-pointer hover:text-primary"
        } flex items-center sm:gap-2`}>
        <Icon icon="ant-design:left-outlined" height={20} width={20} />
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2 sm:gap-5 items-center">
        {pageNumbers.map((item) => (
          <button
            onClick={() => setPageNumber(item)}
            aria-label={`Page ${item}`}
            className={`${
              activePage === item
                ? "bg-primary text-white"
                : "text-gray-400 hover:bg-gray-100"
            } cursor-pointer rounded-full py-1 px-3 transition-all duration-300`}
            key={item}>
            {item}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={activePage === totalPages}
        aria-label="Next page"
        className={`${
          activePage === totalPages
            ? "text-gray-400/30 cursor-default"
            : "text-gray-400 cursor-pointer hover:text-primary"
        } flex items-center sm:gap-2`}>
        <Icon icon="ant-design:right-outlined" height={20} width={20} />
      </button>

      {/* Last Page Button */}
      {endPage < totalPages && (
        <button
          onClick={handleLast}
          aria-label="Last page"
          className="flex items-center cursor-pointer text-gray-400 hover:text-primary">
          <Icon
            icon="ant-design:double-right-outlined"
            height={20}
            width={20}
          />
        </button>
      )}
    </div>
  );
};

export default Pagination;
