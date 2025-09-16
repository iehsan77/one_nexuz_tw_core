import Image from "next/image";
import React from "react";
import Paragraph from "../Typography/Paragraph";
import { CallSVG, EmailSVG, INSVG, ShareSVG } from "@/public/assets/icons/SVGIcons";
import Link from "../Link/Link";
import { contactDetail } from "@/mockData/dummyData";
import Heading5 from "../Typography/Heading5";

const ExpertAgentsCards = ({
  title,
  imageURL,
  userName,
  role,
  designation,
}) => {
  return (
    <>
      <div className="border border-gray-300 rounded-xl">
        <div className="bg-[url(/assets/icons/frame2147224836.svg)]">
          <Image
            src={imageURL}
            alt="Mayfair Logo"
            width={292}
            height={292}
            className={`w-full h-auto`}
          />
        </div>
        <div className='p-4'>
          <div className="flex items-start justify-between">
            <Heading5
              className="!pb-0 !mb-0"
              heading={userName}
            />
            <Paragraph blackText1={role} className="!pb-0 !font-semibold !mb-0" />
          </div>
          <Paragraph blackText1={designation} className="!font-semibold" />
          <div className="flex items-center xs:gap-2 gap-1 pt-2">
            <div className="grow">
              <Link href={`tel:${contactDetail.telNumber} `}
                variant={`primary`}
                className={`!border-none !rounded-sm sm:!px-2 !px-2`}>
                <span className="font-[400] flex items-center gap-1 text-white">
                  <CallSVG />
                  Call Now
                </span>
              </Link>
            </div>
            <div className="grow">
              <Link
                href={`#`}
                variant={`primary`}
                onClick={() =>
                  getData({
                    id,
                    front_image,
                    city,
                    price,
                    beds,
                    baths,
                    land_area,
                    area_unit_txt,
                    title,
                    address,
                    active,
                    isEmail: true
                  })
                }
                className="!border-none !rounded-sm sm:!px-2 !px-2`}"
              >
                <span className="font-[400] flex items-center gap-1 text-white">
                  <EmailSVG />
                  Email
                </span>
              </Link>
            </div>
            <div className="grow">
              <Link href={`/`}
                variant={`primary`}
                className={`!border-none !rounded-sm tansition duration-300 sm:!px-2 !px-2`}
              >
                <span className="font-[400] flex items-center gap-1 text-white">
                  <ShareSVG />
                  Share
                </span>
              </Link>
            </div>
            <div className="">
              <Link href={`https://linkedin.com/`}
                className={`!border-none !rounded-sm sm:!px-2.5 !px-2`}
                variant={`primary`}
              >
                <span className="font-[400] flex items-center gap-1 text-white">
                  <INSVG />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertAgentsCards;
