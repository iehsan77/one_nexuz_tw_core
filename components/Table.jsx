import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Table({ data, width }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={data?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}>
          <div className="max-h-[550px] overflow-y-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-primaryLight sticky top-0 z-10">
                <tr>
                  {data?.columns?.map((col, idx) => (
                    <th
                      key={idx}
                      className="text-start p-4 font-medium text-gray border-b border-gray-200 bg-primaryLight">
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data?.row?.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-50 transition-colors">
                    {data?.columns?.map((col, colIndex) => (
                      <td
                        key={colIndex}
                        // className="text-start px-4 py-3 font-medium border-b border-gray-200 text-gray">
                        className={`${
                          width
                            ? "first:min-w-[150px] md:first:w-auto even:min-w-[150px] even:last:w-auto last:min-w-[400px] md:last:w-auto "
                            : "min-w-[150px]"
                        } text-start px-4 py-3 font-medium border-b border-gray-200 text-gray`}>
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
  );
}

export default Table;
