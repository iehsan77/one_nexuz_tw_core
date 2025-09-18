import {
  CallSVG,
  EmailSVG,
  FacebookSVG,
  InstagramSVG,
  LinkedinSVG,
  MailSVG,
  PhoneSVG,
  PinPointSVG,
  WPSVG,
  XSVG,
} from "@/public/assets/icons/SVGIcons";

export const contactDetail = {
  mobileNo: "(+971) 555-0105",
  whatApp: "+971505082378",
  telNumber: "(+971) 555-0105",
  email: "Info@onenexuz.com",
  location: "Hor Al Anz, Abu Hail, Dubai, United Arab Emirates",
};

export const contactItems = [
  { icon: <MailSVG />, value: contactDetail.email },
  { icon: <CallSVG />, value: contactDetail.phone },
  { icon: <PhoneSVG />, value: contactDetail.whatApp },
  { icon: <PinPointSVG />, value: contactDetail.location },
];
export const navlinks = {
  en: [
    // { name: "Home", link: "/" },
    // { name: "About Us", link: "/about-us" },
    // { name: "New", link: "/new" },
    // { name: "Used", link: "/used" },
    {
      name: "Services",
      link: "#",
      pageLinks: [
        { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
        { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
        { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
        { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
        { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
      ],
    },
    {
      name: "Resources",
      link: "/used",
      pageLinks: [
        { title: "Insights", paragraph: "Stay updated with the latest trends, news, and expert opinions in the automotive world.", link: "/services" },
        { title: "Guides", paragraph: "Navigate buying, selling, and owning a car with step-by-step help and expert tips.", link: "/services" },
        { title: "Car Lease Calculator", paragraph: "Estimate your monthly lease payments easily and plan your budget with confidence.", link: "/services" },
        { title: "Careers", paragraph: "Join our passionate team and drive your future with exciting opportunities at Car Solutions.", link: "/services" },
      ],
      blogLinks: [
        {
          title: "The Future of Electric Vehicles",
          paragraph: "Explore how electric cars are reshaping the way we drive and think about mobility.",
          link: "/blog/market-insights",
          imageURL: "/assets/images/image_37.webp",
        },
        {
          title: "Essential Tips for Selling Your Car",
          paragraph: "Discover smart strategies to boost your car’s resale value and sell with confidence.",
          link: "/blog/car-buying-guide",
          imageURL: "/assets/images/image_38.webp",
        },
      ],
    },

  ],
  ar: [
    { name: "الرئيسية", link: "/" },
    { name: "من نحن", link: "/about-us" },
    { name: "الجديدة", link: "/new" },
    { name: "المستعملة", link: "/used" },
    {
      name: "الخدمات",
      link: "#",
      pageLinks: [
        { title: "الصيانة والخدمة", paragraph: "حافظ على تشغيل سيارتك بسلاسة مع الرعاية المتخصصة والفحوصات الروتينية.", link: "/services" },
        { title: "الغسيل والتلميع", paragraph: "أعد اللمعان الأصلي بسيارة نظيفة ومُعتنى بها.", link: "/services" },
        { title: "تأمين السيارات", paragraph: "احمِ سيارتك بتغطية تأمينية شاملة تناسب احتياجاتك.", link: "/services" },
        { title: "تقييم السيارة", paragraph: "احصل على تقييم دقيق وسريع لسيارتك حسب السوق.", link: "/services" },
        { title: "تمويل السيارات", paragraph: "قد السيارة الآن وادفع لاحقًا بتمويل مرن يناسب ميزانيتك.", link: "/services" },
      ],
    },
    {
      name: "الموارد",
      link: "/used",
      pageLinks: [
        { title: "الصيانة والخدمة", paragraph: "حافظ على سيارتك تعمل بسلاسة مع العناية المتخصصة والفحوصات الدورية.", link: "/services" },
        { title: "الغسيل والتلميع", paragraph: "أعد اللمعان الأصلي بسيارة نظيفة ومُعتنى بها.", link: "/services" },
        { title: "تأمين السيارات", paragraph: "احمِ سيارتك بتغطية تأمينية شاملة تناسب احتياجاتك.", link: "/services" },
        { title: "تقييم السيارة", paragraph: "احصل على تقييم دقيق وسريع لسيارتك حسب السوق.", link: "/services" },
      ],
    },
    { name: "العلامات التجارية", link: "/brands" },
    { name: "اتصل بنا", link: "/contact-us" },
  ],
};
/**
 |--------------------------------------------------
 | Footer Section Start
 |--------------------------------------------------
 */
export const column1 = {
  links: [
    { title_en: "About Us", title_ar: "الرئيسية", links: "/about-us" },
    { title_en: "Contact Us", title_ar: "المدونة", links: "/contact-us" },
    { title_en: "Blog", title_ar: "الرئيسية", links: "/blog" },
    { title_en: "Cars for Sale", title_ar: "استئجار سيارة", links: "/listing" },
    { title_en: "Featured Cars", title_ar: "الماركات", links: "/listing" },
    { title_en: "Brands", title_ar: "قارن سيارتك", links: "/listing", },
  ],
};
export const allBrandData = {
  links: [
    { title_en: "Insights", title_ar: "الرئيسية", links: "/blog" },
    { title_en: "Guides", title_ar: "استئجار سيارة", links: "/guide" },
    { title_en: "Car Lease Calculator", title_ar: "الماركات", links: "/car-lease" },
    { title_en: "Career", title_ar: "قارن سيارتك", links: "/career", },
  ],
}
export const bodyTypeData = {
  links: [
    { title_en: "Browse All Cars", title_ar: "الرئيسية", links: "/listing" },
    { title_en: "Featured Listing", title_ar: "استئجار سيارة", links: "/listing" },
    { title_en: "Used Cars for Sale", title_ar: "الماركات", links: "/listing" },
  ],
}
export const categoryData = {
  links: [
    { title_en: "List Your Car", title_ar: "الرئيسية", links: "/listing/listing-form" },
  ],
}
export const servicesData = {
  links: [
    { title_en: "Maintenance & Servicing", title_ar: "الرئيسية", links: "/services" },
    { title_en: "Detailing & Wash", title_ar: "استئجار سيارة", links: "/services" },
    { title_en: "Car insurance", title_ar: "الماركات", links: "/car-lease" },
    { title_en: "Car Finance", title_ar: "الماركات", links: "/car-lease" },
    { title_en: "Car Evaluation", title_ar: "الماركات", links: "/car-lease" },
  ],
}
export const socialLinks = [
  { label: "Facebook", link: "http://facebook.com/", icon: <FacebookSVG /> },
  { label: "X", link: "https://x.com/", icon: <XSVG /> },
  { label: "Instagram", link: "http://instagram.com/", icon: <InstagramSVG /> },
];
export const socialFooterLinks = [
  { label: "Facebook", link: "http://facebook.com/", icon: <FacebookSVG /> },
  { label: "Instagram", link: "http://instagram.com/", icon: <InstagramSVG /> },
  { label: "LinkedIn", link: "https://linkedin/", icon: <LinkedinSVG /> },
];
export const topHeadContent = [
  { label: contactDetail.email, link: `mailto:${contactDetail.email}`, icon: <EmailSVG /> },
  { label: contactDetail.telNumber, link: `tel:${contactDetail.telNumber}`, icon: <CallSVG /> },
];
/**
|--------------------------------------------------
| Buttons
|--------------------------------------------------
*/
export const btnTextEn = {
  view_all_brands: "View All Brands",
  view_more: "View More",
  apply_now: "Apply Now",
  read_more: "Read more",
  view_all: "View All",
  book_now: "Book Your Car Now",
  view_all_sports: "View All Sports",
  view_all_suvs: "View All SUVs",
  view_all_luxury: "View All Luxury Cars",
  view_all_blogs: "View All Insights",
  View_All_Guides: "View All Guides",
  View_All_Services: "View All Services",
  view_all_generic: "View All",
  view_all_cars: "View All Cars",
  contact_us: "Contact Us",
  tag: "Tags",
};

// Arabic
export const btnTextAr = {
  view_all_brands: "عرض جميع العلامات التجارية",
  view_all: "عرض الكل",
  view_more: "عرض المزيد",
  _more: "عرض المزيد",
  read_more: "عرض المزيد",
  book_now: "احجز سيارتك الآن",
  view_all_sports: "عرض جميع السيارات الرياضية",
  view_all_suvs: "عرض جميع سيارات الدفع الرباعي",
  view_all_luxury: "عرض جميع السيارات الفاخرة",
  view_all_blogs: "عرض جميع المدونات",
  View_All_Guides: "عرض جميع المدونات",
  View_All_Services: "عرض جميع المدونات",
  view_all_generic: "عرض الكل",
  view_all_cars: "عرض الكل",
  contact_us: "عرض الكل",
  tag: "عرض الكل",
};