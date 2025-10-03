"use client";
import Typography from "@/components/ui/Typography";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useContext, useRef, useState } from "react";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";
import Image from "@/components/Image/Image";
import { Button } from "@/components/ui/Button";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function SocialCommunitySection() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  const splideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const socials = [
    { href: "https://www.facebook.com", icon: "ri:facebook-fill" },
    {
      href: "https://www.instagram.com",
      icon: "qlementine-icons:instagram-24",
    },
    { href: "https://wa.me/9715550105", icon: "ic:baseline-whatsapp" },
  ];

  const data = [
    { image: "/assets/socialMedia/1.webp" },
    { image: "/assets/socialMedia/2.webp" },
    { image: "/assets/socialMedia/3.webp" },
    { image: "/assets/socialMedia/4.webp" },
    { image: "/assets/socialMedia/5.webp" },
  ];

  const options = {
    type: "loop",
    rewind: true,
    resolve: "left",
    perPage: 1.5,
    padding: "0.8rem",
    perMove: 1,
    pagination: false,
    gap: "15px",
    arrows: false,
    autoplay: true,
    autoScroll: {
      speed: 1,
    },
    mediaQuery: "min",
    breakpoints: {
      480: { perPage: 2 },
      768: { perPage: 2.5 },
      1024: { perPage: 3.5 },
    },
  };

  return (
    <div className="secPadding container space-y-6">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Typography size="3xl" weight="bold">
          {t.followSocialMedia}
        </Typography>
        <div className="flex items-center justify-center gap-3">
          {socials?.map(({ href, icon }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              className="w-8 md:w-9 h-8 md:h-9 bg-primary rounded-full text-white flex items-center justify-center">
              <Icon icon={icon} className="text-lg md:text-xl" />
            </Link>
          ))}

          <Link
            href="mailto:info@example.com"
            className="text-primary border-b-2 border-primary py-2 font-semibold sm:text-lg">
            @OneNexuz
          </Link>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <UniversalSplide
        ref={splideRef}
        options={options}
        hasTrack={false}
        onMoved={(splide, newIndex) => setActiveIndex(newIndex)}>
        <SplideTrack className="!px-0">
          {data?.map((item, i) => (
            <SplideSlide key={i}>
              <Image
                src={item?.image}
                alt={`Image ${i + 1}`}
                width={320}
                height={292}
                className="object-cover w-auto h-auto"
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </UniversalSplide>
      {/*  */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center justify-center gap-2">
          {data?.map((_, idx) => (
            <button
              key={idx}
              onClick={() => splideRef.current?.go(idx)}
              className={`cursor-pointer !w-2 !h-2 rounded-full transition ${
                activeIndex === idx ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            className="rounded-sm px-2"
            onClick={() => splideRef.current?.go("<")}>
            <Icon icon="tabler:arrow-left" width="24" height="24" />
          </Button>
          <Button
            variant="primary"
            className="rounded-sm px-2"
            onClick={() => splideRef.current?.go(">")}>
            <Icon icon="tabler:arrow-right" width="24" height="24" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SocialCommunitySection;
