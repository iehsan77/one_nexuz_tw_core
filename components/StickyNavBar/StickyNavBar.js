"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "@/components/Image/Image";
import { usePathname, useRouter } from "next/navigation";
import { Chevron } from "@/public/assets/icons/SVGIcons";
import { navlinks } from "@/mockData/dummyData";
import useVendorStore from "@/stores/vendor-store";
import { useDrawer } from "@/context/drawer-context";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { textToRouteUrl } from "@/utils/apiHelper";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import useAllBrandStore from "@/stores/AllBrandStore";
import Paragraph from "../Typography/Paragraph";
import useCategoryStore from "@/stores/categoryStore";
import useFilterStore from "@/stores/filterStore";
import Signin from "../UserAuth/Signin";
import Signup from "../UserAuth/Signup";
import OtpVerification from "../UserAuth/OtpVerification";
import ResetPassword from "../UserAuth/ResetPassword";
import SuccessfulPasswordReset from "../UserAuth/SuccessfulPasswordReset";
import NewPassword from "../UserAuth/NewPassword";
import RecoverPassword from "../UserAuth/RecoverPassword";
import ForgotPassword from "../UserAuth/ForgotPassword";
import useUserStore from "@/stores/user-store";
import { Icon } from "@iconify/react";
import AvatarDropdown from "../AvatarDropdown/AvatarDropdown";
import Heading6 from "../Typography/Heading6";
import Heading4 from "../Typography/Heading4";
import AppModal from "../Modal/AppModal";
import Link from "../Link/Link";

function NavSubListMenu({ title, link, subLinks }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const renderItems = subLinks?.map(({ name, link }, key) => (
    <li key={key} className="flex items-center gap-3 rounded-lg pt-0 pb-0 px-0">
      <LanguageAwareLink
        href={textToRouteUrl(link || "")}
        className="normalFontSize w-full py-2 px-4 text-black font-[400] text-nowrap hover:bg-primary hover:text-white rounded-xl">
        {name}
      </LanguageAwareLink>
    </li>
  ));

  return (
    <>
      <div
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        className="hidden lg:block ">
        <div className={`${isMenuOpen && "bg-primary"} rounded-xl`}>
          <div className="w-full flex justify-between items-center gap-2 py-2 px-4 text-black font-[400]">
            <LanguageAwareLink
              href={textToRouteUrl(link || "")}
              className={
                isMenuOpen ? "normalFontSize text-white" : "normalFontSize"
              }>
              {title}
            </LanguageAwareLink>
            <Chevron
              className={
                isMenuOpen ? "fill-white -rotate-90" : "-rotate-90 fill-primary"
              }
            />
          </div>
        </div>
        {isMenuOpen && (
          <ul className="absolute top-0 left-[101%] bg-secondary shadow-lg rounded-xl overflow-hidden">
            {renderItems}
          </ul>
        )}
      </div>
      <div className="block lg:hidden">
        <div
          className="flex justify-between items-center gap-2 py-2 pr-4 text-black font-[400]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="normalFontSize">{title}</span>
          <Chevron
            className={
              isMobileMenuOpen ? "fill-primary -rotate-90" : "-rotate-90"
            }
          />
        </div>
        {isMobileMenuOpen && <ul className="p-2 ">{renderItems}</ul>}
      </div>
    </>
  );
}

