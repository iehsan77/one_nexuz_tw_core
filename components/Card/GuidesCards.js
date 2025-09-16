import Image from "next/image"; // Use this if you're using Next.js built-in Image
import Heading5 from "../Typography/Heading5";
import Paragraph from "../Typography/Paragraph";
import { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { btnTextAr, btnTextEn } from "@/mockData/dummyData";
import Heading6 from "../Typography/Heading6";
import { RightSideSVG } from "@/public/assets/icons/SVGIcons";

export default function GuidesCards({ title, description, imageURL, link, label }) {
  const { locale } = useContext(LanguageContext);
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;
  return (
    <>
      <div className="relative w-full rounded-2xl border border-gray-300 bg-white">
        <div className="aspect-[302/250] rounded-xl overflow-hidden">
          <Image
            src={imageURL}
            alt="Review illustration"
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="">
          <div className="sm:px-6 px-4 py-4">
            {label && (
              <Paragraph blackText1={label} className={`!mb-1`} />
            )}
            <Heading6 blackHeading={title} className={`line-clamp-1 !mb-1`} />
            {description && (
              <Paragraph blackText1={description} className={`line-clamp-1 !mb-1`} />
            )}
            {link && (
              <a
                href={"/guide"}
                variant={`txt`}
                className="!text-black flex items-center"
              >
                {btnText.read_more}
                <RightSideSVG />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
