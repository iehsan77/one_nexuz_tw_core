"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import ButtonTheme from "../Button/Button";
import { BlogTags } from "@/sections/BlogSection/BlogTagsAndCategories";
import InterestedCategoriesSection from "@/sections/BlogSection/InterestedCategoriesSection";
import Link from "next/link";
import GetInTouch from "@/sections/GetInTouch";
import { SEOAction } from "@/actions/seo-action";
import BottomFAQSchema from "@/lib/BottomFAQSchema";
import { isIndex } from "@/constants/constants";
import Heading1 from "../Typography/Heading1";
import { contactDetail } from "@/mockData/dummyData";
import { LoadFaqs } from "@/mockData/Skeleton";
import FaqsSection from "@/sections/FaqsSection";

export async function generateMetadata() {
  const vMetaData = await SEOAction();
  return {
    title: vMetaData?.seo_title || "",
    description: vMetaData?.seo_description || "",
    alternates: {
      canonical: vMetaData?.canonical_url || "",
    },
    openGraph: vMetaData?.opengraph_data,
    twitter: vMetaData?.twitter_tag,
    robots: {
      index: isIndex,
      nocache: true,
    },
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.jpg",
    },
  };
}

const BlogsDetail = ({ data, nextPrev, className, faq }) => {
  const blogDataLocal = [
    {
      component: (data) => <ParagraphSection data={data} />,
      section: "paragraphSection",
    },
    {
      component: (data, item) => <CTA1 data={data} item={item} />,
      section: "ctaSection1",
    },
    {
      component: (data, item) => <CTA2 data={data} item={item} />,
      section: "ctaSection2",
    },
    {
      component: (data) => <CTA3 data={data} />,
      section: "ctaSection3",
    },
    {
      component: (data) => <CallSection data={data} />,
      section: "callSection",
    },
    {
      component: (data) => <QuoteSection data={data} />,
      section: "quoteSection",
    },
    {
      component: (data) => <AuthorSection data={data} />,
      section: "authorSection",
    },
    {
      component: (_, item) => <ImageSection item={item} />,
      section: "imageSection",
    },
  ];

  const rendDataDetial = () => {
    return (
      <>
        <div className="mt-4">
          <div className="mb-2">
             <InterestedCategoriesSection
              isSingleIndex={true}
              catId={data?.[0]?.categories_data?.[0]?.id}
            />
          </div>
          <Heading1
            className={`text-black mb-2 text-center lg:text-start px-1 lg:px-0 pr-0 lg:pr-14`}
            blackHeading={data[0]?.title}
          />
          <p className="text-xs text-gray-500">
            {data[0]?.createon
              ? new Date(data[0]?.createon["$date"]).toDateString()
              : ""}
          </p>
        </div>
        <div className={`mt-4`}>
          <div className="relative w-full overflow-hidden my-4 aspect-[16/9] rounded-xl">
            {data[0]?.front_image && (
              <Image
                src={data[0]?.front_image}
                alt={data[0]?.front_image_alt || 'Product image'}
                fill
                className="object-cover"
                priority={true}
              />
            )}
          </div>
          {data?.length
            ? JSON.parse(data[0]?.value)?.map((item, i) => {
              return blogDataLocal?.map((val, i) => {
                return (
                  val.section == item.section &&
                  val.component(item?.description, item)
                );
              });
            })
            : ""}
        </div>
      </>
    );
  };
  const Paginations = () => {
    const handleScrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // for smooth animation
      });
    };
    return (
      <div className="bg-primary rounded-xl px-4 py-2 grid grid-cols-2 gap-16 text-white">
        <div>{nextPrev && nextPrev[0] && (
          <Link
            href={`/blog/${nextPrev[0]?.slug}?id=${nextPrev[0]?.id}`}
            className="flex items-start justify-start"
            onClick={handleScrollTop}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 overflow-hidden xs:block hidden">
                <Image
                  src={nextPrev[0]?.front_image}
                  width={50}
                  height={50}
                  alt={nextPrev[0]?.front_image_alt}
                  className={`w-full h-full object-cover`}
                />
              </div>
              <div className="text-left">
                <p className=" font-[600] hover:underline hover:underline-offset-4">
                  Previous Post
                </p>
                <p className="md:text-sm text-xs line-clamp-1 xs:block hidden">
                  {nextPrev[0]?.title}
                </p>
              </div>
            </div>
          </Link>
        )}
        </div>
        <div>{nextPrev && nextPrev[1] && (
          <Link
            href={`/blog/${nextPrev[1]?.slug}?id=${nextPrev[1]?.id}`}
            className="flex items-center justify-end"
            onClick={handleScrollTop}
          >
            <div className="flex flex-row-reverse items-start gap-4">
              <div className="w-16 h-16 overflow-hidden xs:block hidden">
                <Image
                  src={nextPrev[1]?.front_image}
                  width={50}
                  height={50}
                  alt={nextPrev[1]?.front_image_alt}
                  className={`w-full h-full object-cover`}
                />
              </div>
              <div className="text-right">
                <p className=" font-[600] hover:underline hover:underline-offset-4">
                  Next Post
                </p>
                <p className="md:text-sm text-xs line-clamp-1 xs:block hidden">
                  {nextPrev[1]?.title}
                </p>
              </div>
            </div>
          </Link>
        )}</div>
      </div>
    );
  };
  return (
    <>
      <section className={`${className}`}>
        {data && rendDataDetial()}
        <BlogTags />

        <Suspense fallback={<LoadFaqs />}>
          {faq && <FaqsSection data={JSON.parse(faq)} />}
        </Suspense>
        {faq && <BottomFAQSchema data={JSON.parse(faq)} />}
        {nextPrev?.length !== 0 && (
          <div className="pb-6">
            <Paginations />
          </div>
        )}
      </section>
    </>
  );
};
export default BlogsDetail;

