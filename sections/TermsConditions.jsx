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

const ContentListKeyValue = ({ items }) => (
  <ul className="list-disc ml-5 mt-3 space-y-2">
    {items.map((item, index) => (
      <li key={index}>
        <Typography size="sm" color="gray">
          {item.key}: {item.value}
        </Typography>
      </li>
    ))}
  </ul>
);

export const termsSections = [
  {
    id: "1",
    title: "Introduction",
    content:
      "One Nexuz provides comprehensive solutions for business setup, corporate services, visa/relocation assistance, banking/wealth advisory, and digital/branding services in the UAE. These Terms govern your access to our website (onenexuz.ae) and your use of our services. By engaging with us, you agree to comply with these Terms.",
  },
  {
    id: "2",
    title: "Definitions",
    subsections: [
      {
        subtitle: "Company / One Nexuz:",
        content:
          "Refers to One Nexuz and its affiliates, subsidiaries, and representatives.",
      },
      {
        subtitle: "Client / User:",
        content:
          "Any individual or entity using our services or interacting with our website.",
      },
      {
        subtitle: "Services:",
        content:
          "Any service offered by One Nexuz, including but not limited to business setup, visa/relocation, banking/wealth advisory, and digital/branding solutions.",
      },
    ],
  },
  {
    id: "3",
    title: "Acceptance of Terms",
    content:
      "By accessing the website or using One Nexuz services, you confirm that you:",
    list: [
      "Are at least 18 years old;",
      "Agree to these Terms;",
      "Will provide accurate and complete information;",
      "Understand that One Nexuz may update these Terms from time to time, with changes effective immediately upon posting.",
    ],
  },
  {
    id: "4",
    title: "Scope of Services",
    content: "One Nexuz provides a range of services, which include:",
    list: [
      "^Business Setup & Corporate Services:^ Company formation, licensing, PRO services, compliance support.",
      "^Visa / Relocation Services:^ Residence visas, labor cards, relocation assistance.",
      "^Banking & Wealth Advisory:^ Bank account assistance, financial and legal advisory.",
      "^Digital & Branding Services:^ Website design, marketing, branding, content creation.",
    ],
    footerText:
      "Each service is delivered according to the scope agreed with the Client. The Company reserves the right to modify, suspend, or discontinue any service.",
  },
  {
    id: "5",
    title: "Payment Terms",
    list: [
      "All fees are in AED, unless otherwise agreed.",
      "Payments may be required upfront, in full, or in installments depending on the service.",
      "Accepted methods include bank transfer, credit/debit card, or other methods approved by One Nexuz.",
      "Unless explicitly stated, payments are non-refundable. Any refund requests are at the sole discretion of the Company.",
      "Late or incomplete payments may result in suspension or termination of services.",
    ],
  },
  {
    id: "6",
    title: "Client Responsibilities",
    content: "Clients agree to:",
    list: [
      "Provide accurate and complete information for service delivery;",
      "Respond promptly to queries, approvals, or requests;",
      "Keep any account credentials or confidential information secure;",
      "Comply with UAE laws and regulations relevant to the services provided.",
    ],
  },
  {
    id: "7",
    title: "Intellectual Property",
    content:
      "Materials, designs, and content provided by One Nexuz remain the Company's intellectual property unless otherwise agreed in writing. Clients may use these materials only for their intended purposes. Unauthorized use is prohibited.",
  },
  {
    id: "8",
    title: "Disclaimers & Limitation of Liability",
    content:
      "One Nexuz delivers services in good faith but does not guarantee approvals or specific outcomes from government, banking, or regulatory processes. The Company is not liable for delays or denials by authorities, banks, or third parties. In no event will One Nexuz be liable for indirect, incidental, or consequential damages arising from services.",
  },
  {
    id: "9",
    title: "Confidentiality & Data Privacy",
    content:
      "One Nexuz respects client confidentiality and data privacy in accordance with UAE laws. Client information may be shared with authorized third parties as required to deliver services. All documents and data submitted are used solely for the purpose of providing the requested service.",
  },
  {
    id: "10",
    title: "Termination",
    content:
      "Services may be suspended or terminated if a Client breaches these Terms, provides false information, or fails to make required payments. Clients may terminate services, but payments made in advance may remain non-refundable, depending on the service.",
  },
  {
    id: "11",
    title: "Changes to Terms",
    content:
      "One Nexuz reserves the right to update or modify these Terms at any time. Continued use of our website or services after such updates constitutes acceptance of the new Terms.",
  },
  {
    id: "12",
    title: "Governing Law & Dispute Resolution",
    content:
      "These Terms are governed by the laws of the United Arab Emirates (UAE). Any disputes arising shall be subject to the exclusive jurisdiction of the competent UAE courts.",
  },
  {
    id: "13",
    title: "Contact Us",
    content: "For questions about these Terms, please contact:",
    listKeyValue: [
      {
        key: "Email",
        value: "info@onenexuz.ae",
      },
      {
        key: "Phone",
        value: "+971 555 0105",
      },
      {
        key: "Address",
        value: "Dubai, United Arab Emirates",
      },
    ],
  },
];

