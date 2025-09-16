"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function CarImageGallery({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (data?.length) {
      const middleIndex = Math.floor(data.length / 2);
      setActiveIndex(data[middleIndex].id);
    }
  }, [data]);

  return (
    <div className="secPadding">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 overflow-x-auto no-scrollbar">
          {data?.map((src) => (
            <div
              key={src?.id}
              className={`relative transition-all duration-300 rounded-md overflow-hidden flex-shrink-0 cursor-pointer border
                ${
                  src?.id === activeIndex
                    ? "2xl:w-[920px] xl:w-[720px] lg:w-[520px] w-full lg:!h-[500px] h-[320px]"
                    : "xl:w-[120px] lg:w-[100px] w-full lg:!h-[500px] h-[80px]"
                }`}
              onClick={() => setActiveIndex(src?.id)}>
              <Image
                src={src?.media_url}
                alt={`Car image ${src?.id + 1}`}
                width={800}
                height={600}
                className="absolute object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