const ParagraphSection = ({ data }) => {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
};

const CTA1 = ({ data, item }) => {
  return (
    <div className="bg-primary grid grid-cols-3 p-4 my-6 items-center rounded-xl">
      <div className="md:col-span-2 col-span-3 grid gap-4">
        <div
          className="text-white max-w-[440px] md:text-base text-sm md:text-left text-center"
          dangerouslySetInnerHTML={{ __html: data }}
        />
        <ButtonTheme
          text={item?.cta1_button_text || "Get Started"}
          href={item?.cta1_button_url || "#"}
          target="_blank"
          widthClass="w-max rounded-full bg-white hover:!bg-black !text-primary hover:!text-white "
        />
      </div>
      <div className="md:col-span-1 col-span-3 flex justify-center items-center">
        <Image
          src={
            item.cta1_image ? item.cta1_image : "/assets/images/8856532206.webp"
          }
          alt="blog image"
          layout="intrinsic"
          width={200}
          height={200}
          className="object-cover w-[200px] h-[200px]"
        />
      </div>
    </div>
  );
};

const CTA2 = ({ data, item }) => {
  return (
    <div className="py-6 md:py-10 flex md:flex-row flex-col justify-between px-4 my-6 items-center rounded-xl bg-[url('/assets/images/blogs/Cta2Bg.webp')] bg-cover bg-no-repeat">
      <div
        className="text-white max-w-[440px] md:text-base text-sm md:text-left text-center"
        dangerouslySetInnerHTML={{ __html: data }}
      />
      <div className="">
        <ButtonTheme
          text={item?.cta2_button_text || "Get Started"}
          href={item?.cta2_button_url || "#"}
          target="_blank"
          className="w-max rounded-lg bg-white hover:bg-black !text-primary hover:!text-white"
        />
      </div>
    </div>
  );
};

const CTA3 = ({ data }) => {
  return (
    <div className="py-6 md:py-10 flex md:flex-row flex-col px-4 items-center rounded-xl bg-primary">
      <div
        className="text-white max-w-[440px] md:text-base text-sm md:text-left text-center"
        dangerouslySetInnerHTML={{ __html: data }}
      />
      <div className="">
        <ButtonTheme
          text={"Get Started"}
          href={contactDetail.telNumber}
          className="w-max rounded-lg bg-white hover:bg-black !text-primary hover:!text-white"
        />
      </div>
    </div>
  );
};

const CallSection = ({ data }) => {
  return (
    <>
      <div className="bg-primary p-4 rounded-md  flex flex-col justify-center items-center">
        <div
          className="text-white flex flex-col justify-center items-center text-center"
          dangerouslySetInnerHTML={{ __html: data }}
        ></div>
        <div className="pt-4">
          <ButtonTheme
            text={contactDetail.telNumber}
            href={contactDetail.telNumber}
            className="w-max rounded-lg bg-white hover:bg-black !text-primary hover:!text-white"
          />
        </div>
      </div>
    </>
  );
};

const QuoteSection = ({ data }) => {
  return (
    <>
      <div className="bg-[#FDF2EB] py-6 flex flex-col rounded-lg my-6">
        <div className="w-3/4 m-auto">
          <Image
            src={"/assets/images/blogs/quote.svg"}
            alt={`quote img`}
            width={50}
            height={50}
          />
          <div
            className="text-black md:text-base text-sm md:text-left text-center"
            dangerouslySetInnerHTML={{ __html: data }}
          />
        </div>
      </div>
    </>
  );
};

const AuthorSection = ({ data }) => {
  return (
    <>
      <div
        className="bg-[#ECECEC] sm:px-8 px-4 sm:py-4 py-3 mt-2 text-black md:text-base text-sm md:text-left rounded-lg text-center"
        dangerouslySetInnerHTML={{ __html: data }}
      />
    </>
  );
};

const ImageSection = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="py-6 md:py-10">
      {item?.image_url ? (
        <Link href={item?.image_url} legacyBehavior>
          <a target="_blank">
            <Image
              src={item?.image}
              height={500}
              width={500}
              className="h-full w-full"
              alt=""
            />
          </a>
        </Link>
      ) : (
        <div onClick={toggleModal}>
          <Image
            src={item?.image}
            height={500}
            width={500}
            className="h-full w-full"
            alt=""
          />
          <GetInTouch isModalOpen={isModalOpen} toggleModal={toggleModal} />
        </div>
      )}
    </div>
  );
};
