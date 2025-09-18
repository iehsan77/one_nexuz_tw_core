import Image from '@/components/Image/Image';
import Heading2 from '@/components/Typography/Heading2';
import Paragraph from '@/components/Typography/Paragraph';
import { useState } from 'react';

const tabs = [
    'Mortgage Partners',
    'Banking Partners',
    'Wealth Management Partners',
    'Government Entities We Work Closely With',
];

const partners = {
    'Mortgage Partners': [
        { logo: '/assets/images/partner_01.webp' },
        { logo: '/assets/images/partner_02.webp' },
        { logo: '/assets/images/partner_03.webp' },
    ],
    'Banking Partners': [
        { logo: '/assets/images/partner_01.webp' },
        { logo: '/assets/images/partner_02.webp' },
        { logo: '/assets/images/partner_03.webp' },
    ],
    'Wealth Management Partners': [
        { logo: '/assets/images/partner_01.webp' },
        { logo: '/assets/images/partner_02.webp' },
        { logo: '/assets/images/partner_03.webp' },
    ],
    'Government Entities We Work Closely With': [
        { logo: '/assets/images/partner_01.webp' },
        { logo: '/assets/images/partner_02.webp' },
        { logo: '/assets/images/partner_03.webp' },
    ],
};

export default function PartnersSection({ heading, paragraph }) {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="secPadding">
            <div className="container">

                <div className="max-w-lg mx-auto">
                    <Heading2 className="text-center" blackHeading={heading} />
                    {paragraph?.map((para, ind) => (
                        <Paragraph blackText1={para} key={ind} className="!mb-0" />
                    ))}
                </div>
                {/* Tabs */}
                <div className="flex flex-wrap bg-primaryLight py-2 px-3">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 text-sm px-4 py-2 font-medium text-center transition-colors ${activeTab === tab
                                ? 'bg-red-600 text-white'
                                : 'bg-red-50 text-gray-800 hover:bg-red-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
                    {partners[activeTab]?.length > 0 ? (
                        partners[activeTab].map((partner, ind) => (
                            <Image
                                key={ind}
                                src={partner.logo}
                                alt={'partner'}
                                width={180}
                                height={80}
                                className="object-contain"
                            />
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">No partners listed under this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
}


