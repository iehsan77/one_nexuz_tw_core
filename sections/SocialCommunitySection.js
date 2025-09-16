"use client"
import Image from '@/components/Image/Image'
import Link from '@/components/Link/Link'
import NotFound from '@/components/NotFound/NotFound'
import Heading2 from '@/components/Typography/Heading2'
import Heading4 from '@/components/Typography/Heading4'
import Paragraph from '@/components/Typography/Paragraph'
import { socialLinks } from '@/mockData/dummyData'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import "@splidejs/react-splide/css";
import React from 'react'

const data = [
    { imageURL: "/assets/images/image_41.webp" },
    { imageURL: "/assets/images/image_42.webp" },
    { imageURL: "/assets/images/image_43.webp" },
    { imageURL: "/assets/images/image_44.webp" },
    { imageURL: "/assets/images/image_45.webp" },
]
const options = {
    type: "loop",
    rewind: true,
    resolve: "left",
    perPage: 1,
    padding: "0.8rem",
    perMove: 1,
    pagination: true,
    gap: "15px",
    arrows: true,
    autoplay: true,
    autoScroll: {
        speed: 1,
    },
    mediaQuery: "min",
    breakpoints: {
        480: { perPage: 2 },
        768: { perPage: 3 },
        1024: { perPage: 4},
        1280: { perPage: 5, },
    },
};
const SocialCommunitySection = ({ paragraph, bottomTitle }) => {
    return (
        <section className='secSlidePadding bg-[url(/assets/icons/car_icon.svg)] bg-contain bg-no-repeat bg-bottom'>
            <div className="container relative">
                <div className='pb-4 md:flex md:items-end md:justify-between'>
                    <div className=''>
                        <Heading2
                            heading={`Follow Our Journey on Social Media!`}
                            className="sm:text-left text-center"
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
                                className="py-3"
                                blackText1={para}
                            />
                        ))}</div>
                    <div className="flex items-center justify-center gap-2 pt-1">
                        {socialLinks.map((item, index) => (
                            <div key={index} className="flex items-center sm:justify-end justify-center">
                                <Link href={item.link} target="_blank" className={`!border-none !px-0`} >
                                    {item.icon}
                                </Link>
                            </div>
                        ))}
                        <Link href={'#'} variant={`primary`} >
                            {`@Car-Solutions`}
                        </Link>
                    </div>
                </div>
                <div className='dot'>
                    <Splide options={options} hasTrack={false}>
                        <SplideTrack className="py-5 !px-0">
                            {data?.length ? (
                                data.map((item, i) => (
                                    <SplideSlide key={i}>
                                        <Image
                                            src={item.imageURL}
                                            alt={`Luxora Community Image ${i + 1}`}
                                            width={320}
                                            height={292}
                                            className="object-cover"
                                        />
                                    </SplideSlide>
                                ))
                            ) : (
                                <NotFound />
                            )}
                        </SplideTrack>
                    </Splide>
                </div>

                {/* <div className="md:hidden flex items-center justify-start gap-2 pt-2">
                    {socialLinks.map((item, index) => (
                        <div key={index} className="flex items-center sm:justify-end justify-center">
                            <Link href={item.link} target="_blank" className={`!border-none !px-0`} >
                                {item.icon}
                            </Link>
                        </div>
                    ))}
                    <Link href={'#'} variant={`primary`} >
                        {`@Car-Solutions`}
                    </Link>
                </div> */}
            </div>
        </section>
    )
}

export default SocialCommunitySection;
