"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Image from "@/components/Image/Image";
import { useContext } from "react";

const RequirementsSection = () => {
  const { locale } = useContext(LanguageContext);

  const RequirementsDataEn = {
    heading: "Requirements",
    residentsTitle: "UAE Residents",
    residentsList: ["UAE Driving License", "Emirates ID"],
    visitorsTitle: "UAE Visitors",
    visitorsList: [
      "Passports",
      "Visit Visa",
      "Home Country Driving License",
      "International Driving Permit (IDP)",
    ],
    note: "NOTE",
    notesList: [
      "DEPOSIT FOR BIG & LUXURY CARS (3000 - 5000 AED)",
      "DEPOSIT FOR SMALL & ECONOMY CARS (1500 - 2000 AED)",
    ],
  };

  const RequirementsDataAr = {
    heading: "المتطلبات",
    residentsTitle: "المقيمون في الإمارات",
    residentsList: ["رخصة قيادة إماراتية", "بطاقة الهوية الإماراتية"],
    visitorsTitle: "زوار الإمارات",
    visitorsList: [
      "جواز السفر",
      "تأشيرة زيارة",
      "رخصة القيادة من بلدك",
      "رخصة القيادة الدولية",
    ],
    note: "ملاحظة",
    notesList: [
      "الوديعة للسيارات الفاخرة والكبيرة (3000 - 5000 درهم)",
      "الوديعة للسيارات الصغيرة والاقتصادية (1500 - 2000 درهم)",
    ],
  };

  const content = locale === "ar" ? RequirementsDataAr : RequirementsDataEn;

  return (
    <section className="secPadding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="display2 mb-6">{content.heading}</h2>

            {/* UAE Residents */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {content.residentsTitle}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {content.residentsList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* UAE Visitors */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {content.visitorsTitle}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {content.visitorsList.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Note */}
            <div className="mt-4">
              <p className="text-red-600 font-bold mb-2 text-xl">
                {content.note}
              </p>
              <ul className="list-disc list-inside text-gray-700">
                {content.notesList.map((item, idx) => (
                  <li key={idx} className="font-semibold">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full">
            <Image
              src="/assets/images/image_58.webp"
              alt="Woman Driving"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
