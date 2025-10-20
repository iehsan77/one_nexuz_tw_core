"use client";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import ServiceHeader from "@/components/Header/ServiceHeader";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import { navData, navDataAr } from "@/lib/navigation-config";
import { Icon } from "@iconify/react";
import { useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState, useRef } from "react";

function ViewAllService() {
  const { locale } = useContext(LanguageContext);
  const servicesData = locale === "ar" ? navDataAr : navData;
  const [openDropdowns, setOpenDropdowns] = useState({});
  const searchParams = useSearchParams();
  const sectionRefs = useRef({});
  const [hasScrolled, setHasScrolled] = useState(false);

  // ✅ Enhanced smooth scroll with intersection observer
  useEffect(() => {
    const sectionId = searchParams.get("section");

    if (sectionId && !hasScrolled) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const element = document.getElementById(sectionId);

        if (element) {
          // Calculate position with offset for header
          const headerHeight = 150;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerHeight;

          // Smooth scroll with easing
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Add highlight effect
          element.classList.add(
            "transition-all",
            "duration-1000",
            "rounded-lg"
          );

          setHasScrolled(true);
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [searchParams, hasScrolled]);

  // ✅ Reset scroll state when component unmounts or params change
  useEffect(() => {
    setHasScrolled(false);
  }, [searchParams]);

  // ✅ Handle browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setHasScrolled(false);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const generateKey = (level1, level2, level3, level4) =>
    `${level1 || ""}-${level2 || ""}-${level3 || ""}-${level4 || ""}`;

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      [key]: !prev[key],
    }));
  };

  const isDropdownOpen = (key) => openDropdowns[key];

  // Function to generate consistent section IDs
  const generateSectionId = (title) => {
    return title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "";
  };

  return (
    <div>
      <ServiceHeader
        title={
          locale === "ar"
            ? "من تأسيس الأعمال إلى إدارة الثروات وما بعدها، استكشف مجموعتنا الكاملة من خدماتنا في الإمارات العربية المتحدة"
            : "From Business Setup to Wealth & Beyond, Explore Our Full Suite of UAE Services"
        }
      />
      <div className="container secPadding flex flex-col gap-5">
        {servicesData?.map((service) => {
          const sectionId = generateSectionId(service.title);

          return (
            <div
              key={service.id}
              id={sectionId}
              ref={(el) => (sectionRefs.current[sectionId] = el)}
              className="space-y-5 transition-all duration-500 ease-in-out">
              {/* Service Main Title - Original Styling */}
              <LanguageAwareLink
                href={service?.url || "#"}
                className={"flex w-fit"}>
                <Typography
                  as="h2"
                  size="lg"
                  weight="bold"
                  color="secondary"
                  className="py-2 border-b-2 border-secondary hover:text-primary transition-colors hover:border-primary">
                  {service?.title}
                </Typography>
              </LanguageAwareLink>

              {/* Service Content */}
              <div>
                {service?.tabs?.length ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service?.tabs?.map((tab) => (
                      <div key={generateKey(service.id, tab.id)}>
                        {/* Tab Title - Original Styling */}
                        <LanguageAwareLink href={tab?.url || "#"}>
                          <Typography
                            as="h2"
                            size="base"
                            weight="bold"
                            color="gray"
                            className="py-2 border-b border-gray hover:text-primary transition-colors hover:border-primary">
                            {tab?.title}
                          </Typography>
                        </LanguageAwareLink>

                        <div className="space-y-3 mt-4">
                          {tab?.items?.map((item) => (
                            <div
                              className=""
                              key={generateKey(service.id, tab.id, item.id)}>
                              {item?.title === "" ? (
                                /* Empty Title Case - Direct Links */
                                <div>
                                  {item?.links?.map((link) => (
                                    <div
                                      key={generateKey(
                                        service.id,
                                        tab.id,
                                        item.id,
                                        link.id
                                      )}
                                      className="mt-2">
                                      <LanguageAwareLink
                                        href={link?.url || "#"}
                                        className={"flex w-fit"}>
                                        <Typography
                                          as="p"
                                          size="base"
                                          weight="bold"
                                          color="gray"
                                          className="py-1 hover:text-primary transition-colors">
                                          {link?.title}
                                        </Typography>
                                      </LanguageAwareLink>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                /* Item with Title - Original Styling with Dropdown */
                                <div>
                                  <div className="flex items-center justify-between gap-3">
                                    <LanguageAwareLink href={item?.url || "#"}>
                                      <Typography
                                        as="p"
                                        size="base"
                                        weight="bold"
                                        color="gray"
                                        className="py-1 hover:text-primary transition-colors">
                                        {item?.title}
                                      </Typography>
                                    </LanguageAwareLink>
                                    {item?.links?.length > 0 && (
                                      <button
                                        className="text-gray cursor-pointer hover:text-primary transition-colors"
                                        onClick={() =>
                                          toggleDropdown(
                                            generateKey(
                                              service.id,
                                              tab.id,
                                              item.id
                                            )
                                          )
                                        }>
                                        <Icon
                                          icon="icon-park-outline:down"
                                          width="20"
                                          height="20"
                                          className={`transform transition-transform duration-300 ${
                                            isDropdownOpen(
                                              generateKey(
                                                service.id,
                                                tab.id,
                                                item.id
                                              )
                                            )
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                    )}
                                  </div>

                                  {/* Links with Smooth Animation */}
                                  {item?.links?.length > 0 && (
                                    <div
                                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isDropdownOpen(
                                          generateKey(
                                            service.id,
                                            tab.id,
                                            item.id
                                          )
                                        )
                                          ? "max-h-96 opacity-100 mt-2"
                                          : "max-h-0 opacity-0"
                                      }`}>
                                      <div>
                                        {item?.links?.map((link) => (
                                          <div
                                            key={generateKey(
                                              service.id,
                                              tab.id,
                                              item.id,
                                              link.id
                                            )}
                                            className="mt-1">
                                            <LanguageAwareLink
                                              href={link?.url || "#"}
                                              className={"flex w-fit"}>
                                              <Typography
                                                as="p"
                                                size="sm"
                                                weight="medium"
                                                color="gray"
                                                className="py-1 hover:text-primary transition-colors">
                                                {link?.title}
                                              </Typography>
                                            </LanguageAwareLink>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* No Tabs - Regular Items */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service?.items?.map((item) => (
                      <div
                        key={generateKey(service.id, item.id)}
                        className={`${
                          item?.title === ""
                            ? "md:col-span-2 lg:col-span-3"
                            : ""
                        }`}>
                        {/* Item Title - Original Styling */}
                        {item?.title !== "" && (
                          <LanguageAwareLink href={item?.url || "#"}>
                            <Typography
                              as="h2"
                              size="base"
                              weight="bold"
                              color="gray"
                              className="py-2 border-b border-gray hover:text-primary transition-colors hover:border-primary">
                              {item?.title}
                            </Typography>
                          </LanguageAwareLink>
                        )}

                        {/* Item Links with Dropdown Animation */}
                        <div
                          className={`${
                            item?.title === "" &&
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
                          } space-y-3 mt-4`}>
                          {item?.links?.map((linkItem) => (
                            <div
                              key={generateKey(
                                service.id,
                                item.id,
                                linkItem.id
                              )}>
                              {/* Link Item with Title */}
                              {linkItem.title && (
                                <div>
                                  <div className="flex items-center justify-between gap-3">
                                    {linkItem.url ? (
                                      <LanguageAwareLink
                                        href={linkItem.url || "#"}
                                        className={`${
                                          item?.title === ""
                                            ? "w-full"
                                            : "w-fit"
                                        }`}>
                                        <Typography
                                          as="h3"
                                          size="base"
                                          weight="bold"
                                          color="gray"
                                          className={`${
                                            item?.title === ""
                                              ? "py-2 border-b border-gray hover:border-primary"
                                              : "py-1"
                                          } hover:text-primary transition-colors`}>
                                          {linkItem.title}
                                        </Typography>
                                      </LanguageAwareLink>
                                    ) : (
                                      <Typography
                                        as="h3"
                                        size="base"
                                        weight="bold"
                                        color="gray"
                                        className="py-1 hover:text-primary transition-colors">
                                        {linkItem.title}
                                      </Typography>
                                    )}

                                    {/* Dropdown for nested items */}
                                    {(linkItem.items?.length > 0 ||
                                      linkItem.links?.length > 0) && (
                                      <button
                                        className="text-gray cursor-pointer flex-shrink-0 hover:text-primary transition-colors"
                                        onClick={() =>
                                          toggleDropdown(
                                            generateKey(
                                              service.id,
                                              item.id,
                                              linkItem.id
                                            )
                                          )
                                        }>
                                        <Icon
                                          icon="icon-park-outline:down"
                                          width="20"
                                          height="20"
                                          className={`transform transition-transform duration-300 ${
                                            isDropdownOpen(
                                              generateKey(
                                                service.id,
                                                item.id,
                                                linkItem.id
                                              )
                                            )
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>
                                    )}
                                  </div>

                                  {/* Nested Links with Smooth Animation */}
                                  {linkItem.links &&
                                    linkItem.links.length > 0 && (
                                      <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                          isDropdownOpen(
                                            generateKey(
                                              service.id,
                                              item.id,
                                              linkItem.id
                                            )
                                          )
                                            ? "max-h-96 opacity-100 mt-2"
                                            : "max-h-0 opacity-0"
                                        }`}>
                                        <div>
                                          {linkItem.links.map((nestedLink) => (
                                            <div
                                              key={generateKey(
                                                service.id,
                                                item.id,
                                                linkItem.id,
                                                nestedLink.id
                                              )}
                                              className="mt-1 ml-3">
                                              <LanguageAwareLink
                                                href={nestedLink.url || "#"}
                                                className={"flex w-fit"}>
                                                <Typography
                                                  as="p"
                                                  size="sm"
                                                  weight="medium"
                                                  color="gray"
                                                  className="py-1 hover:text-primary transition-colors">
                                                  {nestedLink.title}
                                                </Typography>
                                              </LanguageAwareLink>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                  {/* Nested Items with Smooth Animation */}
                                  {linkItem.items &&
                                    linkItem.items.length > 0 && (
                                      <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                          isDropdownOpen(
                                            generateKey(
                                              service.id,
                                              item.id,
                                              linkItem.id
                                            )
                                          )
                                            ? "max-h-96 opacity-100 mt-2"
                                            : "max-h-0 opacity-0"
                                        }`}>
                                        <div>
                                          {linkItem.items.map((nestedItem) => (
                                            <div
                                              key={generateKey(
                                                service.id,
                                                item.id,
                                                linkItem.id,
                                                nestedItem.id
                                              )}
                                              className="mt-1">
                                              <LanguageAwareLink
                                                href={nestedItem.url || "#"}
                                                className={"flex w-fit"}>
                                                <Typography
                                                  as="p"
                                                  size="sm"
                                                  weight="medium"
                                                  color="gray"
                                                  className="py-1 hover:text-primary transition-colors">
                                                  {nestedItem.title}
                                                </Typography>
                                              </LanguageAwareLink>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                </div>
                              )}

                              {/* Direct Links without Title */}
                              {!linkItem.title && linkItem.links && (
                                <div className="space-y-2">
                                  {linkItem.links.map((directLink) => (
                                    <div
                                      key={generateKey(
                                        service.id,
                                        item.id,
                                        linkItem.id,
                                        directLink.id
                                      )}
                                      className="mt-1">
                                      <LanguageAwareLink
                                        href={directLink.url || "#"}
                                        className={"flex w-fit"}>
                                        <Typography
                                          as="p"
                                          size="sm"
                                          weight="medium"
                                          color="gray"
                                          className="py-1 hover:text-primary transition-colors">
                                          {directLink.title}
                                        </Typography>
                                      </LanguageAwareLink>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewAllService;
