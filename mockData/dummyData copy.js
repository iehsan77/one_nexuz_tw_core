import {
  CallSVG,
  EmailSVG,
  FacebookSVG,
  FastResSVG,
  FbSVG,
  Icon1SVG,
  Icon2SVG,
  InstagramSVG,
  InSVG,
  LinkedinSVG,
  LoalExpertSVG,
  MailSVG,
  MultilingualSVG,
  PhoneSVG,
  PinPointSVG,
  WASVG,
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
  { icon: <WPSVG />, value: contactDetail.whatApp },
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
      name: "Business Setup",
      link: "#",
      pageLinks: [
        { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
        { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
        { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
        { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
        { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
      ],
    },
    // {
    //   name: "Corporate Services",
    //   link: "#",
    //   pageLinks: [
    //     { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
    //     { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
    //     { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
    //     { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
    //     { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
    //   ],
    // },
    // {
    //   name: "Banking & Wealth",
    //   link: "#",
    //   pageLinks: [
    //     { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
    //     { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
    //     { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
    //     { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
    //     { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
    //   ],
    // },
    // {
    //   name: "Digital Tech",
    //   link: "#",
    //   pageLinks: [
    //     { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
    //     { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
    //     { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
    //     { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
    //     { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
    //   ],
    // },
    // {
    //   name: "Millionaire & Billionaire",
    //   link: "#",
    //   pageLinks: [
    //     { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
    //     { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
    //     { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
    //     { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
    //     { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
    //   ],
    // },
    // {
    //   name: "Logistics & Relocation",
    //   link: "#",
    //   pageLinks: [
    //     { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
    //     { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
    //     { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
    //     { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
    //     { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
    //   ],
    // },
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
| Login Journy
|--------------------------------------------------
*/

export const column2 = {
  title: "Sports Car",
  links: [
    {
      name: "Porsche 911 Carrera",
      link: "/",
    },
    {
      name: "Bentley Continental",
      link: "/",
    },
    {
      name: "Lamborghini Huracan STO",
      link: "/",
    },
    {
      name: "Audi RS7",
      link: "/",
    },
  ],
};
export const column3 = {
  title: "SUV’s",
  links: [
    {
      name: "BMW X6",
      link: "/",
    },
    {
      name: "Chevrolet Traverse",
      link: "/",
    },
    {
      name: "GMC Yukon Denali",
      link: "/",
    },
    {
      name: "Audi RSQ3",
      link: "/",
    },
  ],
};
export const column4 = {
  title: "Luxury Cars",
  links: [
    {
      name: "Lamborghini Huracan Evo Spyder",
      link: "/",
    },
    {
      name: "Rolls Royce Ghost",
      link: "/",
    },
    {
      name: "Chevrolet Corvette",
      link: "/",
    },
    {
      name: "BMW 840i Cabrio",
      link: "/",
    },
  ],
};
export const column5 = {
  title_en: "Inquiries & Support",
  title_ar: "الاستفسارات والدعم",
  links: [
    {
      icon: <CallSVG />,
      name_en: "+971505082290",
      name_ar: "+971505082290",
      link: "tel:+971505082290",
    },
    {
      icon: <WPSVG />,
      name_en: "+971505082378",
      name_ar: "+971505082378",
      link: "https://wa.me/971505082378",
    },
    {
      icon: <PhoneSVG />,
      name_en: "+97143243226",
      name_ar: "+97143243226",
      link: "tel:+97143243226",
    },
    {
      icon: <PinPointSVG />,
      name_en:
        "HJK rent a car · U.A.E, MRM Building - SHOP # 48 - ABU HAIL - Dubai - United Arab Emirates",
      name_ar:
        "شركة إتش جي كي لتأجير السيارات · الإمارات العربية المتحدة، مبنى إم آر إم - محل رقم 48 - أبو هيل - دبي - الإمارات العربية المتحدة",
      link: "https://www.google.com/maps/dir/24.8250368,67.0728192/HJK+rent+a+car,+U.A.E,+MRM+Building+-+SHOP+%23+48+-+ABU+HAIL+-+Dubai+-+United+Arab+Emirates/@25.9413655,54.4745203,8z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5dc4007d6b41:0xc83d4094c8b30556!2m2!1d55.3521774!2d25.2822075?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <EmailSVG />,
      name_en: contactDetail.email2,
      name_ar: contactDetail.email2,
      link: contactDetail.email,
    },
  ],
};
/**
|--------------------------------------------------
| Section Data
|--------------------------------------------------
*/
export const cardData1 = [
  {
    id: 1,
    title: "Porsche 911 Carrera",
    model: "Convertible",
    price: 120,
    imageUrl: "/assets/images/image_28.webp",
    hoverImageUrl: "/assets/images/image_29.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "2 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 2,
    title: "Range Rover Sport",
    model: "Sedan",
    price: 350,
    imageUrl: "/assets/images/image_20.webp",
    hoverImageUrl: "/assets/images/image_21.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Available", "8 Unit"],
  },
  {
    id: 3,
    title: "Range Rover Sport",
    model: "Hatchback",
    price: 350,
    imageUrl: "/assets/images/image_01.webp",
    hoverImageUrl: "/assets/images/image_13.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
];
export const cardData2 = [
  {
    id: 1,
    title: "Porsche 911 Carrera",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_36.webp",
    hoverImageUrl: "/assets/images/image_37.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "2 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 2,
    title: "Bentley Continental",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_30.webp",
    hoverImageUrl: "/assets/images/image_31.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Available", "8 Unit"],
  },
  {
    id: 3,
    title: "Lamborghini Huracan",
    model: "Sedan",
    price: "405",
    imageUrl: "/assets/images/image_22.webp",
    hoverImageUrl: "/assets/images/image_23.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
  {
    id: 4,
    title: "Audi RS7",
    model: "Hatchback",
    price: "505",
    imageUrl: "/assets/images/image_14.webp",
    hoverImageUrl: "/assets/images/image_15.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
];
export const cardData3 = [
  {
    id: 1,
    title: "Audi RSQ3",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_38.webp",
    hoverImageUrl: "/assets/images/image_39.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "2 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 2,
    title: "BMW X6",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_32.webp",
    hoverImageUrl: "/assets/images/image_33.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Available", "8 Unit"],
  },
  {
    id: 3,
    title: "GMC Yukon Denali",
    model: "Sedan",
    price: "405",
    imageUrl: "/assets/images/image_24.webp",
    hoverImageUrl: "/assets/images/image_25.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
  {
    id: 4,
    title: "Chevrolet Traverse",
    model: "Hatchback",
    price: "505",
    imageUrl: "/assets/images/image_16.webp",
    hoverImageUrl: "/assets/images/image_17.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
];
export const cardData4 = [
  {
    id: 1,
    title: "Lamborghini Huracan",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_40.webp",
    hoverImageUrl: "/assets/images/image_41.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "2 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 2,
    title: "Rolls Royce Ghost",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_34.webp",
    hoverImageUrl: "/assets/images/image_35.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 3,
    title: "Chevrolet Corvette",
    model: "Sedan",
    price: "405",
    imageUrl: "/assets/images/image_26.webp",
    hoverImageUrl: "/assets/images/image_27.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Available", "8 Unit"],
  },
  {
    id: 4,
    title: "BMW 840i Cabrio",
    model: "Hatchback",
    price: "505",
    imageUrl: "/assets/images/image_30.webp",
    hoverImageUrl: "/assets/images/image_19.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
];
export const allProductsData = [
  {
    id: 1,
    title: "Porsche 911 Carrera",
    model: "Convertible",
    price: 120,
    imageUrl: "/assets/images/image_28.webp",
    hoverImageUrl: "/assets/images/image_29.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "2 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 2,
    title: "Range Rover Sport",
    model: "Sedan",
    price: 350,
    imageUrl: "/assets/images/image_20.webp",
    hoverImageUrl: "/assets/images/image_21.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Available", "8 Unit"],
  },
  {
    id: 3,
    title: "Range Rover Sport",
    model: "Hatchback",
    price: 350,
    imageUrl: "/assets/images/image_01.webp",
    hoverImageUrl: "/assets/images/image_13.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
  {
    id: 1,
    title: "Porsche 911 Carrera",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_36.webp",
    hoverImageUrl: "/assets/images/image_37.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "2 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 2,
    title: "Bentley Continental",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_30.webp",
    hoverImageUrl: "/assets/images/image_31.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Available", "8 Unit"],
  },
  {
    id: 3,
    title: "Lamborghini Huracan",
    model: "Sedan",
    price: "405",
    imageUrl: "/assets/images/image_22.webp",
    hoverImageUrl: "/assets/images/image_23.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
  {
    id: 4,
    title: "Audi RS7",
    model: "Hatchback",
    price: "505",
    imageUrl: "/assets/images/image_14.webp",
    hoverImageUrl: "/assets/images/image_15.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
  {
    id: 1,
    title: "Audi RSQ3",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_38.webp",
    hoverImageUrl: "/assets/images/image_39.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "2 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Unavailable"],
  },
  {
    id: 2,
    title: "BMW X6",
    model: "Convertible",
    price: "120",
    imageUrl: "/assets/images/image_32.webp",
    hoverImageUrl: "/assets/images/image_33.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Available", "8 Unit"],
  },
  {
    id: 3,
    title: "GMC Yukon Denali",
    model: "Sedan",
    price: "405",
    imageUrl: "/assets/images/image_24.webp",
    hoverImageUrl: "/assets/images/image_25.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
  {
    id: 4,
    title: "Chevrolet Traverse",
    model: "Hatchback",
    price: "505",
    imageUrl: "/assets/images/image_16.webp",
    hoverImageUrl: "/assets/images/image_17.webp",
    features: [
      { name: "Automatic", icon: "/assets/icons/icon_09.svg" },
      { name: "5 Seats", icon: "/assets/icons/icon_10.svg" },
      { name: "Petrol", icon: "/assets/icons/icon_11.svg" },
    ],
    tags: ["Maintenance"],
  },
];
export const dummyFiltersData = {
  Categories: [
    { id: 101, title: "All" },
    { id: 102, title: "Business" },
    { id: 103, title: "Sports" },
    { id: 103, title: "Classic" },
    { id: 101, title: "Economy" },
    { id: 102, title: "Electric" },
    { id: 103, title: "Luxury" },
    { id: 103, title: "VIP" },
    { id: 101, title: "Prestige" },
  ],
  Brands: [
    { id: 101, title: "Audi" },
    { id: 102, title: "BMW" },
    { id: 103, title: "Mercedes" },
    { id: 103, title: "Ferrari" },
    { id: 101, title: "Maclaren" },
    { id: 102, title: "Lexus" },
    { id: 103, title: "Porsche" },
    { id: 103, title: "Lamborghini" },
    { id: 101, title: "Tesla" },
  ],
  "Body Type": [
    { id: 101, title: "All" },
    { id: 102, title: "Compact" },
    { id: 103, title: "Sedan" },
    { id: 103, title: "Coupe" },
    { id: 101, title: "Hatchback" },
    { id: 102, title: "Pickup" },
    { id: 103, title: "Convertible" },
    { id: 103, title: "SUV" },
    { id: 101, title: "Van" },
    { id: 101, title: "Prestige" },
  ],
  "Body Color": [
    { id: 101, title: "Black" },
    { id: 102, title: "White" },
    { id: 103, title: "Gray" },
    { id: 103, title: "Silver" },
    { id: 101, title: "Red" },
    { id: 102, title: "Blue" },
    { id: 103, title: "Brown" },
    { id: 103, title: "Gold" },
    { id: 101, title: "Green" },
    { id: 101, title: "Orange" },
    { id: 101, title: "Burgundy" },
  ],
};
export const carHeroImages = [
  { id: 1, image_url: "/assets/images/image_18.webp" },
  { id: 2, image_url: "/assets/images/image_37.webp" },
  { id: 3, image_url: "/assets/images/image_42.webp" },
  { id: 4, image_url: "/assets/images/image_40.webp" },
  { id: 5, image_url: "/assets/images/image_01.webp" },
];
export const carCompareData = {
  days: 7,
  price: "2,450",
  list: [
    {
      imageUrl: "/assets/icons/icon_12.svg",
      description: "Available Now",
    },
    {
      imageUrl: "/assets/icons/icon_13.svg",
      description: "No Deposit Needed",
    },
    {
      imageUrl: "/assets/icons/check_icon.svg",
      description: "Mileage limit - 250 km for 1 Day",
    },
    {
      imageUrl: "/assets/icons/check_icon.svg",
      description: "Free delivery in Dubai",
    },
    {
      imageUrl: "/assets/icons/check_icon.svg",
      description: "Cash, Credit/debit cards accepted",
    },
  ],
};

export const specificationsData = {
  specs: [
    { label: "Make", value: "Audi", icon: "/assets/icons/icon_14.svg" },
    { label: "Model", value: "RS7", icon: "/assets/icons/icon_14.svg" },
    { label: "Horse Power", value: "591", icon: "/assets/icons/icon_14.svg" },
    { label: "Year", value: "2023", icon: "/assets/icons/icon_14.svg" },
    {
      label: "Drive Train",
      value: "All Wheel Drive",
      icon: "/assets/icons/icon_16.svg",
    },
    { label: "Body Style", value: "Sedan", icon: "/assets/icons/icon_14.svg" },
    {
      label: "Engine",
      value: "4L Twin-turbo V8",
      icon: "/assets/icons/icon_15.svg",
    },
    {
      label: "Transmission",
      value: "Automatic",
      icon: "/assets/icons/icon_18.svg",
    },
    { label: "Seats", value: "4", icon: "/assets/icons/icon_17.svg" },
    {
      label: "Interior Color",
      value: "Black",
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: "Exterior Color",
      value: "White",
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: "0-100 KM/h",
      value: "3.7 Seconds",
      icon: "/assets/icons/icon_14.svg",
    },
    { label: "Fuel Type", value: "Petrol", icon: "/assets/icons/icon_14.svg" },
  ],
  title: "Audi RS7 (White), 2023 Rental in Dubai, UAE",
  paragraph:
    "You can rent the Audi RS7 (White), 2023 in Dubai, UAE and experience a perfect blend of luxury and performance. The rental rates are AED 416 per day, AED 2,522 per week, or AED 8,317 per month. These prices include basic insurance and a standard mileage limit of 250 km per day, 1,400 km per week, or 3,500 km per month. In case of exceeding the mileage limit, an additional charge of AED 2 per extra kilometer will apply. Best of all, there’s no security deposit required. So don’t wait any longer—if you want to drive this powerful and stylish car, contact us now on WhatsApp for bookings or any questions you may have.",
};

export const brandImage = [
  {
    title: " Alfa Romeo",
    ImageURL: "/assets/brand/brand_01.webp",
    link: "/product",
  },
  {
    title: " Aston Martin",
    ImageURL: "/assets/brand/brand_02.webp",
    link: "/product",
  },
  {
    title: " Audi",
    ImageURL: "/assets/brand/brand_03.webp",
    link: "/product",
  },
  {
    title: " Bentley",
    ImageURL: "/assets/brand/brand_04.webp",
    link: "/product",
  },
  {
    title: " BMW",
    ImageURL: "/assets/brand/brand_05.webp",
    link: "/product",
  },
  {
    title: "Chevrolet",
    ImageURL: "/assets/brand/brand_06.webp",
    link: "/product",
  },
  {
    title: "Dodge",
    ImageURL: "/assets/brand/brand_07.webp",
    link: "/product",
  },
  {
    title: "Ferrari",
    ImageURL: "/assets/brand/brand_08.webp",
    link: "/product",
  },
  {
    title: "Fiat",
    ImageURL: "/assets/brand/brand_09.webp",
    link: "/product",
  },
  {
    title: "Jeep",
    ImageURL: "/assets/brand/brand_10.webp",
    link: "/product",
  },
  {
    title: "McLaren",
    ImageURL: "/assets/brand/brand_11.webp",
    link: "/product",
  },
  {
    title: "Renault",
    ImageURL: "/assets/brand/brand_12.webp",
    link: "/product",
  },
  {
    title: "Ford",
    ImageURL: "/assets/brand/brand_13.webp",
    link: "/product",
  },
  {
    title: "Kia",
    ImageURL: "/assets/brand/brand_14.webp",
    link: "/product",
  },
  {
    title: "Mercedes",
    ImageURL: "/assets/brand/brand_15.webp",
    link: "/product",
  },
  {
    title: "Rolls Royce",
    ImageURL: "/assets/brand/brand_16.webp",
    link: "/product",
  },
  {
    title: "GMC",
    ImageURL: "/assets/brand/brand_17.webp",
    link: "/product",
  },
  {
    title: "Lamborghini",
    ImageURL: "/assets/brand/brand_18.webp",
    link: "/product",
  },
  {
    title: "MG",
    ImageURL: "/assets/brand/brand_19.webp",
    link: "/product",
  },
  {
    title: "Suzuki",
    ImageURL: "/assets/brand/brand_20.webp",
    link: "/product",
  },
  {
    title: "Honda",
    ImageURL: "/assets/brand/brand_21.webp",
    link: "/product",
  },
  {
    title: "Lexus",
    ImageURL: "/assets/brand/brand_22.webp",
    link: "/product",
  },
  {
    title: "MINI",
    ImageURL: "/assets/brand/brand_23.webp",
    link: "/product",
  },
  {
    title: "Tesla",
    ImageURL: "/assets/brand/brand_24.webp",
    link: "/product",
  },
  {
    title: "Hyundai",
    ImageURL: "/assets/brand/brand_25.webp",
    link: "/product",
  },
  {
    title: "Land Rover",
    ImageURL: "/assets/brand/brand_26.webp",
    link: "/product",
  },
  {
    title: "Mitsubishi",
    ImageURL: "/assets/brand/brand_27.webp",
    link: "/product",
  },
  {
    title: "Toyota",
    ImageURL: "/assets/brand/brand_28.webp",
    link: "/product",
  },
  {
    title: "Infiniti",
    ImageURL: "/assets/brand/brand_29.webp",
    link: "/product",
  },
  {
    title: "Lincoln",
    ImageURL: "/assets/brand/brand_30.webp",
    link: "/product",
  },
  {
    title: "Nissan",
    ImageURL: "/assets/brand/brand_31.webp",
    link: "/product",
  },
  {
    title: "Volkswagen",
    ImageURL: "/assets/brand/brand_32.webp",
    link: "/product",
  },
  {
    title: "JAC",
    ImageURL: "/assets/brand/brand_33.webp",
    link: "/product",
  },
  {
    title: "Maserati",
    ImageURL: "/assets/brand/brand_34.webp",
    link: "/product",
  },
  {
    title: "Peugeot",
    ImageURL: "/assets/brand/brand_35.webp",
    link: "/product",
  },
  {
    title: "Skoda",
    ImageURL: "/assets/brand/brand_36.webp",
    link: "/product",
  },
  {
    title: "Jaguar",
    ImageURL: "/assets/brand/brand_37.webp",
    link: "/product",
  },
  {
    title: "Mazda",
    ImageURL: "/assets/brand/brand_38.webp",
    link: "/product",
  },
  {
    title: "Porsche",
    ImageURL: "/assets/brand/brand_39.webp",
    link: "/product",
  },
];

export const Categories = [
  { ImageURL: "/assets/images/image_64.webp", title: "Muscle " },
  { ImageURL: "/assets/images/image_65.webp", title: "Luxury " },
  { ImageURL: "/assets/images/image_66.webp", title: "Super " },
  { ImageURL: "/assets/images/image_67.webp", title: "Vintage " },
  { ImageURL: "/assets/images/image_68.webp", title: "Offroad " },
  { ImageURL: "/assets/images/image_69.webp", title: "Economy " },
  { ImageURL: "/assets/images/image_70.webp", title: "Business " },
  { ImageURL: "/assets/images/image_71.webp", title: "Sports " },
];
export const BodyTypeData = [
  { ImageURL: "/assets/images/frame2147224590.webp", title_en: "Sedan", title_ar: "SUV" },
  { ImageURL: "/assets/images/frame2147224591.webp", title_en: "Truck", title_ar: "Estate" },
  { ImageURL: "/assets/images/frame2147224592.webp", title_en: "Coupe", title_ar: "Saloon" },
  { ImageURL: "/assets/images/frame2147224593.webp", title_en: "SUV", title_ar: "Hatchback" },
  { ImageURL: "/assets/images/frame2147224594.webp", title_en: "Hatchback", title_ar: "Coupe" },
];

export const assetsData1 = {
  heading: "Unrivaled Luxury on Wheels",
  paragraph: [
    "Whether it's a red-carpet event, a weekend escape, or a statement-making business trip our collection of exotic, high-performance vehicles is designed for those who demand more than just transportation.",
    "Choose from iconic brands like Lamborghini, Rolls-Royce, Bentley, and Ferrari, all available with flexible rental options and white-glove service from start to finish.",
  ],
  imageUrl: "/assets/images/image_50.webp",
  imageAlt: "Luxury rental car",
  imageW: 640,
  imageH: 418,
  reverse: false,
  callNowBtn: true,
  text: "Book Your Car Now",
  href: "listing",
};
// ================
export const assetsDataEn1 = {
  heading2: "Ready to Sell Your Car?",
  heading: "Let Car Solutions Handle It for You.",
  paragraph: [
    "Get the best value for your vehicle fast, secure, and hassle-free. Whether you're upgrading or simply letting go, our expert team and trusted network make selling your car easier than ever.",
  ],
  listTitle: "Why sell with Car Solutions?",
  list: [
    "^Instant Valuation :^ Know your car’s worth in seconds",
    "^Trusted Buyers :^ We connect you with verified buyers only",
    "^Free Inspection & Listing :^ We’ll prep and list your car for maximum visibility",
    "^Get Paid Quickly :^ Fast, secure payment when your car sells",
  ],
  imageUrl: "/assets/images/image_13.webp",
  imageAlt: "Luxury rental car",
  imageW: 620,
  imageH: 520,
  reverse: false,
  callNowBtn: true,
  text: "List Your Car Now",
  href: "/listing/listing-form",
};
export const assetsListingFormData1En = {
  heading: "Ready to Sell Your Car? Let Car Solutions Handle It for You.",
  paragraph: [
    "Get the best value for your vehicle fast, secure, and hassle-free. Whether you're upgrading or simply letting go, our expert team and trusted network make selling your car easier than ever.",
  ],
  listTitle: "Why sell with Car Solutions?",
  list: [
    "^Instant Valuation :^ Know your car’s worth in seconds",
    "^Trusted Buyers :^ We connect you with verified buyers only",
    "^Free Inspection & Listing :^ We’ll prep and list your car for maximum visibility",
    "^Get Paid Quickly :^ Fast, secure payment when your car sells",
  ],
  imageUrl: "/assets/images/image_13.webp",
  imageAlt: "Luxury rental car",
  imageW: 620,
  imageH: 520,
  reverse: false,
};
export const assetsDataAr1 = {
  heading: "فخامة لا مثيل لها على عجلات",
  paragraph: [
    "سواء كانت مناسبة بسجادة حمراء، أو عطلة نهاية أسبوع، أو رحلة عمل تلفت الأنظار، فإن مجموعتنا من السيارات الفاخرة وعالية الأداء مصممة لأولئك الذين يطلبون أكثر من مجرد وسيلة نقل.",
    "اختر من علامات تجارية شهيرة مثل لامبورغيني، رولز رويس، بنتلي، وفيراري، مع خيارات تأجير مرنة وخدمة فاخرة من البداية إلى النهاية.",
  ],
  imageUrl: "/assets/images/image_13.webp",
  imageAlt: "سيارة فاخرة للإيجار",
  imageW: 620,
  imageH: 520,
  reverse: false,
  callNowBtn: true,
  text: "احجز سيارتك الآن",
  href: "/listing/listing-form",
};
export const assetsListingFormData1Ar = {
  heading: "فخامة لا مثيل لها على عجلات",
  paragraph: [
    "سواء كانت مناسبة بسجادة حمراء، أو عطلة نهاية أسبوع، أو رحلة عمل تلفت الأنظار، فإن مجموعتنا من السيارات الفاخرة وعالية الأداء مصممة لأولئك الذين يطلبون أكثر من مجرد وسيلة نقل.",
    "اختر من علامات تجارية شهيرة مثل لامبورغيني، رولز رويس، بنتلي، وفيراري، مع خيارات تأجير مرنة وخدمة فاخرة من البداية إلى النهاية.",
  ],
  imageUrl: "/assets/images/image_13.webp",
  imageAlt: "سيارة فاخرة للإيجار",
  imageW: 620,
  imageH: 520,
  reverse: false,
  callNowBtn: true,
  text: "احجز سيارتك الآن",
  href: "/listing",
};
export const assetsDatahomeAr3 = {
  heading: "فخامة لا مثيل لها على عجلات",
  paragraph: [
    "سواء كانت مناسبة بسجادة حمراء، أو عطلة نهاية أسبوع، أو رحلة عمل تلفت الأنظار، فإن مجموعتنا من السيارات الفاخرة وعالية الأداء مصممة لأولئك الذين يطلبون أكثر من مجرد وسيلة نقل.",
    "اختر من علامات تجارية شهيرة مثل لامبورغيني، رولز رويس، بنتلي، وفيراري، مع خيارات تأجير مرنة وخدمة فاخرة من البداية إلى النهاية.",
  ],
  imageUrl: "/assets/images/image_33.webp",
  imageAlt: "سيارة فاخرة للإيجار",
  imageW: 620,
  imageH: 483,
  reverse: false,
  callNowBtn: true,
  text: "احجز سيارتك الآن",
  href: "/listing",
};
export const assetsDatahomeAr4 = {
  heading: "فخامة لا مثيل لها على عجلات",
  paragraph: [
    "سواء كانت مناسبة بسجادة حمراء، أو عطلة نهاية أسبوع، أو رحلة عمل تلفت الأنظار، فإن مجموعتنا من السيارات الفاخرة وعالية الأداء مصممة لأولئك الذين يطلبون أكثر من مجرد وسيلة نقل.",
    "اختر من علامات تجارية شهيرة مثل لامبورغيني، رولز رويس، بنتلي، وفيراري، مع خيارات تأجير مرنة وخدمة فاخرة من البداية إلى النهاية.",
  ],
  imageUrl: "/assets/images/image_35.webp",
  imageAlt: "سيارة فاخرة للإيجار",
  imageW: 620,
  imageH: 483,
  reverse: false,
  callNowBtn: true,
  text: "احجز سيارتك الآن",
  href: "/listing",
};

// ================
export const assetsData2 = {
  heading: "Compare Your Car Know the Best Deal!",
  paragraph: [
    "Use our Compare Your Car tool to instantly see how your vehicle stacks up against similar rentals in Dubai. From pricing and specs to features and popularity, make data-driven decisions before listing!",
  ],
  listTitle: "Why Compare?",
  list: [
    "Know the right rental value",
    "Stay competitive in the market",
    "See what features matter to customers",
    "Optimize your chances of being rented",
  ],
  lists: [
    {
      text: "Enter your car details and compare now, it's free and easy!",
    },
  ],
  imageUrl: "/assets/images/image_72.webp",
  imageAlt: "Luxury rental car",
  imageW: 664,
  imageH: 555,
  reverse: false,
  callNowBtn: true,
  text: "Call Now",
  href: "/",
};
export const assetsDatahomeEn3 = {
  heading: "Luxury Starts with Trust",
  paragraph: [
    "At Car Solutions, we believe buying or selling a premium vehicle should be exciting not overwhelming. That’s why we’ve built a platform that combines top-tier service, expert support, and full transparency to give you total control over your car journey.",
    "Whether you're hunting for a high performance machine or listing your prized vehicle, we make the process effortless. With certified listings, secure transactions, and white-glove delivery options, you're never more than a few clicks away from your next luxury drive.",
  ],
  imageUrl: "/assets/images/image_33.webp",
  imageAlt: "Luxury rental car",
  imageW: 664,
  imageH: 483,
  reverse: false,
  callNowBtn: true,
  text: "Start Your Journey",
  href: "/listing",
};
export const assetsDatahomeEn4 = {
  heading: "Estimate Your Car Lease Payments Easily",
  paragraph: [
    "Leasing a car just got easier. With our user-friendly lease calculator, you can instantly estimate your monthly payments based on your vehicle of choice, lease duration, mileage needs, and upfront costs. No complicated math, no hidden surprises just clear numbers to guide your decision.",
    "Whether you're planning ahead or comparing models, our tool helps you stay in control of your budget. Make confident choices and get one step closer to driving the car you want on terms that work for you.",
  ],
  imageUrl: "/assets/images/image_35.webp",
  imageAlt: "Luxury rental car",
  imageW: 664,
  imageH: 483,
  reverse: false,
  callNowBtn: true,
  text: "Calculate Your Lease Now",
  href: "/car-lease",
};

// ==============
export const assetsDataEn = {
  heading: "Experience Automotive Artistry at Its Finest",
  paragraph: [
    "At Car Solutions, we offer more than just vehicles we present a curated collection of luxury automobiles designed for those with an eye for sophistication and a passion for performance. Each car in our lineup is hand-selected for its impeccable craftsmanship, innovative technology, and unmistakable presence on the road.",
    "From sleek sports cars to executive sedans and elite SUVs, our inventory represents the pinnacle of automotive excellence. Whether you're looking to make a bold statement or enjoy the subtle confidence of refined design, our collection delivers unmatched quality for discerning drivers who expect nothing less than perfection.",
  ],
  imageUrl: "/assets/images/image_17.webp",
  imageAlt: "Luxury rental car",
  imageW: 620,
  imageH: 530,
  reverse: false,
  callNowBtn: true,
  text: "Shop Now",
  href: "/listing",
};

export const assetsDataAr = {
  heading: "قارن سيارتك واعرف أفضل صفقة!",
  paragraph: [
    "استخدم أداة قارن سيارتك لترى فورًا كيف تتفوق سيارتك على تأجيرات مماثلة في دبي. من حيث الأسعار والمواصفات والميزات والشعبية، اتخذ قرارات تستند إلى البيانات قبل الإدراج!",
  ],
  listTitle: "لماذا تقارن؟",
  list: [
    "تعرف على القيمة الصحيحة للإيجار",
    "كن تنافسياً في السوق",
    "اعرف الميزات التي تهم العملاء",
    "حسّن فرص تأجير سيارتك",
  ],
  lists: [
    {
      text: "أدخل تفاصيل سيارتك وقارن الآن، الأمر مجاني وسهل!",
    },
  ],
  imageUrl: "/assets/images/image_17.webp",
  imageAlt: "سيارة فاخرة للإيجار",
  imageW: 620,
  imageH: 530,
  reverse: false,
  callNowBtn: true,
  text: "قارن سيارتك",
  href: "/listing",
};

// =========================

// Home title ar and en
export const homeTitleEn = {
  brands: "Book By Brands",
  body_type: "Shop by Body Style & Purpose",
  categories: "Book By Categories",
  featured: "Discover Your Next Dream Car with Our Featured Listings",
  featured2: "You Might Like These",
  all_cars: "Every Car. Every Style. All in One Place.",
  sports: "Elite Sports",
  suvs: "Powerful SUVs",
  luxury: "Luxury Collection",
  blog_title: "Latest Automotive Insights",
};

export const homeTitleAr = {
  brands: "احجز حسب العلامات التجارية",
  body_type: "تصفح حسب نوع الهيكل",
  categories: "احجز حسب الفئات",
  featured: "مميزة",
  featured2: "مميزة",
  all_cars: "مميزة",
  sports: "سيارات رياضية نخبوية",
  suvs: "سيارات الدفع الرباعي القوية",
  luxury: "مجموعة السيارات الفاخرة",
  blog_title: "رؤى وتحديثات",
};

// btn
// English
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

export const assetsData3 = {
  heading: "Turn The Key To Iconic Experiences With HJK Rent a Car",
  paragraph: [
    "We believe driving a luxury car shouldn’t be a far-off fantasy. That’s why we put the world’s most iconic vehicles right within your reach, with zero hassle and maximum thrill. From Lamborghinis that roar to Rolls-Royces that whisper luxury, we handpick only the finest. Each car in our fleet is a statement  and so is the way we serve you.",
  ],
  lists: [
    {
      subHeading: "Our Mission",
      text: "We aim to provide services that set higher standards for car rental service providers worldwide. We strive to exceed our customers’ expectations for service, quality, and value through world-class support and flexible rental policies at affordable rates.",
    },
    {
      subHeading: "Our Vision",
      text: "Our vision is to continuously improve our offerings through commitment to innovation, value, and quality.",
    },
  ],
  imageUrl: "/assets/images/image_60.webp",
  imageAlt: "Luxury rental car",
  imageW: 640,
  imageH: 418,
  reverse: false,
};

export const profileInfo = {
  userName: "Muhammad Zeeshan",
  userImage: "/assets/images/user.webp",
  info: [
    {
      label: "First Name",
      title: "Muhammad",
    },
    {
      label: "Last Name",
      title: "Zeeshan",
    },
    {
      label: "Email Address",
      title: "hjkrentacar@gmail.com",
    },
    {
      label: "Phone Number",
      title: "050 508 2290",
    },
  ],
};
export const bookings = [
  {
    id: "BK-1001",
    car: "BMW X5 - 2023",
    pickup: "Apr 1, 2024",
    return: "Apr 1, 2024",
    location: "Dubai Marina",
    status: "Pending",
    amount: "AED 1,200",
  },
  {
    id: "BK-1001",
    car: "BMW X5 - 2023",
    pickup: "Apr 1, 2024",
    return: "Apr 1, 2024",
    location: "Dubai Marina",
    status: "Returned",
    amount: "AED 1,200",
  },
  {
    id: "BK-1001",
    car: "BMW X5 - 2023",
    pickup: "Apr 1, 2024",
    return: "Apr 1, 2024",
    location: "Dubai Marina",
    status: "Returned",
    amount: "AED 1,200",
  },
  {
    id: "BK-1001",
    car: "BMW X5 - 2023",
    pickup: "Apr 1, 2024",
    return: "Apr 1, 2024",
    location: "Dubai Marina",
    status: "Returned",
    amount: "AED 1,200",
  },
];
export const features = [
  "Daily Rate",
  "Weekly Rate",
  "Monthly Rate",
  "Engine Type",
  "Horsepower",
  "Drive Type",
  "Fuel Type",
  "Transmission",
  "Acceleration (0–100 km/h)",
  "Mileage Limit",
  "Overlimit Charges",
  "Basic Insurance",
  "Security Deposit",
  "GPS Navigation",
  "Seats",
  "Best For",
  "Trunk Space",
];

export const cars = [
  {
    name: "Audi RS7",
    subtitle: "(White, 2023)",
    image: "/assets/images/image_23.webp",
    values: [
      "AED 416",
      "AED 2,522",
      "AED 8,317",
      "V8 Twin-Turbo",
      "591 HP",
      "All-Wheel Drive (quattro)",
      "Petrol",
      "8-Speed Automatic",
      "3.6 seconds",
      "250 km/day",
      "AED 2/km",
      "Included",
      "Not Required",
      "Built-in",
      "5",
      "Speed & Prestige",
      "535 L",
    ],
  },
  {
    name: "Mercedes-Benz E-Class",
    subtitle: "(Black, 2023)",
    image: "/assets/images/image_24.webp",
    values: [
      "AED 370",
      "AED 2,200",
      "AED 7,500",
      "Inline-4 Turbocharged",
      "255 HP",
      "Rear-Wheel Drive",
      "Petrol",
      "9-Speed Automatic",
      "6.1 seconds",
      "250 km/day",
      "AED 2/km",
      "Included",
      "Not Required",
      "Built-in",
      "5",
      "Business Class Luxury",
      "540 L",
    ],
  },
  {
    name: "BMW 7 Series",
    subtitle: "(Grey, 2023)",
    image: "/assets/images/image_25.webp",
    values: [
      "AED 399",
      "AED 2,450",
      "AED 7,999",
      "Inline-6 Turbocharged",
      "375 HP",
      "All-Wheel Drive",
      "Petrol",
      "8-Speed Automatic",
      "5.4 seconds",
      "250 km/day",
      "AED 2/km",
      "Included",
      "Not Required",
      "Built-in",
      "5",
      "High-Tech Executive Feel",
      "515 L",
    ],
  },
];


export const brandLogoData = [
  {
    id: 1,
    brand_logo: "/assets/images/image_01.webp",
  },
  {
    id: 2,
    brand_logo: "/assets/images/image_03.webp",
  },
  {
    id: 3,
    brand_logo: "/assets/images/image_05.webp",
  },
  {
    id: 4,
    brand_logo: "/assets/images/image_07.webp",
  },
  {
    id: 5,
    brand_logo: "/assets/images/image_09.webp",
  },
  {
    id: 6,
    brand_logo: "/assets/images/image_11.webp",
  },
  {
    id: 7,
    brand_logo: "/assets/images/image_02.webp",
  },
  {
    id: 8,
    brand_logo: "/assets/images/image_04.webp",
  },
  {
    id: 9,
    brand_logo: "/assets/images/image_06.webp",
  },
  {
    id: 10,
    brand_logo: "/assets/images/image_08.webp",
  },
  {
    id: 11,
    brand_logo: "/assets/images/image_10.webp",
  },
  {
    id: 12,
    brand_logo: "/assets/images/image_12.webp",
  }
]

export const CarSolutionData = [
  {
    icon: <LoalExpertSVG />,
    title: "Search for Your Perfect Car",
    description:
      "Browse a wide selection of vehicles tailored to your needs. Use filters to quickly find the make, model, and price that suit you.",
  },
  {
    icon: <FastResSVG />,
    title: "Connect with Trusted Sellers",
    description:
      "Reach out to verified, reliable sellers directly. Ask questions, schedule viewings, and negotiate with confidence.",
  },
  {
    icon: <MultilingualSVG />,
    title: "Finalize Your Purchase",
    description:
      "Secure the deal through our streamlined process. Enjoy a smooth handover and drive away with peace of mind.",
  }
];
export const CareerData = [
  {
    num: "01",
    title: "Apply",
    description:
      "Explore to find your desired position, apply for it by providing the details, and wait for the response.",
  },
  {
    num: "02",
    title: "Interview",
    description:
      "After receiving your details, we contact you for the interview session to evaluate your know-how.",
  },
  {
    num: "03",
    title: "Proposal",
    description:
      "When our experts find your expertise a perfect match for the desired position, we offer a proposal.",
  },
  {
    num: "04",
    title: "Onboarding",
    description:
      "After accepting our proposal, we will welcome you and believe in your ability to drive results.",
  },
];
export const CarSolServiceData = [
  {
    icon: <FastResSVG />,
    title: "Trusted & Verified Listings",
    description:
      "Every vehicle on our platform is inspected and verified to ensure you get only genuine and high-quality options no hidden surprises.",
  },
  {
    icon: <Icon1SVG />,
    title: "Seamless Buying",
    description:
      "Enjoy an easy, hassle-free experience with user-friendly search, secure transactions, and full support from listing to delivery.",
  },
  {
    icon: <Icon2SVG />,
    title: "Instant Car Valuation",
    description:
      "Get a quick and accurate estimate of your car’s market value using our intelligent pricing system free and with no obligation.",
  }
];
export const BrandPageData1 = [
  {
    icon: <FastResSVG />,
    title: "Trusted & Verified Listings",
    description:
      "Every vehicle on our platform is inspected and verified to ensure you get only genuine and high-quality options no hidden surprises.",
  },
  {
    icon: <Icon1SVG />,
    title: "Seamless Buying",
    description:
      "Enjoy an easy, hassle-free experience with user-friendly search, secure transactions, and full support from listing to delivery.",
  },
  {
    icon: <Icon2SVG />,
    title: "Instant Car Valuation",
    description:
      "Get a quick and accurate estimate of your car’s market value using our intelligent pricing system free and with no obligation.",
  }
];
export const CarSolutionAboutData = [
  {
    icon: <FastResSVG />,
    title: "Trusted & Verified Listings",
    description:
      "Every vehicle on our platform is inspected and verified to ensure you get only genuine and high-quality options no hidden surprises.",
  },
  {
    icon: <Icon1SVG />,
    title: "Seamless Buying",
    description:
      "Enjoy an easy, hassle-free experience with user-friendly search, secure transactions, and full support from listing to delivery.",
  },
  {
    icon: <Icon2SVG />,
    title: "Instant Car Valuation",
    description:
      "Get a quick and accurate estimate of your car’s market value using our intelligent pricing system free and with no obligation.",
  }
];

export const featuredDatadummy = [
  {
    title_en: "BMW 4 Series",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price1: 64640,
    rental_price: 64640,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_14.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Porsche 911",
    title_ar: "نيسان باترول",
    rental_price1: 144900,
    rental_price: 144900,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#AAAAAA]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_15.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "Mazda Miata Grand Touring",
    title_ar: "تسلا موديل 3",
    rental_price1: 37845,
    rental_price: 37845,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_16.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
]
export const allCarsDatadummy = [
  {
    title_en: "Lamborghini Huracan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 267000,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_18.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 143995,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_19.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "BMW 7 Series",
    title_ar: "تسلا موديل 3",
    rental_price: 143355,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_20.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
  {
    title_en: "Porsche Taycan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 160054,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#93394E]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_21.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 157900,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#19A4F5]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_22.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "Mercedes-Benz G-Class",
    title_ar: "تسلا موديل 3",
    rental_price: 201996,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_23.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
]

export const allCarsFilterDatadummy = [
  {
    title_en: "Lamborghini Huracan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 267000,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_18.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 143995,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_19.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "BMW 7 Series",
    title_ar: "تسلا موديل 3",
    rental_price: 143355,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_20.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
  {
    title_en: "Porsche Taycan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 160054,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#93394E]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_21.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 157900,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#19A4F5]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_22.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "Mercedes-Benz G-Class",
    title_ar: "تسلا موديل 3",
    rental_price: 201996,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_23.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
  {
    title_en: "Lamborghini Huracan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 267000,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_18.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 143995,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_19.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "BMW 7 Series",
    title_ar: "تسلا موديل 3",
    rental_price: 143355,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_20.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
  {
    title_en: "Porsche Taycan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 160054,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#93394E]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_21.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 157900,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#19A4F5]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_22.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "Mercedes-Benz G-Class",
    title_ar: "تسلا موديل 3",
    rental_price: 201996,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_23.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
  {
    title_en: "Lamborghini Huracan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 267000,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_18.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 143995,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_19.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "BMW 7 Series",
    title_ar: "تسلا موديل 3",
    rental_price: 143355,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#CCCCCC]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_20.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
  {
    title_en: "Porsche Taycan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 160054,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#93394E]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_21.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 157900,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#19A4F5]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_22.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "Mercedes-Benz G-Class",
    title_ar: "تسلا موديل 3",
    rental_price: 201996,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_23.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },
  {
    title_en: "Porsche Taycan",
    title_ar: "بي إم دبليو الفئة الرابعة",
    rental_price: 160054,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "1 Mile",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2022",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#93394E]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_21.webp",
      },
    ],
    slug: "toyota-corolla",
  },
  {
    title_en: "Chevrolet Corvette",
    title_ar: "نيسان باترول",
    rental_price: 157900,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "5,838 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Coupe",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2020",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Automatic",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "AWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#19A4F5]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#242424]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_22.webp",
      },
    ],
    slug: "nissan-patrol",
  },
  {
    title_en: "Mercedes-Benz G-Class",
    title_ar: "تسلا موديل 3",
    rental_price: 201996,
    feature_en: "Featured",
    feature_ar: "Featured",
    carFeatures: [
      {
        icon: "/assets/icons/icon_01.svg",
        title_en: "10 miles",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_03.svg",
        title_en: "4 Cylinders",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_04.svg",
        title_en: "Gasoline",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_05.svg",
        title_en: "Convertible",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_02.svg",
        title_en: "2025",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_06.svg",
        title_en: "4 Seats",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_07.svg",
        title_en: "4.0L",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_08.svg",
        title_en: "Manual",
        title_ar: "أوتوماتيك",
      },
      {
        icon: "/assets/icons/icon_09.svg",
        title_en: "RWD",
        title_ar: "أوتوماتيك",
      },
    ],
    carColors: [
      {
        carColor: "bg-[#242424]",
        title_en: "Exterior Color",
        title_ar: "أوتوماتيك",
      },
      {
        carColor: "bg-[#2D72BB]",
        title_en: "Interior Color",
        title_ar: "أوتوماتيك",
      },

    ],
    thumbnails: [
      {
        media_url: "/assets/images/image_23.webp",
      },
      // {
      //   media_url: "/assets/images/car_3_back.webp",
      // },
    ],
    slug: "tesla-model-3",
  },

]
export const trandingTabs = [
  { title: "All Categories", slug: "AllCategories" },
  { title: "New Cars", slug: "NewCars" },
  { title: "Used Cars", slug: "UsedCars" },
];

export const GuideToBuying = [
  {
    imageURL: "/assets/images/image_24.webp",
    title: "Top 5 Tips for First-Time Buyers",
    label: "Buying",
    description:
      "Learn how to make informed decisions when purchasing your next vehicle.",
  },
  {
    imageURL: "/assets/images/image_25.webp",
    title: "Checklist for Selling Your Car",
    label: "Selling",
    description:
      "Ensure a smooth sale with our comprehensive selling checklist.",
  },
  {
    imageURL: "/assets/images/image_26.webp",
    title: "Essential Car Maintenance Tips",
    label: "Maintenance",
    description:
      "Keep your vehicle in top shape with these maintenance tips.",
  },

];
export const ServicesHomeData1 = [
  {
    imageURL: "/assets/images/image_27.webp",
    title: "Maintenance & Servicing",
    label: "Buying",
    description:
      "Keep your vehicle running smoothly with expert care and routine checkups.",
  },
  {
    imageURL: "/assets/images/image_28.webp",
    title: "Detailing & Wash",
    label: "Selling",
    description:
      "Bring back the showroom shine with professional cleaning and detailing.",
  },
  {
    imageURL: "/assets/images/image_29.webp",
    title: "Car Insurance",
    label: "Maintenance",
    description:
      "Protect your vehicle with comprehensive coverage tailored to your needs.",
  },
];
export const ServicesAboutData1 = [
  {
    imageURL: "/assets/images/image_24.webp",
    title: "Maintenance & Servicing",
    description:
      "Keep your vehicle running smoothly with expert care and routine checkups.",
  },
  {
    imageURL: "/assets/images/image_25.webp",
    title: "Detailing & Wash",
    description:
      "Bring back the showroom shine with professional cleaning and detailing.",
  },
  {
    imageURL: "/assets/images/image_26.webp",
    title: "Car Insurance",
    description:
      "Protect your vehicle with comprehensive coverage tailored to your needs.",
  },
];

export const bestInternetProviders = [
  {
    ImageURL: "/assets/images/logo_01.webp",
  },
  {
    ImageURL: "/assets/images/logo_02.webp",
  },
  {
    ImageURL: "/assets/images/logo_03.webp",
  },
  {
    ImageURL: "/assets/images/logo_05.webp",
  },
  {
    ImageURL: "/assets/images/logo_06.webp",
  },
  {
    ImageURL: "/assets/images/logo_07.webp",
  },
  {
    ImageURL: "/assets/images/logo_08.webp",
  },
  {
    ImageURL: "/assets/images/logo_09.webp",
  },
  {
    ImageURL: "/assets/images/logo_10.webp",
  },
  {
    ImageURL: "/assets/images/logo_11.webp",
  },
];

export const TabSectionHeroData = [
  {
    label: "IT Solutions",
    value: "1",
    body: [
      {
        label: "Maintenance & Servicing",
        value: "propertyManagement",
        heading: "Maintenance & Servicing",
        paragraph: [
          "Proper vehicle maintenance is essential to keep your car performing at its peak and extending its lifespan. Our certified technicians handle everything from oil changes and brake inspections to fluid replacements and engine diagnostics. We use manufacturer recommended tools and parts to ensure your vehicle receives the care it deserves.",
          "Regular servicing reduces the risk of unexpected breakdowns and maintains optimal performance and safety. Whether you drive a compact car, SUV, or high-performance vehicle, we tailor our service to suit your needs and schedule, keeping your journey smooth and stress-free.",
        ],
        image: "/assets/images/image_69.webp",
        link: "/",
      },
      {
        label: "Detailing & Wash",
        value: "2",
        heading: "Detailing & Wash",
        paragraph: [
          "Give your vehicle the care it deserves with our premium detailing and wash services. At Car Solutions, we go beyond a basic wash our experts restore your car’s shine inside and out using top-tier products and precision techniques. From deep interior cleaning to paint protection, every detail is handled with perfection.",
          "Regular detailing not only enhances your car’s appearance but also preserves its value and extends its lifespan. Whether you're preparing to sell or simply want to enjoy that fresh-off-the-lot feel, our customized packages ensure your car stays spotless, polished, and protected year-round.",
        ],
        image: "/assets/images/image_47.webp",
        link: "/it-solutions",
      },
      {
        label: "Car Insurance",
        value: "3",
        heading: "Car Insurance",
        paragraph: [
          "Protect your ride with confidence through our trusted car insurance solutions. At Car Solutions, we partner with leading insurance providers to offer coverage options that suit your lifestyle, vehicle type, and budget. Whether it's third-party liability, comprehensive coverage, or add-ons like roadside assistance, we help you find the right policy fast and hassle-free.",
          "Having reliable insurance not only gives you peace of mind on the road but also safeguards your investment in case of accidents, theft, or damage. Our team is here to guide you through quotes, claims, and renewals making sure you're always covered, wherever the road takes you.",
        ],
        image: "/assets/images/image_48.webp",
        link: "/it-solutions",
      },
      {
        label: "Car Evaluation",
        value: "4",
        heading: "Car Evaluation",
        paragraph: [
          "Wondering how much your car is worth? With Car Solutions, you get a quick and accurate evaluation based on real-time market trends and vehicle condition. Our smart system analyzes key factors like model, mileage, service history, and demand to provide you with a fair and transparent value.",
          "Whether you're planning to sell, trade-in, or just curious about your car’s market worth, our hassle-free evaluation process gives you the clarity you need in minutes. No guesswork—just trusted insights to help you make the right move.",
        ],
        image: "/assets/images/image_49.webp",
        link: "/",
      },
      {
        label: "Car Finance",
        value: "5",
        heading: "Car Finance",
        paragraph: [
          "Owning your dream car is easier than ever with flexible finance options from Car Solutions. We work with top financial institutions to offer tailored plans that suit your income, credit score, and vehicle preferences. From low down payments to easy monthly installments, we make financing simple and stress-free.",
          "Our experts guide you through the application process, ensuring clarity at every step no hidden fees, no confusion. Whether you’re buying new or used, we help you drive away with confidence and a plan that fits your budget.",
        ],
        image: "/assets/images/image_50.webp",
        link: "/",
      },
    ],
  },
];


export const guideData = [
  {
    thumbnail_image: "/assets/images/image_24.webp",
    title: "The Future of Electric Vehicles",
    description:
      "Explore how electric cars are reshaping the way we drive and think about mobility.",
    slug: "The Future of Electric Vehicles",
    categories_data: [
      {
        title: "News",
        id: 1,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_25.webp",
    title: "Essential Tips for Selling Your Car",
    description:
      "Discover smart strategies to boost your car’s resale value and sell with confidence.",
    slug: "Essential Tips for Selling Your Car",
    categories_data: [
      {
        title: "Trends",
        id: 2,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_53.webp",
    title: "Car Financing Options",
    description:
      "Understand the best financing solutions to make your next car purchase seamless.",
    slug: "Car Financing Options",
    categories_data: [
      {
        title: "Advice",
        id: 3,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_24.webp",
    title: "The Future of Electric Vehicles",
    description:
      "Explore how electric cars are reshaping the way we drive and think about mobility.",
    slug: "The Future of Electric Vehicles",
    categories_data: [
      {
        title: "News",
        id: 1,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_25.webp",
    title: "Essential Tips for Selling Your Car",
    description:
      "Discover smart strategies to boost your car’s resale value and sell with confidence.",
    slug: "Essential Tips for Selling Your Car",
    categories_data: [
      {
        title: "Trends",
        id: 2,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_53.webp",
    title: "Car Financing Options",
    description:
      "Understand the best financing solutions to make your next car purchase seamless.",
    slug: "Car Financing Options",
    categories_data: [
      {
        title: "Advice",
        id: 3,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_24.webp",
    title: "The Future of Electric Vehicles",
    description:
      "Explore how electric cars are reshaping the way we drive and think about mobility.",
    slug: "The Future of Electric Vehicles",
    categories_data: [
      {
        title: "News",
        id: 1,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_25.webp",
    title: "Essential Tips for Selling Your Car",
    description:
      "Discover smart strategies to boost your car’s resale value and sell with confidence.",
    slug: "Essential Tips for Selling Your Car",
    categories_data: [
      {
        title: "Trends",
        id: 2,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_53.webp",
    title: "Car Financing Options",
    description:
      "Understand the best financing solutions to make your next car purchase seamless.",
    slug: "Car Financing Options",
    categories_data: [
      {
        title: "Advice",
        id: 3,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_24.webp",
    title: "The Future of Electric Vehicles",
    description:
      "Explore how electric cars are reshaping the way we drive and think about mobility.",
    slug: "The Future of Electric Vehicles",
    categories_data: [
      {
        title: "News",
        id: 1,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_25.webp",
    title: "Essential Tips for Selling Your Car",
    description:
      "Discover smart strategies to boost your car’s resale value and sell with confidence.",
    slug: "Essential Tips for Selling Your Car",
    categories_data: [
      {
        title: "Trends",
        id: 2,
      },
    ],
  },
  {
    thumbnail_image: "/assets/images/image_53.webp",
    title: "Car Financing Options",
    description:
      "Understand the best financing solutions to make your next car purchase seamless.",
    slug: "Car Financing Options",
    categories_data: [
      {
        title: "Advice",
        id: 3,
      },
    ],
  },
];

export const categories = [
  'View ALL',
  'Property Sales & Brokerage',
  'Architecture & Design',
  'Marketing & Leasing',
  'Real Investment & Analysis',
  'Marketing',
];

