import {
  CallSVG,
  EmailSVG,
  FacebookSVG,
  FbSVG,
  Icon1SVG,
  Icon2SVG,
  Icon3SVG,
  Icon4SVG,
  Icon5SVG,
  Icon6SVG,
  Icon7SVG,
  Icon8SVG,
  Icon9SVG,
  InstagramSVG,
  InSVG,
  LinkedinSVG,
  MailSVG,
  PhoneSVG,
  PinPointSVG,
  WASVG,
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
      name: "Business",
      link: "#",
      pageLinks: [
        {
          title: "UAE Free Zone",
          listing: [
            {
              list: "DIC - Dubai Internet City",
              link: "/",
            },
            {
              list: "DAFZ - Dubai Airport Free Zone",
              link: "/",
            },
            {
              list: "MFZ - Meydan Free Zone",
              link: "/",
            },
            {
              list: "JAFZA - Jebel Ali Free Zone",
              link: "/",
            },
            {
              list: "DMCC - Dubai Multi Commodities Center",
              link: "/",
            },
            {
              list: "IFZA - International Free Zone Authority",
              link: "/",
            },
            {
              list: "Dubai South - Dubai South Free Zone",
              link: "/",
            },
            {
              list: "DTEC - Dubai Technology Entrepreneur Center",
              link: "/",
            },
            {
              list: "DAZ - Dubai Auto Zone",
              link: "/",
            },
            {
              list: "DMC - Dubai Media City",
              link: "/",
            },
          ]
        },
        {
          title: "Abu Dhabi Free zone",
          listing: [
            {
              list: "Abu Dhabi Global Market",
              link: "/",
            },
            {
              list: "Khalifa Industrial Zone Abu Dhabi",
              link: "/",
            },
            {
              list: "Twofour54 (Media & Creative)",
              link: "/",
            },
            {
              list: "Masdar City Free Zone",
              link: "/",
            },
            {
              list: "Abu Dhabi Airport Free Zone",
              link: "/",
            },
          ]
        },
        {
          title: "Abu Dhabi Free zone",
          listing: [
            {
              list: "AMC - Ajman Media City Free Zone",
              link: "/",
            },
            
          ]
        },
        {
          title: "Ajman Free Zone",
          listing: [
            {
              list: "UAQ FTZ - Umm Al Quwain Free Zone",
              link: "/",
            },
            
          ]
        },
        {
          title: "Umm Al Quwain Free Zone",
          listing: [
            {
              list: "FCC - Fujairah Creative City",
              link: "/",
            },
           
          ]
        },
        {
          title: "Fujairah Free Zone",
          listing: [
            {
              list: "SPC - Sharjah Publishing City Free Zone",
              link: "/",
            },
            {
              list: "HFZA - Hamriyah Free Zone",
              link: "/",
            },
            {
              list: "SAIF - Sharjah Airport International free zone",
              link: "/",
            },
            {
              list: "SHAMS - Sharjah Media City free zone",
              link: "/",
            },
          ]
        },
        {
          title: "Sharjah Free Zone",
          listing: [
            {
              list: "DIC - Dubai Internet City",
              link: "/",
            },
            {
              list: "DAFZ - Dubai Airport Free Zone",
              link: "/",
            },
            {
              list: "MFZ - Meydan Free Zone",
              link: "/",
            },
            {
              list: "JAFZA - Jebel Ali Free Zone",
              link: "/",
            },
            {
              list: "DMCC - Dubai Multi Commodities Center",
              link: "/",
            },
            {
              list: "IFZA - International Free Zone Authority",
              link: "/",
            },
            {
              list: "Dubai South - Dubai South Free Zone",
              link: "/",
            },
            {
              list: "DTEC - Dubai Technology Entrepreneur Center",
              link: "/",
            },
            {
              list: "DAZ - Dubai Auto Zone",
              link: "/",
            },
            {
              list: "DMC - Dubai Media City",
              link: "/",
            },
          ]
        },
        {
          title: "Ras Al Khaimah Free Zone",
          listing: [
            {
              list: "DIC - Dubai Internet City",
              link: "/",
            },
            {
              list: "DAFZ - Dubai Airport Free Zone",
              link: "/",
            },
            {
              list: "MFZ - Meydan Free Zone",
              link: "/",
            },
            {
              list: "JAFZA - Jebel Ali Free Zone",
              link: "/",
            },
            {
              list: "DMCC - Dubai Multi Commodities Center",
              link: "/",
            },
            {
              list: "IFZA - International Free Zone Authority",
              link: "/",
            },
            {
              list: "Dubai South - Dubai South Free Zone",
              link: "/",
            },
            {
              list: "DTEC - Dubai Technology Entrepreneur Center",
              link: "/",
            },
            {
              list: "DAZ - Dubai Auto Zone",
              link: "/",
            },
            {
              list: "DMC - Dubai Media City",
              link: "/",
            },
          ]
        },

      ],
    },
    {
      name: "Corporate",
      link: "#",
      pageLinks: [
        {
          title: "Maintenance & Servicing",
          lists: [
            {
              name: "Maintenance",
              link: "/Maintenance",
            },
          ]
        },
        {
          title: "Detailing & Wash",
          link: "/services",
        },
        {
          title: "Car Insurance",
          link: "/services",
        },
        {
          title: "Car Evaluation",
          link: "/services",
        },
        {
          title: "Car Finance",
          link: "/services",
        },
      ],
    },
    {
      name: "Banking",
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
      name: "Digital",
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
      name: "Millionaire",
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
      name: "Logistics",
      link: "#",
      pageLinks: [
        { title: "Maintenance & Servicing", paragraph: "Keep your vehicle running smoothly with expert care and routine checkups.", link: "/services" },
        { title: "Detailing & Wash", paragraph: "Bring back the showroom shine with professional cleaning and detailing.", link: "/services" },
        { title: "Car Insurance", paragraph: "Protect your vehicle with comprehensive coverage tailored to your needs.", link: "/services" },
        { title: "Car Evaluation", paragraph: "Get an accurate, market-based valuation for your car in just minutes.", link: "/services" },
        { title: "Car Finance", paragraph: "Drive now, pay later flexible car financing options designed to fit your budget.", link: "/services" },
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
export const BusinessSetupData = {
  links: [
    { title_en: "UAE Free Zone", title_ar: "الرئيسية", links: "/" },
    { title_en: "UAE Mainland", title_ar: "المدونة", links: "/" },
    { title_en: "UAE Offshore", title_ar: "الرئيسية", links: "/" },
  ],
};
export const BankingWealthData = {
  links: [
    { title_en: "Wealth Management Services", title_ar: "الرئيسية", links: "/" },
    { title_en: "Family Office Setup", title_ar: "استئجار سيارة", links: "/" },
    { title_en: "Asset Protection", title_ar: "الماركات", links: "/" },
  ],
}
export const CorporateServicesData = {
  links: [
    { title_en: "payroll management", title_ar: "الرئيسية", links: "/" },
    { title_en: "health insurance dubai", title_ar: "استئجار سيارة", links: "/" },
    { title_en: "business insurance", title_ar: "الماركات", links: "/" },
  ],
}
export const MiliionaireBillionaireData = {
  links: [
    { title_en: "Will & Trust Preparation Services", title_ar: "الرئيسية", links: "/" },
    { title_en: "Family Foundation & Trust", title_ar: "الرئيسية", links: "/" },
    { title_en: "Golden Visa UAE", title_ar: "الرئيسية", links: "/" },
  ],
}
export const DigitalData = {
  links: [
    { title_en: "Domain Name & DNS Management", title_ar: "الرئيسية", links: "/" },
    { title_en: "Web Hosting Services", title_ar: "المدونة", links: "/" },
    { title_en: "Office 365 Subscription", title_ar: "الرئيسية", links: "/" },
  ],
};
export const LogisticsRelocationData = {
  links: [
    { title_en: "Tourist Visa", title_ar: "الرئيسية", links: "/" },
    { title_en: "Investor Visa Processing", title_ar: "استئجار سيارة", links: "/" },
    { title_en: "Partner Visa Services", title_ar: "الماركات", links: "/" },
  ],
}
export const CompanyData = {
  links: [
    { title_en: "About Us", title_ar: "الرئيسية", links: "/" },
    { title_en: "Contact us", title_ar: "المدونة", links: "/" },
    { title_en: "Privacy policy", title_ar: "المدونة", links: "/" },
    { title_en: "Careers", title_ar: "الرئيسية", links: "/" },
    { title_en: "Team", title_ar: "الرئيسية", links: "/" },
  ],
}
export const ResourcesData = {
  links: [
    { title_en: "Guides", title_ar: "الرئيسية", links: "/" },
    { title_en: "Insights", title_ar: "الرئيسية", links: "/" },
    { title_en: "FAQs", title_ar: "الرئيسية", links: "/" },
  ],
}

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/
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
export const socialLinks2 = [
  { label: "Facebook", link: "http://facebook.com/", icon: <FbSVG /> },
  { label: "Instagram", link: "http://instagram.com/", icon: <InSVG /> },
  { label: "Whatsapp", link: "https://wa.me/", icon: <WASVG /> },
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
  inquire_now: "Inquire Now",
  view_all: "View All",
  view_more: "View More",
  apply_now: "Apply Now",
  read_more: "Read more",
  contact_us: "Contact Us",
  contact_us_now: "Contact Us Now",
  explore_now: "Explore Now",
  read_more_guides: "Read More Guides",
  book_your_free_consultation: "Book a Free Consultation",
  get_free_setup_consultation: "Get Free Setup Consultation",
  View_All_Guides: "View All Guides",
  tag: "Tags",
  subscribe: "Subscribe",
  one_nexus: "@OneNexus",
};
// Arabic
export const btnTextAr = {
  inquire_now: "عرض جميع العلامات التجارية",
  view_all: "عرض الكل",
  view_more: "عرض المزيد",
  apply_now: "عرض المزيد",
  read_more: "عرض المزيد",
  contact_us: "عرض الكل",
  contact_us_now: "عرض الكل",
  explore_now: "عرض الكل",
  read_more_guides: "عرض المزيد",
  book_your_free_consultation: "عرض الكل",
  get_free_setup_consultation: "عرض الكل",
  View_All_Guides: "عرض جميع المدونات",
  tag: "عرض الكل",
  subscribe: "عرض الكل",
  one_nexus: "عرض الكل",
};

/**
|--------------------------------------------------
| Other Section Data
|--------------------------------------------------
*/

export const CardsData1 = [
  {
    title: "Start Without Setbacks",
    description:
      "One wrong document or mismatched activity can delay your license for weeks. With One Nexuz, every step of your Dubai business setup is handled by experts, ensuring full compliance and smooth approvals — so you begin without stress or rejection",
  },
  {
    title: "Be Market-Ready in Days",
    description:
      "Why waste weeks on setup formalities? With One Nexuz, your business formation is fast-tracked in days — so you enter the market quicker, seize opportunities sooner, and stay ahead of competitors.",
  },
  {
    title: "Save More with Full Transparency",
    description:
      "Hidden fees drain resources and trust. Our all-inclusive Dubai company formation packages save you AED 5,000–10,000, with every cost clear upfront — so you keep control and confidence.",
  }
];
export const CardsData2 = [
  {
    icon: <Icon5SVG />,
    title: "Simplified Business Setup & Services",
  },
  {
    icon: <Icon6SVG />,
    title: "Full Visa & Licensing Support",
  },
  {
    icon: <Icon7SVG />,
    title: "Transparent and Flexible pricing",
  },
  {
    icon: <Icon8SVG />,
    title: "No Delays, No Hidden Fees",
  },
  {
    icon: <Icon9SVG />,
    title: "Dedicated Account Manager",
  },
];
export const CardsData3 = [
  {
    icon: <Icon1SVG />,
    title: "Banking Without the Headaches",
    description:
      "Tired of endless paperwork and rejections? We match you with the right UAE bank, prep every document, and secure your account fast — so you can focus on running your business, not chasing signatures. With our direct banking expertise, your account opens smoothly, giving you instant access to operations.",
  },
  {
    icon: <Icon2SVG />,
    title: "Stay Compliant, Stay Stress-Free",
    description:
      "VAT rules in the UAE are complex and mistakes are costly. We simplify registration, manage filings, and keep your books penalty-free — protecting your business while you focus on growth. Our experts ensure you stay compliant, audit-ready, and never face avoidable penalties.",
  },
  {
    icon: <Icon3SVG />,
    title: "Workspace That Gets You Licensed",
    description:
      "Need an address for your trade license? Our co-working and flexi-desk solutions are affordable, flexible, and license-ready — giving you legal compliance and a professional space to grow from day one. Perfect for startups or scaling businesses, without the cost of long leases.",
  },
  {
    icon: <Icon4SVG />,
    title: "Visas Made Simple, For You & Family",
    description:
      " From investor visas to family sponsorship, we remove the stress of medicals, paperwork, and Emirates ID. You settle in with peace of mind — while we handle the entire visa journey. Our streamlined process ensures relocation is smooth, stress-free, and secure.",
  },
];