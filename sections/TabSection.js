"use client";
import { useState } from "react";
import Image from "next/image";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import Button from "@/components/Button/Button";
import Heading4 from "@/components/Typography/Heading4";
import Link from "@/components/Link/Link";
import Heading3 from "@/components/Typography/Heading3";

// Data for all tabs
const tabData = {
    business: {
        label: "Business Setup",
        inner: [
            {
                id: "freezone",
                label: "UAE Free Zone",
                title: "UAE Free Zone",
                statsTitle: "UAE Free Zone",
                paragraph: "Set up your company in top UAE Free Zones with 100% ownership and zero tax hassle. Enjoy fast-track licensing and dedicated support.",
                stats: "1500+",
                statsText: "businesses launched across top Free Zones with stress-free approvals.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "mainland",
                label: "UAE Mainland",
                title: "UAE Mainland",
                statsTitle: "UAE Mainland",
                paragraph: "Register your business in UAE Mainland and access broader markets with local credibility.",
                stats: "2000+",
                statsText: "businesses operating successfully in Mainland with strong networks.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "offshore",
                label: "UAE Offshore",
                title: "UAE Offshore",
                statsTitle: "UAE Offshore",
                paragraph: "Protect assets and enjoy global operations flexibility with UAE Offshore company formation.",
                stats: "1000+",
                statsText: "companies benefiting from offshore advantages worldwide.",
                image: "/assets/images/image_01.webp",
            },
        ],
    },
    corporate: {
        label: "Corporate Services",
        inner: [
            {
                id: "payroll",
                label: "Payroll Management",
                title: "Payroll Management",
                statsTitle: "Payroll Management",
                paragraph: "Simplify your entire payroll process with secure, automated solutions that ensure timely payments, legal compliance, and peace of mind.",
                stats: "500+",
                statsText: "businesses trust us for error-free, confidential payroll management across the UAE.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "health",
                label: "Health Insurance",
                title: "Health Insurance",
                statsTitle: "Health Insurance",
                paragraph: "Comprehensive health insurance packages tailored for businesses and employees.",
                stats: "1200+",
                statsText: "clients covered with our trusted health insurance solutions.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "business-insurance",
                label: "Business Insurance",
                title: "Business Insurance",
                statsTitle: "Business Insurance",
                paragraph: "Secure your company assets and operations with tailored business insurance policies.",
                stats: "800+",
                statsText: "businesses protected with our specialized insurance services.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "trademark",
                label: "Trademark Registration",
                title: "Trademark Registration",
                statsTitle: "Trademark Registration",
                paragraph: "Protect your brand identity with hassle-free trademark registration services.",
                stats: "400+",
                statsText: "trademarks registered with full compliance and efficiency.",
                image: "/assets/images/image_01.webp",
            },
        ],
    },
    banking: {
        label: "Banking & Wealth",
        inner: [
            {
                id: "payroll",
                label: "Payroll Management",
                title: "Payroll Management",
                statsTitle: "Payroll Management",
                paragraph: "Simplify your entire payroll process with secure, automated solutions that ensure timely payments, legal compliance, and peace of mind.",
                stats: "500+",
                statsText: "businesses trust us for error-free, confidential payroll management across the UAE.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "health",
                label: "Health Insurance",
                title: "Health Insurance",
                statsTitle: "Health Insurance",
                paragraph: "Comprehensive health insurance packages tailored for businesses and employees.",
                stats: "1200+",
                statsText: "clients covered with our trusted health insurance solutions.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "business-insurance",
                label: "Business Insurance",
                title: "Business Insurance",
                statsTitle: "Business Insurance",
                paragraph: "Secure your company assets and operations with tailored business insurance policies.",
                stats: "800+",
                statsText: "businesses protected with our specialized insurance services.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "trademark",
                label: "Trademark Registration",
                title: "Trademark Registration",
                statsTitle: "Trademark Registration",
                paragraph: "Protect your brand identity with hassle-free trademark registration services.",
                stats: "400+",
                statsText: "trademarks registered with full compliance and efficiency.",
                image: "/assets/images/image_01.webp",
            },
        ],
    },
    digital: {
        label: "Digital Tech",
        inner: [
            {
                id: "payroll",
                label: "Payroll Management",
                title: "Payroll Management",
                statsTitle: "Payroll Management",
                paragraph: "Simplify your entire payroll process with secure, automated solutions that ensure timely payments, legal compliance, and peace of mind.",
                stats: "500+",
                statsText: "businesses trust us for error-free, confidential payroll management across the UAE.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "health",
                label: "Health Insurance",
                title: "Health Insurance",
                statsTitle: "Health Insurance",
                paragraph: "Comprehensive health insurance packages tailored for businesses and employees.",
                stats: "1200+",
                statsText: "clients covered with our trusted health insurance solutions.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "business-insurance",
                label: "Business Insurance",
                title: "Business Insurance",
                statsTitle: "Business Insurance",
                paragraph: "Secure your company assets and operations with tailored business insurance policies.",
                stats: "800+",
                statsText: "businesses protected with our specialized insurance services.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "trademark",
                label: "Trademark Registration",
                title: "Trademark Registration",
                statsTitle: "Trademark Registration",
                paragraph: "Protect your brand identity with hassle-free trademark registration services.",
                stats: "400+",
                statsText: "trademarks registered with full compliance and efficiency.",
                image: "/assets/images/image_01.webp",
            },
        ],
    },
    millionaire: {
        label: "Millionaire & Billionaire",
        inner: [
            {
                id: "payroll",
                label: "Payroll Management",
                title: "Payroll Management",
                statsTitle: "Payroll Management",
                paragraph: "Simplify your entire payroll process with secure, automated solutions that ensure timely payments, legal compliance, and peace of mind.",
                stats: "500+",
                statsText: "businesses trust us for error-free, confidential payroll management across the UAE.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "health",
                label: "Health Insurance",
                title: "Health Insurance",
                statsTitle: "Health Insurance",
                paragraph: "Comprehensive health insurance packages tailored for businesses and employees.",
                stats: "1200+",
                statsText: "clients covered with our trusted health insurance solutions.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "business-insurance",
                label: "Business Insurance",
                title: "Business Insurance",
                statsTitle: "Business Insurance",
                paragraph: "Secure your company assets and operations with tailored business insurance policies.",
                stats: "800+",
                statsText: "businesses protected with our specialized insurance services.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "trademark",
                label: "Trademark Registration",
                title: "Trademark Registration",
                statsTitle: "Trademark Registration",
                paragraph: "Protect your brand identity with hassle-free trademark registration services.",
                stats: "400+",
                statsText: "trademarks registered with full compliance and efficiency.",
                image: "/assets/images/image_01.webp",
            },
        ],
    },
    logistics: {
        label: "Logistics & Relocation",
        inner: [
            {
                id: "payroll",
                label: "Payroll Management",
                title: "Payroll Management",
                statsTitle: "Payroll Management",
                paragraph: "Simplify your entire payroll process with secure, automated solutions that ensure timely payments, legal compliance, and peace of mind.",
                stats: "500+",
                statsText: "businesses trust us for error-free, confidential payroll management across the UAE.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "health",
                label: "Health Insurance",
                title: "Health Insurance",
                statsTitle: "Health Insurance",
                paragraph: "Comprehensive health insurance packages tailored for businesses and employees.",
                stats: "1200+",
                statsText: "clients covered with our trusted health insurance solutions.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "business-insurance",
                label: "Business Insurance",
                title: "Business Insurance",
                statsTitle: "Business Insurance",
                paragraph: "Secure your company assets and operations with tailored business insurance policies.",
                stats: "800+",
                statsText: "businesses protected with our specialized insurance services.",
                image: "/assets/images/image_01.webp",
            },
            {
                id: "trademark",
                label: "Trademark Registration",
                title: "Trademark Registration",
                statsTitle: "Trademark Registration",
                paragraph: "Protect your brand identity with hassle-free trademark registration services.",
                stats: "400+",
                statsText: "trademarks registered with full compliance and efficiency.",
                image: "/assets/images/image_01.webp",
            },
        ],
    },
};

