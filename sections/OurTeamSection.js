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
        userName: "Marcus Reed",
        role: "CEO",
        designation: "Los Angeles, CA",
    },
    {
        imageURL: "/assets/images/image_31.webp",
        userName: "Jessica Lane",
        role: "Head of Sales",
        designation: "Los Angeles, CA",
    },
    {
        imageURL: "/assets/images/image_32.webp",
        userName: "Amanda Chen",
        role: "Lead Vehicle Specialist",
        designation: "Los Angeles, CA",
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
  pagination: true,
  gap: "15px",
  autoplay: true,
  arrows: true,
  autoScroll: {
    speed: 0.5,
  },
  mediaQuery: "min",
  breakpoints: {
    768: { perPage: 2 },
    1280: { perPage: 3},
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
        <section className='secSlidePadding'>
            <div className='container'>
                <div className='pb-6 max-w-4xl mx-auto'>
                    <div className=''>
                        {topTitle && (
                            <Heading4
                                className="lg:text-center text-left"
                                heading={topTitle}
                            />
                        )}
                        <Heading2
                            heading={heading}
                            className="lg:text-center text-left !mb-2"
                        />
                        {bottomTitle && (
                            <Heading4
                                className="lg:text-center text-left"
                                heading={bottomTitle}
                            />
                        )}
                        {paragraph?.map((para, ind) => (
                            <Paragraph
                                key={ind}
                                className="lg:text-center text-left"
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
