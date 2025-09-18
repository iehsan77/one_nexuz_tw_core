import Image from "next/image";
import React from "react";
import Paragraph from "../Typography/Paragraph";
import { FacebookSVG, InstagramSVG, LinkedinSVG, XSVG } from "@/public/assets/icons/SVGIcons";
import Link from "../Link/Link";
import { contactDetail } from "@/mockData/dummyData";
import Heading5 from "../Typography/Heading5";

const ExpertAgentsCards = ({
  imageURL,
  userName,
  role,
}) => {
  return (
    <>
      <div className="border border-gray-300 bg-white rounded-xl">
        <div className="relative">
          <Image
            src={imageURL}
            alt="Logo"
            width={292}
            height={292}
            className={`w-full h-auto`}
          />
          <Image
            src={`/assets/icons/frame2147224836.svg`}
            alt="Logo"
            width={292}
            height={292}
            className={`w-full h-auto absolute bottom-0`}
          />
        </div>
        <div className='p-4'>
          <div className="text-center">
            <Heading5
              className="!pb-0 !mb-0"
              heading={userName}
            />
            <Paragraph blackText1={role} className="!pb-0 !font-semibold !mb-0" />
          </div>
          <div className="flex items-center justify-center xs:gap-2 gap-1 pt-2">
            <Link href={`tel:${contactDetail.telNumber} `}
              variant={`txt`}
              className={``}>
              <span className="font-[400] flex items-center gap-1 text-white">
                <FacebookSVG />
              </span>
            </Link>
            <Link href={`tel:${contactDetail.telNumber} `}
              variant={`txt`}
              className={``}>
              <span className="font-[400] flex items-center gap-1 text-white">
                <LinkedinSVG />
              </span>
            </Link>
            <Link href={`tel:${contactDetail.telNumber} `}
              variant={`txt`}
              className={``}>
              <span className="font-[400] flex items-center gap-1 text-white">
                <XSVG />
              </span>
            </Link>
            <Link href={`tel:${contactDetail.telNumber} `}
              variant={`txt`}
              className={``}>
              <span className="font-[400] flex items-center gap-1 text-white">
                <InstagramSVG />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertAgentsCards;
