import Image from "next/image"; // Use this if you're using Next.js built-in Image
import Paragraph from "../Typography/Paragraph";
import { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { btnTextAr, btnTextEn } from "@/mockData/dummyData";
import Heading6 from "../Typography/Heading6";
import Link from "../Link/Link";
import Heading4 from "../Typography/Heading4";

export default function CareerCards({
  title,
  description,
  label,
}) {
  const { locale } = useContext(LanguageContext);
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;
  return (
    <>
      <div className="pt-6">
      <div className="relative w-full rounded-2xl bg-[#FFF9F9] border border-gray-300 ">
        <div className="sm:px-6 px-4 py-4">
          <div className="flex justify-between pb-6">
            <Image
              src={`/assets/icons/badgelogo.svg`}
              alt="Review illustration"
              width={160}
              height={80}
              className=""
            />
            <Image
              src={`/assets/icons/badge.svg`}
              alt="Review illustration"
              width={50}
              height={50}
              className=""
            />
          </div>
          {label && <Paragraph blackText1={label} className={`!mb-1`} />}
          <Heading4 blackHeading={`Showroom Sales Executive`} className={`line-clamp-1 !mb-1`} />
          <Paragraph
            blackText1={`Engage with walk-in customers, explain vehicle features, and close sales with professionalism and enthusiasm.`}
            className={`line-clamp-2 !mb-1`}
          />
          <div className="pt-8">
            <div className="flex gap-2">
              <div>
                <Link
                  href="#"
                  variant={`black`}
                  className="!text-white inline-flex items-center"
                >
                  {'Logistics'}
                </Link>
              </div>
              <div>
                <Link
                  href="#"
                  variant={`black`}
                  className="!text-white inline-flex items-center"
                >
                  {'Customer satisfaction'}
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="flex justify-between">
              <div className="">
                <Heading6
                  blackHeading={`$12,000/month`}
                  className={`line-clamp-1 !mb-1`}
                />
                <Paragraph
                  blackText1={`Los Angeles`}
                  className={`line-clamp-1 !mb-1`}
                />
              </div>
              <div>
                <Link
                  href="/career/career-form"
                  variant={`primary`}
                  className="!text-white inline-flex items-center"
                >
                  {btnText.apply_now}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
