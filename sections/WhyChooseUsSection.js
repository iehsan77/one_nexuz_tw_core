"use client";
import React from "react";
import Image from "next/image";

const reasons = [
    {
        icon: "/assets/icons/icon_30.svg",
        title: "Teamwork",
    },
    {
        icon: "/assets/icons/icon_31.svg",
        title: "Positive Culture",
    },
    {
        icon: "/assets/icons/icon_32.svg",
        title: "Grow Strong & Uplift Others",
    },
    {
        icon: "/assets/icons/icon_33.svg",
        title: "Impact What Matters Most",
    },
    {
        icon: "/assets/icons/icon_34.svg",
        title: "Be Open & Confident",
    },
    {
        icon: "/assets/icons/icon_35.svg",
        title: "Never Stop Learning",
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Present this section as feature cards or icon based bullets for quick scanning. Each point has an expanded message for clarity and impact.
                </p>

                <div className="max-w-3xl mx-auto ">
                <div className="flex flex-wrap justify-center gap-4">
                    {reasons.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-3 bg-pingLight px-4 py-3 rounded-xl sm:w-auto w-full shadow-sm hover:shadow-md transition"
                        >
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={32}
                                height={32}
                                className="flex-shrink-0"
                            />
                            <span className="text-sm font-medium text-gray-800">{item.title}</span>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
