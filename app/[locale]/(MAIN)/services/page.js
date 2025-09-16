import { SEOAction } from "@/actions/seo-action";
import { isIndex } from "@/constants/constants";
import ServicePage from "@/view/Service/ServicePage";
import React from "react";

export async function generateMetadata() {
    const vMetaData = await SEOAction();

    return {
        title: vMetaData?.seo_title || "Dubai’s Premier Luxury Car Rental Service",
        description:
            vMetaData?.seo_description || "Dubai’s Premier Luxury Car Rental Service",
        alternates: {
            canonical: vMetaData?.canonical_url || "https://carsolution.ae/en",
        },
        openGraph: {
            title: "Dubai’s Premier Luxury Car Rental Service",
            description: "Dubai’s Premier Luxury Car Rental Service",
            url: "https://carsolution.ae/en",
            type: "website",
            images: [
                {
                    url: "https://carsolution.ae/assets/images/seoImg.png",
                    width: 1200,
                    height: 630,
                    alt: "Luxury Car Image",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Dubai’s Premier Luxury Car Rental Service",
            description: "Dubai’s Premier Luxury Car Rental Service",
            images: ["https://carsolution.ae/assets/images/seoImg.png"],
        },
        robots: {
            index: isIndex,
            nocache: true,
        },
    };
}

const page = async () => {
    const { h1, faq } = await generateMetadata();

    return (
        <div>
            <ServicePage h1={h1} faq={faq} />
        </div>
    );
};

export default page;
