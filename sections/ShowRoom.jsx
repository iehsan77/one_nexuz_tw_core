// import Heading2 from "@/components/Typography/Heading2";
// import Paragraph from "@/components/Typography/Paragraph";
// import React from "react";

// const ShowRoom = ({ heading, paragraph }) => {
//   return (
//     <>
//       <section className="secPadding">
//         <div className="container">
//         <div className="max-w-5xl w-full mx-auto">
//           <Heading2 blackHeading={heading} className={`text-center`} />
//           {paragraph?.map((para, ind) => (
//             <Paragraph blackText1={para} key={ind} className="text-center" />
//           ))}
//         </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShowRoom;

"use client";
import Image from "@/components/Image/Image";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import { PlaySVG } from "@/public/assets/icons/SVGIcons";
import React, { useState } from "react";

const videosData = [
  {
    thumbnail: "/assets/images/video_1.webp",
    videoUrl: "/assets/images/video_1.mov"
  },
  {
    thumbnail: "/assets/images/video_2.webp",
    videoUrl: "/assets/images/video_1.mov"
  },
  {
    thumbnail: "/assets/images/video_3.webp",
    videoUrl: "/assets/images/video_1.mov"
  }
];
const options = {
  type: "loop",
  rewind: true,
  focus: "center",
  omitEnd: true,
  perPage: 1,
  padding: "0.8rem",
  perMove: 1,
  pagination: false,
  gap: "15px",
  autoplay: true,
  arrows: false,
  autoScroll: {
    speed: 0.5
  },
  mediaQuery: "min",
  breakpoints: {
    480: { perPage: 2 },
    768: { perPage: 3 }
  }
};
const ShowRoom = ({ paragraph, heading }) => {
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
      <div className="container">
        <div className="max-w-5xl w-full mx-auto">
          <Heading2 blackHeading={heading} className={`text-center`} />
          {paragraph?.map((para, ind) => (
            <Paragraph blackText1={para} key={ind} className="text-center !mb-0" />
          ))}
        </div>

        <div>
          <div className="pt-10">
            <Image
              src={"/assets/icons/frame2147224329.svg"}
              alt={"imageAlt"}
              width={1280}
              height={580}
              className="rounded-xl w-full mx-auto"
            />
          </div>
          {/* <SplideSlider options={options} data={videosData}>
            <VideoSection openModal={openModal} />
          </SplideSlider> */}
        </div>
      </div>
      {showModal && <VideoModal videoUrl={currentVideo} onClose={closeModal} />}
    </section>
  );
};

const VideoSection = ({ videoUrl, thumbnail, openModal }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <PlaySVG />
      </div>
      <div>
        <video
          onClick={() => openModal(openModal)}
          className="aspect-[381/282] w-full h-auto object-cover rounded-2xl cursor-pointer"
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

export default ShowRoom;
