"use client";
import Typography from "@/components/ui/Typography";
import React, { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import Image from "next/image";

const ContentList = ({ items }) => (
  <ul className="list-disc ml-5 mt-3 space-y-2">
    {items.map((item, index) => (
      <li key={index}>
        <Typography size="sm" color="gray">
          {item}
        </Typography>
      </li>
    ))}
  </ul>
);

const privacySections = [
  {
    id: "1",
    title: "Introduction",
    content:
      'This Privacy Policy describes how the "Company", "we", "us", or "our" collects, uses, and discloses your personal information when you use our website and services. We are committed to protecting the confidentiality, integrity, and security of any personal information we collect through our website. By using our website and services, you consent to the collection and use of your personal information as outlined in this Privacy Policy.',
  },
  {
    id: "2",
    title: "Information We Collect",
    description:
      "We may collect personal and non-personal information from you through various online forms, including when you visit our website.",
    subsections: [
      {
        subtitle: "2.1 Personal Information Provided by You",
        list: [
          "Name",
          "Email address",
          "Phone number/billing information",
          "Company name or business entity",
          "Address/location of business name",
          "Payment information for processing orders",
          "Any other information provided through our forms, surveys, or customer support",
        ],
      },
      {
        subtitle: "2.2 Automatically Collected Information",
        list: [
          "IP Address",
          "Browser type and version",
          "Device type",
          "Pages visited and the duration of stay on those pages",
          "Cookies and similar tracking technologies",
          "Referring URLs",
          "Approximate location (based on IP)",
        ],
        footerText:
          "This information helps us analyze trends, administer the site, and improve the user experience.",
      },
    ],
  },
  {
    id: "3",
    title: "Use of Information",
    content:
      "We collect and process personal information for our legitimate business purposes, including:",
    list: [
      "To provide services you request or purchase from us",
      "To notify you about changes to our website and services",
      "To providing support and respond to user queries",
      "To monitor and analyze usage and trends to improve user experience",
      "Personalizing user experience and content",
      "Providing marketing communications",
      "Ensuring security and preventing fraud",
      "Complying with legal and regulatory obligations",
    ],
    note: "We do not sell your personal information to third parties.",
  },
  {
    id: "4",
    title: "Cookies and Tracking Technologies",
    content: "Our website uses cookies and similar technologies to:",
    list: [
      "Enhance browsing experience",
      "Analyze website traffic and performance",
      "Remember user preferences and settings",
      "Improve user engagement",
    ],
    footerText:
      "You can disable cookies through your browser settings, but some features of the website may not function correctly without cookies.",
  },
  {
    id: "5",
    title: "Sharing and Disclosure of Information",
    description:
      "We share your information only with your consent or as necessary to provide services you requested, under the following circumstances:",
    subsections: [
      {
        subtitle: "5.1 Service Providers and Partners",
        list: [
          "Third-party advertisers",
          "Data and cloud infrastructure",
          "Email service providers",
          "Payment processing services",
          "Monitoring, auditing, analysis, and security tools",
        ],
        footerText:
          "These partners are obligated to maintain confidentiality and process information only for the intended service.",
      },
      {
        subtitle: "5.2 Legal and Regulatory Requirements",
        content: "We may disclose information when required to comply with:",
        list: [
          "Applicable laws and regulations",
          "Court orders, subpoenas, or legal process",
          "Protecting our legal rights and safety",
        ],
      },
      {
        subtitle: "5.3 Business Transfers",
        content:
          "In the event of a merger, acquisition, or sale of assets, personal information may be transferred to the acquiring entity.",
      },
    ],
  },
  {
    id: "6",
    title: "Data Security",
    content:
      "We implement industry-standard technical and organizational measures to protect your information from unauthorized access, loss, or misuse, including:",
    list: [
      "Secure servers",
      "Encryption of sensitive data",
      "Access controls and restrictions",
      "Regular system monitoring",
    ],
    footerText:
      "However, no system is 100% secure, and we cannot guarantee absolute security of your personal data.",
  },
  {
    id: "7",
    title: "Data Retention",
    content: "We retain personal information only for as long as necessary to:",
    list: [
      "Fulfill the purposes outlined in this policy",
      "Comply with legal, regulatory, or contractual obligations",
      "Resolve disputes and enforce agreements",
    ],
  },
  {
    id: "8",
    title: "Your Rights",
    content: "Depending on your location, you may have the right to:",
    list: [
      "Request access to your personal information",
      "Request correction of inaccurate or outdated data",
      "Request deletion of your information, subject to legal constraints",
      "Withdraw consent for marketing communications",
      "Object to or restrict processing of your information",
      "Request a copy of your data in a portable format",
    ],
    footerText:
      "To exercise any of these rights, please contact us at the email provided below. We will respond within the applicable timeframes under local laws.",
  },
  {
    id: "9",
    title: "Third-Party Websites",
    content:
      "Our website may contain links to third-party websites or platforms. We are not responsible for the content, security, or privacy practices of these third parties. We encourage you to read their Privacy Policies before sharing any personal information.",
  },
  {
    id: "10",
    title: "Children's Privacy",
    content:
      "Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware of such data, we will take steps to delete it promptly.",
  },
  {
    id: "11",
    title: "Updates to This Privacy Policy",
    content: "We may update this Privacy Policy periodically to reflect:",
    list: [
      "Changes in our services",
      "Legal and regulatory requirements",
      "Improvements in security practices",
    ],
    footerText:
      'The "Last Updated" date at the top of the page will indicate when the most recent changes were made.',
  },
];

const privacySectionsAr = [
  {
    id: "1",
    title: "مقدمة",
    content:
      'تصف سياسة الخصوصية هذه كيفية قيام "الشركة" أو "نحن" أو "نا" بجمع واستخدام والإفصاح عن معلوماتك الشخصية عند استخدام موقعنا الإلكتروني وخدماتنا. نحن ملتزمون بحماية سرية وسلامة وأمن أي معلومات شخصية نجمعها من خلال موقعنا الإلكتروني. باستخدام موقعنا الإلكتروني وخدماتنا، فإنك توافق على جمع واستخدام معلوماتك الشخصية كما هو موضح في سياسة الخصوصية هذه.',
  },
  {
    id: "2",
    title: "المعلومات التي نجمعها",
    description:
      "قد نجمع معلومات شخصية وغير شخصية منك عبر نماذج إلكترونية متنوعة، بما في ذلك عندما تزور موقعنا الإلكتروني.",
    subsections: [
      {
        subtitle: "٢.١ المعلومات الشخصية التي تقدمها أنت",
        list: [
          "الاسم",
          "عنوان البريد الإلكتروني",
          "رقم الهاتف / معلومات الفواتير",
          "اسم الشركة أو الكيان التجاري",
          "العنوان / موقع اسم النشاط التجاري",
          "معلومات الدفع لمعالجة الطلبات",
          "أي معلومات أخرى تقدم عبر نماذجنا أو استطلاعاتنا أو دعم العملاء",
        ],
      },
      {
        subtitle: "٢.٢ المعلومات التي يتم جمعها تلقائياً",
        list: [
          "عنوان IP",
          "نوع المتصفح وإصداره",
          "نوع الجهاز",
          "الصفحات التي تمت زيارتها ومدة البقاء على تلك الصفحات",
          "ملفات تعريف الارتباط (كوكيز) وتقنيات التتبع المشابهة",
          "عنوانات URL المرجعية",
          "الموقع التقريبي (بناءً على عنوان IP)",
        ],
        footerText:
          "تساعدنا هذه المعلومات في تحليل الاتجاهات وإدارة الموقع وتحسين تجربة المستخدم.",
      },
    ],
  },
  {
    id: "3",
    title: "استخدام المعلومات",
    content:
      "نجمع المعلومات الشخصية ونعالجها لأغراضنا التجارية المشروعة، بما في ذلك:",
    list: [
      "تقديم الخدمات التي تطلبها أو تشتريها منا",
      "إعلامك بالتغييرات على موقعنا الإلكتروني وخدماتنا",
      "توفير الدعم والرد على استفسارات المستخدمين",
      "مراقبة وتحليل الاستخدام والاتجاهات لتحسين تجربة المستخدم",
      "تخصيص تجربة المستخدم والمحتوى",
      "تقديم اتصالات تسويقية",
      "ضمان الأمن ومنع الاحتيال",
      "الامتثال للالتزامات القانونية والتنظيمية",
    ],
    note: "نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة.",
  },
  {
    id: "4",
    title: "ملفات تعريف الارتباط وتقنيات التتبع",
    content:
      "يستخدم موقعنا الإلكتروني ملفات تعريف الارتباط (كوكيز) وتقنيات مشابهة من أجل:",
    list: [
      "تعزيز تجربة التصفح",
      "تحليل حركة مرور الموقع وأدائه",
      "تذكر تفضيلات وإعدادات المستخدم",
      "تحسين تفاعل المستخدم",
    ],
    footerText:
      "يمكنك تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك، ولكن بعض ميزات الموقع الإلكتروني قد لا تعمل بشكل صحيح بدونها.",
  },
  {
    id: "5",
    title: "مشاركة المعلومات والإفصاح عنها",
    description:
      "نشارك معلوماتك فقط بموافقتك أو عند الضرورة لتقديم الخدمات التي طلبتها، في الحالات التالية:",
    subsections: [
      {
        subtitle: "٥.١ مقدمي الخدمات والشركاء",
        list: [
          "المعلنون من الأطراف الثالثة",
          "بنى تحتية للبيانات والحوسبة السحابية",
          "مقدمو خدمات البريد الإلكتروني",
          "خدمات معالجة المدفوعات",
          "أدوات المراقبة والتدقيق والتحليل والأمن",
        ],
        footerText:
          "يلتزم هؤلاء الشركاء بالحفاظ على السرية ومعالجة المعلومات فقط للخدمة المقصودة.",
      },
      {
        subtitle: "٥.٢ المتطلبات القانونية والتنظيمية",
        content: "قد نكشف عن المعلومات عند الالتزام بـ:",
        list: [
          "القوانين واللوائح المعمول بها",
          "أوامر المحكمة أو الاستدعاءات أو الإجراءات القانونية",
          "حماية حقوقنا القانونية وسلامتنا",
        ],
      },
      {
        subtitle: "٥.٣ عمليات نقل الأعمال",
        content:
          "في حال الاندماج أو الاستحواذ أو بيع الأصول، قد يتم نقل المعلومات الشخصية إلى الكيان المستحوذ.",
      },
    ],
  },
  {
    id: "6",
    title: "أمن البيانات",
    content:
      "ننفذ إجراءات فنية وتنظيمية قياسية في الصناعة لحماية معلوماتك من الوصول غير المصرح به أو الفقدان أو سوء الاستخدام، بما في ذلك:",
    list: [
      "خوادم آمنة",
      "تشفير البيانات الحساسة",
      "ضوابط وقيود الوصول",
      "المراقبة المنتظمة للنظام",
    ],
    footerText:
      "ومع ذلك، لا يوجد نظام آمن بنسبة 100٪، ولا يمكننا ضمان الأمن المطلق لبياناتك الشخصية.",
  },
  {
    id: "7",
    title: "احتفاظ البيانات",
    content: "نحتفظ بالمعلومات الشخصية فقط طالما كان ذلك ضرورياً من أجل:",
    list: [
      "تحقيق الأغراض الموضحة في هذه السياسة",
      "الامتثال للالتزامات القانونية أو التنظيمية أو التعاقدية",
      "تسوية المناز وإنفاذ الاتفاقيات",
    ],
  },
  {
    id: "8",
    title: "حقوقك",
    content: "اعتماداً على موقعك، قد يكون لديك الحق في:",
    list: [
      "طلب الوصول إلى معلوماتك الشخصية",
      "طلب تصحيح البيانات غير الدقيقة أو القديمة",
      "طلب حذف معلوماتك، مع مراعاة القيود القانونية",
      "سحب الموافقة على الاتصالات التسويقية",
      "الاعتراض على معالجة معلوماتك أو تقييدها",
      "طلب نسخة من بياناتك بتنسيق محمول",
    ],
    footerText:
      "لممارسة أي من هذه الحقوق، يرجى الاتصال بنا على البريد الإلكتروني المقدم أدناه. وسنرد في غضون الإطار الزمني المنصوص عليه بموجب القوانين المحلية.",
  },
  {
    id: "9",
    title: "مواقع الطرف الثالث",
    content:
      "قد يحتوي موقعنا الإلكتروني على روابط لمواقع أو منصات تابعة لأطراف ثالثة. نحن لسنا مسؤولين عن محتوى أو أمن أو ممارسات الخصوصية لهذه الأطراف الثالثة. نحن نشجعك على قراءة سياسات الخصوصية الخاصة بهم قبل مشاركة أي معلومات شخصية.",
  },
  {
    id: "10",
    title: "خصوصية الأطفال",
    content:
      "خدماتنا ليست مخصصة للأطفال دون سن 13 عاماً. نحن لا نجمع معلومات شخصية عن قصد من الأطفال. إذا علمنا بوجود مثل هذه البيانات، فسنقوم باتخاذ خطوات لحذفها على الفور.",
  },
  {
    id: "11",
    title: "تحديثات سياسة الخصوصية هذه",
    content: "قد نقوم بتحديث سياسة الخصوصية هذه بشكل دوري لتعكس:",
    list: [
      "التغييرات في خدماتنا",
      "المتطلبات القانونية والتنظيمية",
      "التحسينات في ممارسات الأمن",
    ],
    footerText:
      'سيشير تاريخ "آخر تحديث" في أعلى الصفحة إلى وقت إجراء أحدث التغييرات.',
  },
];

const icons = [
  {
    id: "1",
    icon: "/icons/privacy/Container0.svg",
  },
  {
    id: "2",
    icon: "/icons/privacy/Container1.svg",
  },
  {
    id: "3",
    icon: "/icons/privacy/Container2.svg",
  },
  {
    id: "4",
    icon: "/icons/privacy/Container3.svg",
  },
  {
    id: "5",
    icon: "/icons/privacy/Container4.svg",
  },
  {
    id: "6",
    icon: "/icons/privacy/Container5.svg",
  },
  {
    id: "7",
    icon: "/icons/privacy/Container6.svg",
  },
  {
    id: "8",
    icon: "/icons/privacy/Container7.svg",
  },
  {
    id: "9",
    icon: "/icons/privacy/Container8.svg",
  },
  {
    id: "10",
    icon: "/icons/privacy/Container9.svg",
  },
  {
    id: "11",
    icon: "/icons/privacy/Container10.svg",
  },
  {
    id: "12",
    icon: "/icons/privacy/Container11.svg",
  },
];

const PrivacyPolicy = () => {
  const [activeId, setActiveId] = React.useState("1");

  const scrollToSection = (id) => {
    setActiveId(id);
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const { locale } = useContext(LanguageContext);
  const ar = locale === "ar";

  const sections = locale === "ar" ? privacySectionsAr : privacySections;

  return (
    <div>
      {/* Header with bg image and specific height with content */}
      <div
        className="pb-12 pt-[7rem] lg:pt-[10rem] relative min-h-[40dvh] w-full bg-cover bg-center bg-no-repeat lg:mt-[3.5rem]"
        style={{ backgroundImage: "url('/assets/privacy-policy-header.webp')" }}
      >
        <div className="container mx-auto px-4 py-10">
          <Typography as="h1" size="3xl" weight="bold" color="white">
            {ar ? "سياسة الخصوصية" : "Privacy Policy"}
          </Typography>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
        {/* Table of Contents Side Component */}
        <Sidebar
          sections={sections}
          activeId={activeId}
          onScrollTo={scrollToSection}
          ar={ar}
        />

        {/* RIGHT CONTENT AREA */}
        <main className="md:w-3/4 space-y-12">
          {sections.map((section) => (
            <section
              key={section.id}
              id={`section-${section.id}`}
              className="scroll-mt-36"
            >
              {/* Heading with Badge */}
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary text-white font-bold min-w-[28px] h-7 flex items-center justify-center rounded-sm text-sm">
                  {section.id}
                </span>
                <Typography as="h2" size="2xl" weight="bold" color="black">
                  {section.title}
                </Typography>
              </div>

              {/* Content / Description */}
              {section.content && (
                <Typography
                  size="sm"
                  color="gray"
                  className="leading-relaxed mb-4"
                >
                  {section.content}
                </Typography>
              )}
              {section.description && (
                <Typography
                  size="sm"
                  color="gray"
                  className="leading-relaxed mb-4"
                >
                  {section.description}
                </Typography>
              )}

              {/* Subsections */}
              {section.subsections?.map((sub, idx) => (
                <div key={idx} className="mt-6">
                  <Typography as="h4" size="base" weight="bold" color="black">
                    {sub.subtitle}
                  </Typography>
                  {sub.list && <ContentList items={sub.list} />}
                </div>
              ))}

              {/* Direct Lists */}
              {section.list && <ContentList items={section.list} />}

              {/* Pink Note Box */}
              {section.note && (
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-primary">
                  <Typography size="sm" className="text-primary">
                    {section.note}
                  </Typography>
                </div>
              )}

              {/* Footer Text */}
              {section.footerText && (
                <Typography size="sm" color="gray" className="mt-6 italic">
                  {section.footerText}
                </Typography>
              )}
            </section>
          ))}

          {/* Section 12: Contact Information */}
          <section id="section-12" className="pt-8 border-t">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary text-white font-bold min-w-[28px] h-7 flex items-center justify-center rounded-sm text-sm">
                12
              </span>
              <Typography as="h2" size="2xl" weight="bold" color="black">
                {ar ? "معلومات الاتصال" : "Contact Information"}
              </Typography>
            </div>
            <Typography size="sm" color="gray" className="mb-4">
              {ar
                ? "لأي أسئلة أو استفسارات أو طلبات بخصوص سياسة الخصوصية هذه، يرجى التواصل معنا:"
                : "For questions, concerns, or requests regarding this Privacy Policy, please contact:"}
            </Typography>
            <div className="space-y-1">
              <Typography size="sm" weight="semibold" color="black">
                {ar ? "مسؤول الخصوصية لدينا" : "Our Privacy Officer"}
              </Typography>
              <Typography
                size="sm"
                color="gray"
                underline
                className="cursor-pointer"
              >
                privacy@company.com
              </Typography>
              <Typography size="sm" color="gray">
                +1 (234) 567-890
              </Typography>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

const Sidebar = ({ sections, activeId, onScrollTo, ar }) => {
  return (
    <aside className="md:w-[400px]">
      <div className="sticky top-36 overflow-hidden">
        {/* Header - Image jaisa Red Heading */}
        <div className="p-4">
          <Typography size="lg" weight="bold" className="text-primary">
            {ar ? "فهرس المحتويات" : "Table of Contents"}
          </Typography>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className={`
                flex items-center gap-3 px-4 py-3 text-left transition-all border border-gray-200 last:border-0
                hover:bg-red-50 group
                ${activeId === item.id ? "bg-red-50" : ""}
              `}
            >
              {/* Icon Container */}
              <div className={`w-8 h-8 flex items-center justify-center`}>
                <Image
                  src={icons[item.id - 1].icon}
                  alt={item.title}
                  width={36}
                  height={36}
                />
              </div>

              {/* Text */}
              <Typography
                size="sm"
                weight={activeId === item.id ? "semibold" : "medium"}
                className={`${
                  activeId === item.id
                    ? "text-primary"
                    : "text-gray-600 group-hover:text-primary"
                }`}
              >
                {item.id}. {item.title}
              </Typography>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};
