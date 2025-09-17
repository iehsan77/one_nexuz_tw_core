"use client";
import React, { Suspense, useContext, useEffect, useState } from "react";
import Image from "@/components/Image/Image";
import { usePathname, useRouter } from "next/navigation";
import { Chevron, MultilangSVG } from "@/public/assets/icons/SVGIcons";
import { navlinks, socialLinks, topHeadContent } from "@/mockData/dummyData";
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
import SuccessfulPasswordReset from "../UserAuth/SuccessfulPasswordReset";
import NewPassword from "../UserAuth/NewPassword";
import RecoverPassword from "../UserAuth/RecoverPassword";
import ForgotPassword from "../UserAuth/ForgotPassword";
import useUserStore from "@/stores/user-store";
// import { Icon } from "@iconify/react";
// import AvatarDropdown from "../AvatarDropdown/AvatarDropdown";
import Heading6 from "../Typography/Heading6";
import Heading4 from "../Typography/Heading4";
import AppModal from "../Modal/AppModal";
import Link from "../Link/Link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

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

function NavListMenu({ title, pageLinks = [], }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const variant =
    title?.toLowerCase() === "business" ? "business" :
      title?.toLowerCase() === "corporate" ? "corporate" :
        title?.toLowerCase() === "banking" ? "banking" :
          title?.toLowerCase() === "digital" ? "digital" :
            title?.toLowerCase() === "millionaire" ? "millionaire" :
              title?.toLowerCase() === "logistics" ? "logistics" :
                "";

  /** ✅ Render services items */
  const businessItems = pageLinks.map((item, key) =>
    item.subLinks ? (
      <NavSubListMenu key={key} title={item.name} link={item.link} subLinks={item.subLinks} />
    ) : (
      <div
        key={key}
        className="w-full flex items-start gap-3 rounded-lg hover:bg-white/10 lg:p-3 transition"
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
    )
  );
  const corporateItems = pageLinks.map((item, key) =>
    item.subLinks ? (
      <NavSubListMenu key={key} title={item.name} link={item.link} subLinks={item.subLinks} />
    ) : (
      <div
        key={key}
        className="w-full flex items-start gap-3 rounded-lg hover:bg-white/10 lg:p-3 transition"
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
    )
  );
  const bankingItems = pageLinks.map((item, key) =>
    item.subLinks ? (
      <NavSubListMenu key={key} title={item.name} link={item.link} subLinks={item.subLinks} />
    ) : (
      <div
        key={key}
        className="w-full flex items-start gap-3 rounded-lg hover:bg-white/10 lg:p-3 transition"
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
    )
  );
  const digitalItems = pageLinks.map((item, key) =>
    item.subLinks ? (
      <NavSubListMenu key={key} title={item.name} link={item.link} subLinks={item.subLinks} />
    ) : (
      <div
        key={key}
        className="w-full flex items-start gap-3 rounded-lg hover:bg-white/10 lg:p-3 transition"
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
    )
  );
  const millionaireItems = pageLinks.map((item, key) =>
    item.subLinks ? (
      <NavSubListMenu key={key} title={item.name} link={item.link} subLinks={item.subLinks} />
    ) : (
      <div
        key={key}
        className="w-full flex items-start gap-3 rounded-lg hover:bg-white/10 lg:p-3 transition"
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
    )
  );
  const logisticsItems = pageLinks.map((item, key) =>
    item.subLinks ? (
      <NavSubListMenu key={key} title={item.name} link={item.link} subLinks={item.subLinks} />
    ) : (
      <div
        key={key}
        className="w-full flex items-start gap-3 rounded-lg hover:bg-white/10 lg:p-3 transition"
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
    )
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
            className="!text-sm"
          >
            {title}
          </span>
          {/* <Chevron className={isMenuOpen ? "fill-primary rotate-90" : ""} /> */}
        </div>

        {isMenuOpen && (
          <div className="absolute left-0 bg-white text-black w-full shadow-lg px-6 py-6 rounded-xl overflow-hidden">
            {variant === "business" && (
              <div>
                <Heading4 blackHeading={`Business Setup`} className="text-wrap lg:block hidden mb-4" />
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-6">
                  {businessItems}
                </div>
              </div>
            )}
            {variant === "corporateItems" && (
              <div>
                <Heading4 blackHeading={`Corporate Services`} className="text-wrap lg:block hidden mb-4" />
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-6">
                  {corporateItems}
                </div>
              </div>
            )}
            {variant === "bankingItems" && (
              <div>
                <Heading4 blackHeading={`Banking & Wealth`} className="text-wrap lg:block hidden mb-4" />
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-6">
                  {bankingItems}
                </div>
              </div>
            )}
            {variant === "digitalItems" && (
              <div>
                <Heading4 blackHeading={`Digital Tech`} className="text-wrap lg:block hidden mb-4" />
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-6">
                  {digitalItems}
                </div>
              </div>
            )}
            {variant === "millionaireItems" && (
              <div>
                <Heading4 blackHeading={`Millionaire & Billionaire`} className="text-wrap lg:block hidden mb-4" />
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-6">
                  {millionaireItems}
                </div>
              </div>
            )}
            {variant === "logisticsItems" && (
              <div>
                <Heading4 blackHeading={`Logistics & Relocation`} className="text-wrap lg:block hidden mb-4" />
                <div className="grid xl:grid-cols-5 lg:grid-cols-3 grid-cols-1 gap-6">
                  {logisticsItems}
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

          {variant === "business" && (
            <div className="">
              {businessItems}
            </div>
          )}
          {variant === "corporateItems" && (
            <div className="">
              {corporateItems}
            </div>
          )}
          {variant === "bankingItems" && (
            <div className="">
              {bankingItems}
            </div>
          )}
          {variant === "digitalItems" && (
            <div className="">
              {digitalItems}
            </div>
          )}
          {variant === "millionaireItems" && (
            <div className="">
              {millionaireItems}
            </div>
          )}
          {variant === "logisticsItems" && (
            <div className="">
              {logisticsItems}
            </div>
          )}

        </div>
        }
      </div>
    </>
  );
}

const TopNavBarContact = () => {
  return (
    <>
      <div className="container">
        <div className="bg-white py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {topHeadContent?.map((item, index) => (
                <Link
                  target="_blank"
                  variant={``}
                  key={index}
                  href={item.link}
                  className={`!px-0 flex items-center gap-2 !text-sm`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              {socialLinks.map((item, index) => (
                <div key={index} className="flex items-center sm:justify-end justify-center">
                  <Link href={item.link} target="_blank" className={`!border-none !px-0`} >
                    {item.icon}
                  </Link>
                </div>
              ))}
              <MultilangSVG />
              <div className="">
                <Suspense fallback={<div>Loading language switcher...</div>}>
                  <LanguageSwitcher />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
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
    "/assets/images/car_solution.svg"
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
        setNavbarColorLogo(`/assets/images/car_solution.svg`);
        setNavbarText(`!text-white`);
        setIconStrock(`white`);
      } else {
        setNavbarColor("lg:backdrop-blur-0 bg-secondary text-white py-3");
        setNavbarColorLogo(`/assets/images/car_solution.svg`);
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
      <div className="sm:block hidden">
        <TopNavBarContact />
      </div>
      <div
        className={`${navbarColor} sticky top-0 z-40 w-full transition-all duration-300 shadow-lg`}>
        <nav
          className={`container relative lg:border-none lg:shadow-none h-max rounded-none px-4 lg:px-14`}>
          <div className="flex items-center justify-between">
            <div className="">
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
            <div className="hidden lg:block">
              <ul className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex lg:p-1 xl:gap-6 lg:gap-4 lg:divide-y-0 divide-y">
                {navlinks[locale]?.map(({ name, link, pageLinks }, index) => {
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
                    <Link
                      href={'/contact-us'}
                      variant={`primary`}
                    >
                      {`Inquire Now`}
                    </Link>
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
                                ({ name, link, pageLinks }, index) => {
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
        </nav>
      </div>
      {isModalOpen && (
        <AppModal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 h-full">
            <div className="relative border -m-6 lg:block hidden">
              <Image
                src={`/assets/images/car_solution_clr.svg`}
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