const mainTabs = Object.keys(tabData);

export default function MultiTabsSection() {
    const [activeMain, setActiveMain] = useState("business");
    const [activeInner, setActiveInner] = useState(
        tabData["business"].inner[0].id
    );

    const currentInnerTabs = tabData[activeMain].inner;
    const current = currentInnerTabs.find((tab) => tab.id === activeInner);

    return (
        <section className="secPadding">
            <div className="container">
                <div className="max-w-xl mx-auto ">
                    <Heading4
                        blackHeading={`End-to-end business setup, corporate services, wealth, banking, relocation, and digital solutions.`}
                        className={`text-center`}
                    />
                </div>
                <div className="w-full px-6 pb-8 bg-white">
                    {/* Top Main Tabs */}
                    <div className="flex flex-wrap justify-center border-b border-gray-200">
                        {mainTabs.map((key) => (
                            <button
                                key={key}
                                onClick={() => {
                                    setActiveMain(key);
                                    setActiveInner(tabData[key].inner[0].id); // reset to first inner tab
                                }}
                                className={`px-4 py-2 text-sm md:text-base font-medium transition ${activeMain === key
                                    ? "text-red-600 border-b-2 border-red-600"
                                    : "text-gray-600 hover:text-red-500"
                                    }`}
                            >
                                {tabData[key].label}
                            </button>
                        ))}
                    </div>

                    {/* Two-column Layout */}
                    <div className="grid md:grid-cols-3 lg:gap-10 mt-10 items-center">
                        {/* Left Side */}
                        <div>
                            <Heading2
                                blackHeading={current.title}
                                className={`text-primary`}
                            />
                            {current.paragraph &&
                                <Paragraph
                                    className=""
                                    blackText1={current.paragraph}
                                />
                            }

                            <Button
                                variant={`primary`}
                                text={`Explore Now`}
                            />
                            {/* Stats Box */}
                            <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-sm w-fit">
                                <Heading4
                                    blackHeading={current.statsTitle}
                                    className={``}
                                />
                                <div className="bg-white rounded-xl p-4">
                                    <Heading2
                                        blackHeading={current.stats}
                                        className={`lg:!text-5xl`}
                                    />
                                    <Paragraph
                                        className=""
                                        blackText1={current.statsText}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-span-2">
                            {/* Inner Tabs */}
                            <div className="flex flex-wrap space-x-6 mb-4 border-b border-gray-200">
                                {currentInnerTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveInner(tab.id)}
                                        className={`pb-2 text-sm transition ${activeInner === tab.id
                                            ? "text-red-600 border-b-2 border-red-600"
                                            : "text-gray-600 hover:text-red-500"
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                                <div className="ml-auto text-sm text-gray-500 hover:text-red-500">
                                    <Link href={`/`} variant={`txt`} >
                                        View All
                                    </Link>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="aspect-[791px/288px] rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src={current.image}
                                    alt={current.title}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
