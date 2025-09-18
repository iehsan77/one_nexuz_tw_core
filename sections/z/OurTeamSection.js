"use client";
import React from 'react'
import Heading2 from '@/components/Typography/Heading2'
import Heading4 from '@/components/Typography/Heading4'
import Paragraph from '@/components/Typography/Paragraph'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import NotFound from '@/components/NotFound/NotFound';
import ExpertAgentsCards from '@/components/Card/ExpertAgentsCards';

const data = [
    {
        imageURL: "/assets/images/image_30.webp",
        userName: "Khalid Al Zayani",
        role: "PRO Services Director",
    },
    {
        imageURL: "/assets/images/image_31.webp",
        userName: "Mohammed Saif",
        role: "Head of Business Setup",
    },
    {
        imageURL: "/assets/images/image_32.webp",
        userName: "Emily Carter",
        role: "Corporate Services Manager",
    },
    {
        imageURL: "/assets/images/image_33.webp",
        userName: "David Reynolds",
        role: "Client Relations Manager",
    },
    

]
const options = {
  type: "loop",
  rewind: true,
  focus: 0,
  omitEnd: true,
  perPage: 1,
  padding: "0.8rem",
  perMove: 1,
  pagination: false,
  gap: "15px",
  autoplay: true,
  arrows: false,
  autoScroll: {
    speed: 0.5,
  },
  mediaQuery: "min",
  breakpoints: {
    768: { perPage: 2 },
    1024: { perPage: 3},
    1280: { perPage: 4},
  },
};

const getData = ({
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
    isShare,
}) => {
    if (isShare) {
        setSharePropertySection({
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
        });
        setEmailAgentData({});
    } else {
        setEmailAgentData({
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
        });
        setSharePropertySection({});
    }
    setIsModalOpen(true);
};


const OurTeamSection = ({ heading, topTitle, paragraph, bottomTitle, }) => {
    return (
        <section className='secSlidePadding bg-primaryLight'>
            <div className='container'>
                <div className='pb-6 max-w-md'>
                    <div className=''>
                        {topTitle && (
                            <Heading4
                                className=""
                                heading={topTitle}
                            />
                        )}
                        <Heading2
                            heading={heading}
                            className="!mb-2"
                        />
                        {bottomTitle && (
                            <Heading4
                                className=""
                                heading={bottomTitle}
                            />
                        )}
                        {paragraph?.map((para, ind) => (
                            <Paragraph
                                key={ind}
                                className=""
                                blackText1={para}
                            />
                        ))}
                    </div>
                </div>
                <div className="dot">
                    <Splide
                        options={{ ...options }}
                        aria-labelledby="autoplay-example-heading"
                        hasTrack={false}
                        className=''
                    >
                        <SplideTrack className="!px-0">
                            {data?.length ? (
                                data?.map((item, i) => (
                                    <SplideSlide key={i} options={options}>
                                        <ExpertAgentsCards {...item} />
                                    </SplideSlide>
                                ))
                            ) : (
                                <div className="w-full">
                                    <NotFound />
                                </div>
                            )}
                        </SplideTrack>
                    </Splide>
                </div>
            </div>
        </section>
    )
}

export default OurTeamSection;