export const termsSectionsAr = [
  {
    id: "1",
    title: "مقدمة",
    content:
      "تقدم ون نكسوز حلولاً شاملة لإعداد الأعمال، والخدمات المؤسسية، ومساعدات التأشيرة/الانتقال، واستشارات الخدمات المصرفية/الثروة، والخدمات الرقمية/العلامة التجارية في الإمارات العربية المتحدة. تحكم هذه الشروط استخدامك لموقعنا الإلكتروني (onenexuz.ae) واستخدامك لخدماتنا. من خلال التعامل معنا، فإنك توافق على الالتزام بهذه الشروط.",
  },
  {
    id: "2",
    title: "تعريفات",
    subsections: [
      {
        subtitle: "الشركة / ون نكسوز:",
        content: "تشير إلى ون نكسوز والشركات التابعة لها والفرعية وممثليها.",
      },
      {
        subtitle: "العميل / المستخدم:",
        content:
          "أي فرد أو كيان يستخدم خدماتنا أو يتفاعل مع موقعنا الإلكتروني.",
      },
      {
        subtitle: "الخدمات:",
        content:
          "أي خدمة تقدمها ون نكسوز، بما في ذلك على سبيل المثال لا الحصر: إعداد الأعمال، التأشيرة/الانتقال، استشارات الخدمات المصرفية/الثروة، والحلول الرقمية/العلامة التجارية.",
      },
    ],
  },
  {
    id: "3",
    title: "قبول الشروط",
    content:
      "من خلال الوصول إلى الموقع الإلكتروني أو استخدام خدمات ون نكسوز، فإنك تؤكد أنك:",
    list: [
      "تبلغ من العمر 18 عاماً على الأقل؛",
      "توافق على هذه الشروط؛",
      "ستقدم معلومات دقيقة وكاملة؛",
      "تفهم أن ون نكسوز قد تقوم بتحديث هذه الشروط من وقت لآخر، مع سريان التغييرات فور نشرها.",
    ],
  },
  {
    id: "4",
    title: "نطاق الخدمات",
    content: "تقدم ون نكسوز مجموعة من الخدمات، والتي تشمل:",
    list: [
      "^إعداد الأعمال والخدمات المؤسسية:^ تأسيس الشركات، التراخيص، خدمات البرو، دعم الامتثال.",
      "^خدمات التأشيرة/الانتقال:^ تأشيرات الإقامة، بطاقات العمل، مساعدة الانتقال.",
      "^الخدمات المصرفية واستشارات الثروة:^ مساعدات فتح الحسابات البنكية، الاستشارات المالية والقانونية.",
      "^الخدمات الرقمية والعلامة التجارية:^ تصميم المواقع الإلكترونية، التسويق، العلامة التجارية، إنشاء المحتوى.",
    ],
    footerText:
      "يتم تقديم كل خدمة وفقاً للنطاق المتفق عليه مع العميل. تحتفظ الشركة بالحق في تعديل أو تعليق أو إنهاء أي خدمة.",
  },
  {
    id: "5",
    title: "شروط الدفع",
    list: [
      "جميع الرسوم بالدرهم الإماراتي، ما لم يتم الاتفاق على خلاف ذلك.",
      "قد تكون المدفوعات مطلوبة مقدماً، كاملة أو على أقساط حسب الخدمة.",
      "تشمل طرق الدفع المقبولة: التحويل البنكي، بطاقات الائتمان/الخصم، أو طرق أخرى توافق عليها ون نكسوز.",
      "ما لم يُذكر صراحة، فإن المدفوعات غير قابلة للاسترداد. أي طلبات استرداد تخضع لتقدير الشركة الحصري.",
      "قد يؤدي التأخر في الدفع أو عدم اكتماله إلى تعليق أو إنهاء الخدمات.",
    ],
  },
  {
    id: "6",
    title: "مسؤوليات العميل",
    content: "يوافق العملاء على:",
    list: [
      "تقديم معلومات دقيقة وكاملة لتقديم الخدمة؛",
      "الرد بسرعة على الاستفسارات أو الموافقات أو الطلبات؛",
      "الحفاظ على أمان أي بيانات اعتماد حساب أو معلومات سرية؛",
      "الامتثال لقوانين وأنظمة الإمارات العربية المتحدة ذات الصلة بالخدمات المقدمة.",
    ],
  },
  {
    id: "7",
    title: "الملكية الفكرية",
    content:
      "تظل المواد والتصاميم والمحتوى الذي تقدمه ون نكسوز ملكية فكرية للشركة ما لم يتم الاتفاق على خلاف ذلك كتابياً. يجوز للعملاء استخدام هذه المواد فقط للأغراض المقصودة. يُحظر الاستخدام غير المصرح به.",
  },
  {
    id: "8",
    title: "إخلاء المسؤولية والحد من المسؤولية",
    content:
      "تقدم ون نكسوز الخدمات بحسن نية ولكنها لا تضمن الموافقات أو نتائج محددة من العمليات الحكومية أو المصرفية أو التنظيمية. الشركة ليست مسؤولة عن التأخيرات أو الرفض من قبل السلطات أو البنوك أو الأطراف الثالثة. في أي حال، لن تكون ون نكسوز مسؤولة عن الأضرار غير المباشرة أو العرضية أو التبعية الناشئة عن الخدمات.",
  },
  {
    id: "9",
    title: "السرية وخصوصية البيانات",
    content:
      "تحترم ون نكسوز سرية العميل وخصوصية البيانات وفقاً لقوانين الإمارات العربية المتحدة. قد يتم مشاركة معلومات العميل مع أطراف ثالثة معتمدة عند الحاجة لتقديم الخدمات. يتم استخدام جميع المستندات والبيانات المقدمة فقط لغرض تقديم الخدمة المطلوبة.",
  },
  {
    id: "10",
    title: "إنهاء الخدمة",
    content:
      "يجوز تعليق الخدمات أو إنهاؤها إذا انتهك العميل هذه الشروط، أو قدم معلومات خاطئة، أو فشل في سداد المدفوعات المطلوبة. يجوز للعملاء إنهاء الخدمات، ولكن قد تظل المدفوعات المقدمة غير قابلة للاسترداد، حسب الخدمة.",
  },
  {
    id: "11",
    title: "تغييرات الشروط",
    content:
      "تحتفظ ون نكسوز بالحق في تحديث أو تعديل هذه الشروط في أي وقت. استمرار استخدام موقعنا الإلكتروني أو خدماتنا بعد هذه التحديثات يعني قبول الشروط الجديدة.",
  },
  {
    id: "12",
    title: "القانون الحاكم وتسوية المنازعات",
    content:
      "تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة. تخضع أي نزاعات تنشأ للاختصاص الحصري للمحاكم الإماراتية المختصة.",
  },
  {
    id: "13",
    title: "اتصل بنا",
    content: "للأسئلة حول هذه الشروط، يرجى الاتصال بـ:",
    listKeyValue: [
      {
        key: "البريد الإلكتروني",
        value: "info@onenexuz.ae",
      },
      {
        key: "الهاتف",
        value: "+971 555 0105",
      },
      {
        key: "العنوان",
        value: "دبي، الإمارات العربية المتحدة",
      },
    ],
  },
];

