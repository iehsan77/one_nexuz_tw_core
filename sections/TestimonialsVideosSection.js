"use client";
import SplideSlider from "@/components/SplideSlider/SplideSlider";
import Heading2 from "@/components/Typography/Heading2";
import Heading4 from "@/components/Typography/Heading4";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import { PlayRedSVG, PlaySVG } from "@/public/assets/icons/SVGIcons";
import React, { useState } from "react";

const videosData = [
    {
        thumbnail: "/assets/images/image_36.webp",
        videoUrl: "/assets/images/video_1.mov",
    },
    {
        thumbnail: "/assets/images/image_36.webp",
        videoUrl: "/assets/images/video_1.mov",
    },
    {
        thumbnail: "/assets/images/image_36.webp",
        videoUrl: "/assets/images/video_1.mov",
    },
    {
        thumbnail: "/assets/images/image_36.webp",
        videoUrl: "/assets/images/video_1.mov",
    },
];
const options = {
    type: "loop",
    rewind: true,
    focus: "center",
    // omitEnd: true,
    perPage: 1,
    padding: "0.8rem",
    perMove: 1,
    pagination: true,
    gap: "15px",
    autoplay: true,
    arrows: true,
    autoScroll: {
        speed: 0.5
    },
    mediaQuery: "min",

};
const TestimonialsVideosSection = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const openModal = (videoUrl) => {
        setCurrentVideo(videoUrl);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
        setCurrentVideo(null);
    };
    return (
        <section className="secPadding">
            <div className="container md:pb-0 sm:pb-4 pb-12">
                <div className="max-w-5xl w-full mx-auto">
                    <Heading2
                        blackHeading={`Voices from the Driver’s Seat`}
                        className="text-left sm:!text-center"
                    />
                    <Paragraph
                        className="text-left sm:!text-center"
                        blackText1={`See how we’ve helped customers shift into a smoother, smarter, and more confident car journey from first click to final handshake.`}
                    />
                </div>
                <div className="sm:pt-10 pt-4">
                    <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-6 lg:gap-y-0 gap-y-4">
                        <div className="bg-[url(/assets/icons/frame427320841.svg)] bgimg overflow-hidden rounded-4xl lg:p-9 p-4">
                            <div className="flex flex-col justify-between h-full">
                                <div className="">
                                    <Heading2
                                        blackHeading={`01`}
                                        className="text-left !text-5xl"
                                    />
                                    <Heading5
                                        blackHeading={`Car Dealer Records`}
                                        className="text-left !font-medium"
                                    />
                                    <Heading4
                                        blackHeading={`I was nervous about buying a used car online, but ...`}
                                        className="text-left !font-medium"
                                    />
                                </div>
                                <div className="">
                                    <Heading2
                                        blackHeading={`David Brooks`}
                                        className="text-left"
                                    />
                                    <Heading5
                                        blackHeading={`Miami, FL`}
                                        className="text-left !font-medium"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 testimonialarrow">
                            <SplideSlider options={options} data={videosData} >
                                <VideoSection openModal={openModal} />
                            </SplideSlider>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <VideoModal videoUrl={currentVideo} onClose={closeModal} />}
        </section>
    );
};

const VideoSection = ({ videoUrl, thumbnail, openModal }) => {
    return (
        <div className="relative">
            <div className="absolute right-4 bottom-4">
                <PlayRedSVG />
            </div>
            <div>
                <video
                    onClick={() => openModal(openModal)}
                    className="sm:aspect-[381/210] aspect-[381/310] w-full h-auto object-cover rounded-2xl cursor-pointer"
                    preload="none"
                    poster={thumbnail}
                    aria-label="Play testimonial video"
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};
const VideoModal = ({ videoUrl, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden relative max-w-3xl w-full">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white bg-black rounded-full w-9 h-9 text-3xl z-10 hover:cursor-pointer"
                >
                    ×
                </button>
                <video src={videoUrl} controls autoPlay className="w-full h-auto">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default TestimonialsVideosSection;