function NavListMenu({ title, pageLinks = [], blogLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const variant =
    title?.toLowerCase() === "services"
      ? "services"
      : title?.toLowerCase() === "resources"
        ? "resources"
        : "";

  /** ✅ Render services items */
  const servicesItems = pageLinks.map(
    ({ name, title, link, paragraph, target, subLinks }, key) =>
      subLinks ? (
        <NavSubListMenu key={key} title={name} link={link} subLinks={subLinks} />
      ) : (
        <div
          key={key}
          className="w-full flex items-start gap-3 rounded-lg hover:bg-white/10 lg:p-3 transition"
        >
          <LanguageAwareLink
            href={textToRouteUrl(link || "#")}
            target={target}
            className="normalFontSize w-full font-[400] text-nowrap"
          >
            <Heading6 blackHeading={title} className="!mb-0" />
            <Paragraph
              blackText1={paragraph}
              className="text-wrap !text-xs !mb-2"
            />
          </LanguageAwareLink>
        </div>
      )
  );

  /** ✅ Render resources items (without images) */
  const resourcesItems = pageLinks.map((item, i) => (
    <div
      key={i}
      className="flex items-start gap-4 rounded-lg hover:bg-white/10  lg:p-3 transition"
    >
      <LanguageAwareLink
        href={textToRouteUrl(item.link || "#")}
        target={item.target}
        className="normalFontSize w-full font-[400] text-nowrap"
      >
        <Heading6 blackHeading={item.title} className="!mb-0" />
        <Paragraph
          blackText1={item.paragraph}
          className="text-wrap !text-xs !mb-2"
        />
      </LanguageAwareLink>
    </div>
  ));

  /** ✅ Render blog links (with images) */
  const blogItems = blogLinks.map((item, i) => {
    return (
      <div
        key={i}
        className="flex items-start gap-4 rounded-lg hover:bg-white/10 transition"
      >
        {item.imageURL && (
          <div className="aspect-[160px/126px] rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={item.imageURL}
              alt={item.title}
              width={120}
              height={90}
              className="object-cover"
            />
          </div>
        )}
        <div>
          <LanguageAwareLink
            href={textToRouteUrl(item.link || "#")}
            target={item.target}
            className="normalFontSize w-full font-[400] text-nowrap"
          >
            <Paragraph blackText1={item.title} className="!mb-2 text-wrap !font-semibold line-clamp-2" />
            <Paragraph
              blackText1={item.paragraph}
              className="text-wrap !text-xs !mb-0 line-clamp-2"
            />

          </LanguageAwareLink>
          <Link
            href={textToRouteUrl(item.link || "#")}
            variant={`txt`}
            className={`!text-white !text-xs !inline-flex`}
            icon1
            iconClass={`!text-white`}
          >
            Read More
          </Link>
        </div>
      </div>
    )
  }
  );
  return (
    <>
      {/* ✅ Desktop Mega Menu */}
      <div
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
        className="hidden lg:block"
      >
        <div className="flex items-center py-2 text-white font-[400] hover:cursor-pointer">
          <span
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="normalFontSize"
          >
            {title}
          </span>
          <Chevron className={isMenuOpen ? "fill-primary rotate-90" : ""} />
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 bg-secondary w-full shadow-lg px-6 py-6 rounded-xl overflow-hidden">
            {variant === "services" && (
              <div>
                <Heading4 blackHeading={`Services`} className="text-wrap lg:block hidden mb-4" />
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-6">
                  {servicesItems}
                </div>
              </div>
            )}
            {variant === "resources" && (
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                {/* Left Side → Resources */}
                <div>
                  <Heading4 blackHeading={`Resources`} className="text-wrap lg:block hidden mb-4" />
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {resourcesItems}
                  </div>
                </div>

                {/* Right Side → Blog Links */}
                <div>
                  <Heading4 blackHeading={`Featured Insights`} className="text-wrap lg:block hidden mb-4" />
                  <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
                    {blogItems}
                  </div>
                  {/* View All Button */}
                  <Link
                    href="/blog"
                    className="mt-4 inline-flex px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                  >
                    View All Insights
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {/* ✅ Mobile Dropdown */}
      <div className="block lg:hidden">
        <div
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-between gap-2 py-2 pr-4 text-black font-[400]"
        >
          <span className="normalFontSize">{title}</span>
          <Chevron className={isMobileMenuOpen ? "fill-primary rotate-90" : ""} />
        </div>
        {/* {isMobileMenuOpen && <div className="pl-2 !text-black">{renderItems}</div>} */}
        {isMobileMenuOpen && <div className="pl-2 !text-black">

          <Heading4 blackHeading={title} className="lg:block hidden mb-4" />

          {variant === "services" && (
            <div className="">
              {servicesItems}
            </div>
          )}

          {variant === "resources" && (
            <div className="">
              <div className="">
                {resourcesItems}
              </div>

              {/* Right Side → Blog Links */}
              <div>
                <Heading4 blackHeading={`Featured Insights`} className="text-wrap mb-4" />
                <div className="grid grid-cols-1">
                  {blogItems}
                </div>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                >
                  View All Insights
                </Link>
              </div>
            </div>
          )}
        </div>}
      </div>
    </>
  );
}

export function StickyNavbar() {
  const [formType, setFormType] = useState("signin");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { allBrandData, fetchAllBrandData } =
    useAllBrandStore();
  const { categoryData, fetchCategoriesData } =
    useCategoryStore();
  const router = useRouter();
  const { setFilter, resetFilters } = useFilterStore();
  const [navbarColor, setNavbarColor] = useState(
    "lg:backdrop-blur-0 bg-secondary py-3 text-white"
  );

  const [navbarColorLogo, setNavbarColorLogo] = useState(
    "/assets/images/car_solution_logo.svg"
  );
  const [navbarText, setNavbarText] = useState("");
  const [iconStrock, setIconStrock] = useState(`white`);
  const [otpEmail, setOtpEmail] = useState(null);
  const { vendor } = useVendorStore();
  const { showDrawer, hideDrawer } = useDrawer();
  const pathname = usePathname();
  const { locale } = useContext(LanguageContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavbarColor("!bg-secondary !text-white py-1 shadow-xl");
        setNavbarColorLogo(`/assets/images/car_solution_logo.svg`);
        setNavbarText(`!text-white`);
        setIconStrock(`white`);
      } else {
        setNavbarColor("lg:backdrop-blur-0 bg-secondary text-white py-3");
        setNavbarColorLogo(`/assets/images/car_solution_logo.svg`);
        setNavbarText(`!text-white`);
        setIconStrock(`white`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const firstLetter = vendor?.first_name
    ? vendor.first_name.charAt(0).toUpperCase()
    : "";

  const translations = {
    en: {
      bookYourCar: "Book Your Car",
    },
    ar: {
      bookYourCar: "احجز سيارتك",
    },
  };
  useEffect(() => {
    fetchAllBrandData();
    fetchCategoriesData();
  }, [fetchAllBrandData, fetchCategoriesData]);

  const handleCategoryClick = (item) => {
    setFilter("category_id", item?.id);
    hideDrawer();
    router.push(`/${locale}/category/${item?.slug}`);
  };

  const handleBrandClick = (item) => {
    setFilter("brand_id", item?.id);
    hideDrawer();
    router.push(`/${locale}/brands/${item?.slug}`);
  };
  let { user, logout } = useUserStore();
  const handleModal = () => {
    setIsModalOpen(true)
  };
  const handleModalOnFavorite = () => {
    !user ? setIsModalOpen(true) : router.push("/favourities");
  };
  return (
    <>
      <div
        className={`${navbarColor} sticky top-0 z-50 w-full transition-all duration-300 shadow-lg`}>
        <nav
          className={`container relative lg:border-none lg:shadow-none h-max rounded-none px-4 lg:px-14`}>
          <div className="grid lg:grid-cols-2 items-center">
            {/* <div className="flex items-center justify-between"> */}
            <div className="hidden lg:block">
              {/* <ul className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex lg:p-1 xl:gap-6 lg:gap-2 lg:divide-y-0 divide-y"> */}
              <ul className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex lg:p-1 xl:gap-6 lg:gap-4 lg:divide-y-0 divide-y">
                {navlinks[locale]?.map(({ name, link, pageLinks, blogLinks }, index) => {
                  const currentPath = pathname.replace(/^\/(en|ar)/, "");
                  const isActive =
                    link === "/"
                      ? pathname === `/${locale}` ||
                      pathname === `/${locale}/` ||
                      pathname === "/"
                      : currentPath === link;
                  return pageLinks ? (
                    <NavListMenu
                      key={index}
                      title={name}
                      pageLinks={pageLinks}
                      blogLinks={blogLinks}
                    />
                  ) : (
                    <li
                      key={index}
                      className={`${navbarText} flex items-center gap-2 pr-1 py-2 font-[400] lg:divide-y-0 divide-y 
                      ${isActive
                          ? "font-semibold underline underline-offset-4"
                          : "text-white"
                        }`}>
                      <LanguageAwareLink
                        href={link}
                        onClick={() => resetFilters()}
                        className="normalFontSize text-base">
                        {name}
                      </LanguageAwareLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <div className="xl:basis-sm xl:-ml-16">
                <LanguageAwareLink
                  href={textToRouteUrl("/")}
                  className="cursor-pointer">
                  <Image
                    src={navbarColorLogo}
                    alt="logo"
                    width={166}
                    height={64}
                    className={`object-contain`}
                  />
                </LanguageAwareLink>
              </div>
              <div className="flex items-center gap-4">
                {vendor?.id ? (
                  <>
                    {vendor?.profile_image === "" ? (
                      <LanguageAwareLink
                        href={textToRouteUrl("/profile")}
                        className="rounded-full h-9 w-9 font-semibold flex items-center justify-center !m-0 text-white bg-primary">
                        {firstLetter}
                      </LanguageAwareLink>
                    ) : (
                      <LanguageAwareLink
                        href={textToRouteUrl("/profile")}
                        className="rounded-full h-9 w-9 overflow-hidden">
                        <Image
                          src={vendor?.profile_image}
                          alt={firstLetter}
                          width={20}
                          height={20}
                          className="w-full h-full object-cover"
                        />
                      </LanguageAwareLink>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex items-center gap-4 ${user?.id ? "gap-4" : "gap-2"
                          }`}
                      >
                        <div
                          className="flex items-center gap-4 relative"
                          onClick={handleModalOnFavorite}
                        >
                          <button>
                            <Icon
                              icon="akar-icons:heart"
                              width="1.6rem"
                              height="1.6rem"
                            />
                          </button>
                          {user?.id && (
                            <span className="absolute text-sm -right-3 -top-2 bg-primary text-white h-5 w-5 text-center rounded-full">
                              {user?.favoriteCount || 0}
                            </span>
                          )}
                        </div>
                        <AvatarDropdown isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
                      </div>
                    </div>

                    {/* Responsive NavBar */}
                    <div
                    className="lg:hidden flex items-center"
                      onClick={() =>
                        showDrawer({
                          title: (
                            <div className="">
                              <div className="flex items-start gap-2">
                                <LanguageAwareLink
                                  href={textToRouteUrl("/")}
                                  className="mr-auto cursor-pointer"
                                  onClick={() => hideDrawer()}>
                                  <Image
                                    src={`/assets/images/car_solution.svg`}
                                    alt="logo"
                                    width={120}
                                    height={64}
                                    className={``}
                                  />
                                </LanguageAwareLink>
                              </div>
                            </div>
                          ),
                          direction: locale === "ar" ? "right" : "left",
                          size: "sm",
                          content: (
                            <div className="">
                              <ul className="lg:flex lg:p-1 xl:gap-6 lg:gap-2">
                                {navlinks[locale]?.map(
                                  ({ name, link, pageLinks, blogLinks }, index) => {
                                    const currentPath = pathname.replace(
                                      /^\/(en|ar)/,
                                      ""
                                    );
                                    const isActive =
                                      link === "/"
                                        ? pathname === `/${locale}` ||
                                        pathname === `/${locale}/` ||
                                        pathname === "/"
                                        : currentPath === link;

                                    return pageLinks ? (
                                      <NavListMenu
                                        key={index}
                                        title={name}
                                        pageLinks={pageLinks}
                                        blogLinks={blogLinks}
                                      />
                                    ) : (
                                      <li
                                        key={index}
                                        className={`flex items-center gap-2 py-2 pr-4 text-black font-[400] ${isActive
                                          ? "font-semibold underline underline-offset-4 text-black"
                                          : ""
                                          }`}>
                                        <LanguageAwareLink
                                          href={textToRouteUrl(link || "")}
                                          className="normalFontSize"
                                          onClick={() => {
                                            resetFilters();
                                            hideDrawer();
                                          }}>
                                          {name}
                                        </LanguageAwareLink>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          ),
                        })
                      }
                    >
                      <button className="cursor-pointer ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          stroke={iconStrock}
                          strokeWidth={2}>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      {isModalOpen && (
        <AppModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full">
            <div className="relative border -m-6 lg:block hidden">
              <Image
                src={`/assets/images/car_solution_logo.svg`}
                alt="Elena Petrova"
                width={219}
                height={585}
                className="absolute z-10 object-top-left p-6"
              />
              <Image
                src={`/assets/images/image_70.webp`}
                alt="Elena Petrova"
                width={519}
                height={585}
                className="absolute w-full h-full object-cover object-top-left"
              />
            </div>
            <div className="flex items-center justify-center w-full">
              {formType === "signin" && (
                <Signin
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "signup" && (
                <Signup
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  setOtpEmail={setOtpEmail}
                />
              )}
              {formType === "otp" && (
                <OtpVerification
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "succpassword" && (
                <SuccessfulPasswordReset
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "newpassword" && (
                <NewPassword
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "recoverpassword" && (
                <RecoverPassword
                  email={otpEmail}
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
              {formType === "forgotPassword" && (
                <ForgotPassword
                  setFormType={setFormType}
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                />
              )}
            </div>
          </div>
        </AppModal>
      )}
    </>
  );
}