const icons = [
  {
    id: "1",
    icon: "/icons/terms/Container1.svg",
  },
  {
    id: "2",
    icon: "/icons/terms/Container2.svg",
  },
  {
    id: "3",
    icon: "/icons/terms/Container3.svg",
  },
  {
    id: "4",
    icon: "/icons/terms/Container4.svg",
  },
  {
    id: "5",
    icon: "/icons/terms/Container5.svg",
  },
  {
    id: "6",
    icon: "/icons/terms/Container6.svg",
  },
  {
    id: "7",
    icon: "/icons/terms/Container7.svg",
  },
  {
    id: "8",
    icon: "/icons/terms/Container8.svg",
  },
  {
    id: "9",
    icon: "/icons/terms/Container9.svg",
  },
  {
    id: "10",
    icon: "/icons/terms/Container10.svg",
  },
  {
    id: "11",
    icon: "/icons/terms/Container11.svg",
  },
  {
    id: "12",
    icon: "/icons/terms/Container12.svg",
  },
  {
    id: "13",
    icon: "/icons/terms/Container13.svg",
  },
];

const TermsConditions = () => {
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

  const sections = locale === "ar" ? termsSectionsAr : termsSections;

  return (
    <div>
      {/* Header with bg image and specific height with content */}
      <div
        className="pb-12 pt-[4rem] lg:pt-[10rem] relative min-h-[40dvh] w-full bg-cover bg-center bg-no-repeat lg:mt-[3.5rem]"
        style={{ backgroundImage: "url('/assets/terms-header.webp')" }}
      >
        <div className="container px-4 py-10 space-y-4">
          <Typography as="h1" size="3xl" weight="bold" color="primary">
            {ar ? "ون نكز" : "One Nexuz"}
          </Typography>
          <Typography size="3xl" weight="bold" color="white">
            {ar ? "الشروط والأحكام" : "Terms & Conditions"}
          </Typography>
          <Typography size="base" color="white" className="max-w-[630px]">
            {ar
              ? "مرحبًا بك في ون نكز. باستخدامك لموقعنا أو خدماتنا، فإنك توافق على هذه الشروط والأحكام. يرجى قراءتها بعناية قبل التفاعل معنا."
              : "Welcome to One Nexuz. By using our website or services, you agree to these Terms and Conditions. Please read them carefully before engaging with us."}
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
              className="scroll-mt-40"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary text-white font-bold min-w-[28px] h-7 flex items-center justify-center rounded-sm text-sm">
                  {section.id}
                </span>
                <Typography as="h2" size="2xl" weight="bold" color="black">
                  {section.title}
                </Typography>
              </div>

              {section.content && (
                <Typography
                  size="sm"
                  color="gray"
                  className="leading-relaxed mb-4"
                >
                  {section.content}
                </Typography>
              )}

              {section.subsections?.map((sub, idx) => (
                <div key={idx} className="mt-4">
                  <Typography as="h4" size="base" weight="bold" color="black">
                    {sub.subtitle}
                  </Typography>
                  <Typography size="sm" color="gray" className="mt-1">
                    {sub.content}
                  </Typography>
                </div>
              ))}

              {section.list && <ContentList items={section.list} />}

              {section.note && (
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-primary">
                  <Typography size="sm" className="text-primary">
                    {section.note}
                  </Typography>
                </div>
              )}

              {section.footerText && (
                <Typography size="sm" color="gray" className="mt-6 italic">
                  {section.footerText}
                </Typography>
              )}

              {section.listKeyValue && (
                <div className="mt-6">
                  <ContentListKeyValue items={section.listKeyValue} />
                </div>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TermsConditions;

const Sidebar = ({ sections, activeId, onScrollTo, ar }) => {
  return (
    <aside className="md:w-[400px] pb-1">
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
                flex items-center gap-3 px-4 cursor-pointer py-3 text-left transition-all border border-primary
                hover:bg-primary/8 group
                ${activeId === item.id ? "bg-primary/8" : ""}
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
