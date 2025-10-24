"use client";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import Typography from "@/components/ui/Typography";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";

const Table = ({ data = [] }) => {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const tableData = locale === "ar" ? data?.ar : data?.en;
  const [activeData, setActiveData] = useState(tableData?.[0]);
  const splideRef = useRef(null);

  const options = {
    type: "slide",
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: false,
    mediaQuery: "min",
    gap: "10px",
    mediaQuery: "min",
    breakpoints: {
      1280: { perPage: 4 },
      1024: { perPage: 3 },
      768: { perPage: 4 },
      640: { perPage: 3 },
      480: { perPage: 2 },
    },
  };

  return (
    <section className="secPadding space-y-6">
      {/* heading */}
      <div className="space-y-3">
        <Typography size="3xl" weight="bold" as="p">
          {arabic ? data?.titleAr : data?.titleEn}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {arabic ? data?.descriptionAr : data?.descriptionEn}
        </Typography>
      </div>

      {/* tabs */}
      <div className="space-y-4">
        <UniversalSplide ref={splideRef} hasTrack={false} options={options}>
          <SplideTrack className="!px-0">
            {tableData?.map((tab) => (
              <SplideSlide key={tab?.id}>
                <button
                  onClick={() => setActiveData(tab)}
                  className={`${
                    activeData?.id === tab?.id
                      ? "bg-primary text-white border-primary py-[7.5px]"
                      : "bg-white border-gray py-[12.8px]"
                  } flex items-center justify-center gap-2 px-3 cursor-pointer w-full text-sm whitespace-nowrap rounded-lg border transition-all duration-300`}>
                  {tab?.title}
                  {activeData?.id === tab?.id && (
                    <div className="!h-full p-1.5 bg-secondary text-white flex items-center rounded-lg justify-center">
                      <Icon
                        icon={locale === "ar" ? "ep:top-left" : "ep:top-right"}
                        width="19"
                        height="19"
                      />
                    </div>
                  )}
                </button>
              </SplideSlide>
            ))}
          </SplideTrack>
        </UniversalSplide>

        {/* ✅ Arrow Buttons - fully functional */}
        <div className=" w-full flex justify-between px-2">
          <button
            onClick={() => splideRef.current?.splide?.go("<")}
            className="cursor-pointer text-primary transition">
            <Icon icon="solar:arrow-left-outline" width="24" height="24" />
          </button>

          <button
            onClick={() => splideRef.current?.splide?.go(">")}
            className="cursor-pointer text-primary transition">
            <Icon icon="solar:arrow-right-outline" width="24" height="24" />
          </button>
        </div>
      </div>

      <Typography as="p" weight="bold" size="lg">
        {activeData?.description}
      </Typography>

      {/* table with animation + sticky header */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeData?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}>
            <div className="max-h-[550px] overflow-y-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-primaryLight sticky top-0 z-10">
                  <tr>
                    {activeData?.columns?.map((col, idx) => (
                      <th
                        key={idx}
                        className="text-start p-4 font-medium text-gray border-b border-gray-200 bg-primaryLight">
                        {col.title}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {activeData?.row?.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="hover:bg-gray-50 transition-colors">
                      {activeData?.columns?.map((col, colIndex) => (
                        <td
                          key={colIndex}
                          className="first:min-w-[150px] md:first:w-auto even:min-w-[150px] even:last:w-auto last:min-w-[400px] md:last:w-auto text-start px-4 py-3 font-medium border-b border-gray-200 text-gray">
                          {row[col.accessKey]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Table;

// "use client";
// import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
// import Typography from "@/components/ui/Typography";
// import { Icon } from "@iconify/react";
// import { motion, AnimatePresence } from "framer-motion";
// import React, { useContext, useState } from "react";

// const Table = ({ data = [] }) => {
//   const { locale } = useContext(LanguageContext);
//   const arabic = locale === "ar";
//   const tableData = locale === "ar" ? data?.ar : data?.en;
//   const [activeData, setActiveData] = useState(tableData?.[0]);

//   return (
//     <section className="secPadding space-y-6">
//       {/* heading */}
//       <div className="space-y-3">
//         <Typography size="3xl" weight="bold" as="p">
//           {arabic ? data?.titleAr : data?.titleEn}
//         </Typography>
//         <Typography size="base" weight="normal" as="p">
//           {arabic ? data?.descriptionAr : data?.descriptionEn}
//         </Typography>
//       </div>

//       {/* tabs */}
//       <div className="flex items-center gap-4 overflow-x-auto pb-2">
//         {tableData?.map((tab) => (
//           <button
//             key={tab?.id}
//             onClick={() => setActiveData(tab)}
//             className={`${
//               activeData?.id === tab?.id
//                 ? "bg-primary text-white border-primary py-[7.5px]"
//                 : "bg-white border-gray py-[12.8px]"
//             } flex items-center gap-2 px-3 cursor-pointer text-sm text-nowrap rounded-lg border transition-all duration-300`}>
//             {tab?.title}
//             {activeData?.id === tab?.id && (
//               <div className="!h-full p-1.5 bg-secondary text-white flex items-center rounded-lg justify-center">
//                 <Icon
//                   icon={locale === "ar" ? "ep:top-left" : "ep:top-right"}
//                   width="19"
//                   height="19"
//                 />
//               </div>
//             )}
//           </button>
//         ))}
//       </div>

//       <Typography as="p" weight="bold" size="lg">
//         {activeData?.description}
//       </Typography>

//       {/* table with animation + sticky header */}
//       <div className="overflow-x-auto border border-gray-200 rounded-lg">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeData?.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}>
//             <div className="max-h-[550px] overflow-y-auto">
//               <table className="w-full border-collapse text-left text-sm">
//                 <thead className="bg-primaryLight sticky top-0 z-10">
//                   <tr>
//                     {activeData?.columns?.map((col, idx) => (
//                       <th
//                         key={idx}
//                         className="text-start p-4 font-medium text-gray border-b border-gray-200 bg-primaryLight">
//                         {col.title}
//                       </th>
//                     ))}
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {activeData?.row?.map((row, rowIndex) => (
//                     <tr
//                       key={rowIndex}
//                       className="hover:bg-gray-50 transition-colors">
//                       {activeData?.columns?.map((col, colIndex) => (
//                         <td
//                           key={colIndex}
//                           className="first:min-w-[150px] md:first:w-auto even:min-w-[150px] even:last:w-auto last:min-w-[400px] md:last:w-auto text-start px-4 py-3 font-medium border-b border-gray-200 text-gray">
//                           {row[col.accessKey]}
//                         </td>
//                       ))}
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default Table;
