export const navData = [
  {
    id: 1,
    title: "Business Setup",
    url: "/business-setup-services-in-uae",
    view: "tabView",
    tabs: [
      {
        id: 1,
        title: "UAE Free Zone",
        url: "/uae-free-zone-company-formation",
        items: [
          {
            id: 1,
            title: "Dubai Free Zone",
            url: "/dubai-free-zone-company-formation",
            links: [
              { id: 1, title: "DAFZ - Dubai Airport Free Zone", url: "#" },
              { id: 2, title: "DAZ - Dubai Auto Zone", url: "#" },
              { id: 3, title: "DIC - Dubai Internet City", url: "#" },
              { id: 4, title: "DMC - Dubai Media City", url: "#" },
              {
                id: 5,
                title: "DMCC - Dubai Multi Commodities Center",
                url: "#",
              },
              { id: 6, title: "DSO - Dubai Silicon Oasis", url: "#" },
              { id: 7, title: "Dubai South- Dubai South Free Zone", url: "#" },
              {
                id: 8,
                title: "DTEC - Dubai Technology Entrepreneur Center",
                url: "#",
              },
              {
                id: 9,
                title: "DWTC - Dubai World Trade Center Free Zone",
                url: "#",
              },
              { id: 10, title: "Expo City Dubai Free Zone", url: "#" },
              {
                id: 11,
                title: "IFZA - International Free Zone Authority",
                url: "#",
              },
              { id: 12, title: "MFZ - Meydan Free Zone", url: "#" },
              {
                id: 13,
                title: "TECOM - Technology Electronic Commerce and Media Group",
                url: "#",
              },
            ],
          },
          {
            id: 2,
            title: "Abu Dhabi Free zone",
            url: "/abu-dhabi-free-zone-company-formation",
            links: [
              { id: 1, title: "ADGM - Abu Dhabi Global Market", url: "#" },
              {
                id: 2,
                title: "KIZAD - Khalifa Industrial Zone Abu Dhabi",
                url: "#",
              },
              { id: 3, title: "Twofour54 (Media & Creative)", url: "#" },
              { id: 4, title: "Masdar City Free Zone", url: "#" },
              { id: 5, title: "ADAFZ - Abu Dhabi Airport Free Zone", url: "#" },
            ],
          },
          {
            id: 3,
            title: "Sharjah Free Zone",
            url: "/sharjah-free-zone-company-formation",
            links: [
              {
                id: 1,
                title: "SPC - Sharjah Publishing City Free Zone",
                url: "#",
              },
              { id: 2, title: "HFZA - Hamriyah Free Zone", url: "#" },
              {
                id: 3,
                title: "SAIF - Sharjah Airport International free zone",
                url: "#",
              },
              {
                id: 4,
                title: "SHAMS - Sharjah Media City free zone",
                url: "#",
              },
            ],
          },
          {
            id: 4,
            title: "Ajman Free Zone",
            url: "/ajman-free-zone-company-formation",
            links: [
              { id: 1, title: "AMC - Ajman Media City Free Zone", url: "#" },
            ],
          },
          {
            id: 5,
            title: "Ras Al Khaimah Free Zone",
            url: "/ras-al-khaimah-free-zone-company-formation",
            links: [
              {
                id: 1,
                title: "RAKEZ - Ras Al Khaimah Economic Zone",
                url: "#",
              },
              { id: 2, title: "RAK Maritime City Free Zone", url: "#" },
              { id: 3, title: "RAK DAO - RAK Digital Assets Oasis", url: "#" },
            ],
          },
          {
            id: 6,
            title: "Umm Al Quwain Free Zone",
            url: "/umm-al-quwain-free-zone-company-formation",
            links: [
              { id: 1, title: "UAQ FTZ - Umm Al Quwain Free Zone", url: "#" },
            ],
          },
          {
            id: 7,
            title: "Fujairah Free Zone",
            url: "/fujairah-free-zone-company-formation",
            links: [{ id: 1, title: "FCC - Fujairah Creative City", url: "#" }],
          },
        ],
      },
      //=====================
      //=====================
      {
        id: 2,
        title: "UAE Mainland",
        url: "/uae-mainland-company-formation",
        view: "childView",
        items: [
          {
            id: 1,
            title: "",
            url: "#",
            links: [
              {
                id: 1,
                title: "Dubai Mainland",
                url: "/dubai-mainland-company-formation",
              },
              {
                id: 2,
                title: "Abu Dhabi Mainland",
                url: "/abu-dhabi-mainland-company-formation",
              },
              {
                id: 3,
                title: "Ajman Mainland",
                url: "/ajman-mainland-company-formation",
              },
              {
                id: 4,
                title: "Sharjah Mainland",
                url: "/sharjah-mainland-company-formation",
              },
            ],
          },
        ],
      },
      //=====================
      //=====================
      {
        id: 3,
        title: "UAE Offshore",
        view: "childView",
        url: "/uae-offshore-company-formation",
        items: [
          {
            id: 1,
            title: "",
            url: "#",
            links: [
              {
                id: 1,
                title: "Dubai Offshore",
                url: "/dubai-offshore-company-formation",
              },
              {
                id: 2,
                title: "Jebel Ali Offshore",
                url: "/jebel-ali-offshore-company-formation",
              },
              {
                id: 3,
                title: "Ras Al Khaimah Offshore",
                url: "/rak-offshore-company-formation",
              },
              {
                id: 4,
                title: "Ajman Offshore",
                url: "/ajman-offshore-company-formation",
              },
            ],
          },
        ],
      },
      //=====================
      //=====================
      {
        id: 4,
        title: "Business Activities Consultancy",
        url: "/business-activities-consultancy",
        items: [],
      },
      //=====================
      //=====================
      {
        id: 5,
        title: "Office Solutions",
        view: "childView",
        url: "/office-solutions-in-uae",
        items: [
          {
            id: 1,
            title: "",
            url: "#",
            links: [
              {
                id: 1,
                title: "Physical Office Leasing",
                url: "/physical-offices-in-uae",
              },
              { id: 2, title: "Flexi Desk / Smart Desk Solutions", url: "#" },
              {
                id: 3,
                title: "Virtual Office Services",
                url: "/virtual-offices-in-uae",
              },
              {
                id: 4,
                title: "Co-working Space Solutions",
                url: "/co-working-offices-in-uae",
              },
            ],
          },
        ],
      },
      //=====================
      //=====================
      {
        id: 6,
        title: "Business License",
        url: "/business-license-in-uae",
        items: [
          {
            id: 1,
            title: "Free Zone License",
            url: "#",
            links: [
              {
                id: 1,
                title: "Commercial License",
                url: "/commercial-license-in-uae",
              },
              { id: 2, title: "Real Estate License", url: "#" },
              {
                id: 3,
                title: "Industrial License",
                url: "/industrial-license-in-uae",
              },
              {
                id: 4,
                title: "Professional License",
                url: "/professional-license-in-uae",
              },
              { id: 5, title: "Dual License", url: "/dual-license-in-uae" },
              {
                id: 6,
                title: "Crypto & Web3 License",
                url: "/crypto-and-web3-license-in-uae",
              },
              { id: 7, title: "Event License", url: "/event-license-in-uae" },
              { id: 8, title: "E-commerce License ", url: "#" },
              {
                id: 9,
                title: "Freelancer Permit",
                url: "/freelancer-permit-in-uae",
              },
            ],
          },
          {
            id: 2,
            title: "Mainland Licence",
            links: [
              { id: 1, title: "Commercial License", url: "#" },
              { id: 2, title: "Real Estate License", url: "#" },
              { id: 3, title: "Event License", url: "#" },
              { id: 4, title: "E-commerce License ", url: "#" },
              { id: 5, title: "Crypto & Web3 License", url: "#" },
              { id: 6, title: "Industrial License", url: "#" },
              { id: 7, title: "Professional License", url: "#" },
            ],
          },
          {
            id: 3,
            title: "Business Licenses",
            links: [
              { id: 1, title: "Commercial License", url: "#" },
              { id: 2, title: "Real Estate License", url: "#" },
              { id: 3, title: "Industrial License", url: "#" },
              { id: 4, title: "Professional License", url: "#" },
              { id: 5, title: "Crypto & Web3 License", url: "#" },
              { id: 6, title: "Event License", url: "#" },
              { id: 7, title: "E-commerce License", url: "#" },
              { id: 7, title: "Freelancer Permit", url: "#" },
            ],
          },
        ],
      },
      //=====================
      //=====================
      {
        id: 7,
        title: "PRO Services UAE",
        url: "/pro-services-in-uae",
        items: [
          {
            id: 1,
            title: "PRO Services Dubai",
            url: "/pro-services-dubai",
            links: [
              {
                id: 1,
                title: "Copyright Registration",
                url: "/copyright-registration",
              },
              {
                id: 2,
                title: "Company Registration",
                url: "/company-registration",
              },
              { id: 3, title: "Trade Name Reservation", url: "#" },
              {
                id: 4,
                title: "Trademark Registration & Renewal",
                url: "/trademark-registration",
              },
              {
                id: 5,
                title: "License Registration & Renewal",
                url: "/license-registration-and-renewal",
              },
              {
                id: 6,
                title: "VAT Registration & Filing",
                url: "/vat-registration-and-filing",
              },
              {
                id: 7,
                title: "Ejari (Tenancy Contract Registration)",
                url: "/ejari-tenancy-contract-registration",
              },
              { id: 8, title: "Corporate Tax Registration & Filing", url: "#" },
              {
                id: 9,
                title: "Document Attestation",
                url: "/document-attestation",
              },
              { id: 10, title: "Legal Translation", url: "/legal-translation" },
              {
                id: 11,
                title: "Power of Attorney Drafting",
                url: "/power-of-attorney-drafting",
              },
              { id: 12, title: "Notarisation Services", url: "#" },
              // {
              //   id: 13,
              //   title: "Economic Substance Regulation (ESR) Filing",
              //   url: "#",
              // },
              {
                id: 14,
                title: "Ultimate Beneficial Owner (UBO) Filing",
                url: "#",
              },
            ],
          },
          {
            id: 2,
            title: "PRO Services Abu Dhabi",
            url: "/pro-services-abu-dhabi",
            links: [
              {
                id: 1,
                title: "Copyright Registration",
                url: "/copyright-registration",
              },
              {
                id: 2,
                title: "Company Registration",
                url: "/company-registration",
              },
              { id: 3, title: "Trade Name Reservation", url: "#" },
              { id: 4, title: "Trademark Registration & Renewal", url: "#" },
              { id: 5, title: "License Registration & Renewal", url: "#" },
              { id: 6, title: "VAT Registration & Filing", url: "#" },
              {
                id: 7,
                title: "Ejari (Tenancy Contract Registration)",
                url: "#",
              },
              { id: 8, title: "Corporate Tax Registration & Filing", url: "#" },
              { id: 9, title: "Document Attestation", url: "#" },
              { id: 10, title: "Legal Translation", url: "#" },
              { id: 11, title: "Power of Attorney Drafting", url: "#" },
              { id: 12, title: "Notarisation Services", url: "#" },
              // {
              //   id: 13,
              //   title: "Economic Substance Regulation (ESR) Filing",
              //   url: "#",
              // },
              {
                id: 14,
                title: "Ultimate Beneficial Owner (UBO) Filing",
                url: "#",
              },
            ],
          },
          {
            id: 3,
            title: "PRO Services Sharjah",
            url: "/pro-services-sharjah",
            links: [
              {
                id: 1,
                title: "Copyright Registration",
                url: "/copyright-registration",
              },
              { id: 2, title: "Company Registration", url: "#" },
              { id: 3, title: "Trade Name Reservation", url: "#" },
              { id: 4, title: "Trademark Registration & Renewal", url: "#" },
              { id: 5, title: "License Registration & Renewal", url: "#" },
              { id: 6, title: "VAT Registration & Filing", url: "#" },
              {
                id: 7,
                title: "Ejari (Tenancy Contract Registration)",
                url: "#",
              },
              { id: 8, title: "Corporate Tax Registration & Filing", url: "#" },
              { id: 9, title: "Document Attestation", url: "#" },
              { id: 10, title: "Legal Translation", url: "#" },
              { id: 11, title: "Power of Attorney Drafting", url: "#" },
              { id: 12, title: "Notarisation Services", url: "#" },
              // {
              //   id: 13,
              //   title: "Economic Substance Regulation (ESR) Filing",
              //   url: "#",
              // },
              {
                id: 14,
                title: "Ultimate Beneficial Owner (UBO) Filing",
                url: "#",
              },
            ],
          },
          {
            id: 4,
            title: "PRO Services Ajman",
            links: [
              {
                id: 1,
                title: "Copyright Registration",
                url: "/copyright-registration",
              },
              { id: 2, title: "Company Registration", url: "#" },
              { id: 3, title: "Trade Name Reservation", url: "#" },
              { id: 4, title: "Trademark Registration & Renewal", url: "#" },
              { id: 5, title: "License Registration & Renewal", url: "#" },
              { id: 6, title: "VAT Registration & Filing", url: "#" },
              {
                id: 7,
                title: "Ejari (Tenancy Contract Registration)",
                url: "#",
              },
              { id: 8, title: "Corporate Tax Registration & Filing", url: "#" },
              { id: 9, title: "Document Attestation", url: "#" },
              { id: 10, title: "Legal Translation", url: "#" },
              { id: 11, title: "Power of Attorney Drafting", url: "#" },
              { id: 12, title: "Notarisation Services", url: "#" },
              // {
              //   id: 13,
              //   title: "Economic Substance Regulation (ESR) Filing",
              //   url: "#",
              // },
              {
                id: 14,
                title: "Ultimate Beneficial Owner (UBO) Filing",
                url: "#",
              },
            ],
          },
        ],
      },
      //=====================
    ],
  },
  {
    id: 2,
    title: "Corporate Services",
    url: "/corporate-services-in-uae",
    view: "parentChildView",
    items: [
      {
        id: 1,
        title: "Accounting Services",
        url: "/accounting-services-in-uae",
        links: [
          {
            id: 1,
            title: "Payroll Management",
            url: "/payroll-management-services-in-uae",
          },
          {
            id: 2,
            title: "VAT & Tax Consultancy",
            url: "/vat-and-tax-consultancy-in-uae",
          },
          {
            id: 3,
            title: "Corporate Tax",
            url: "/corporate-tax-services-in-uae",
          },
        ],
      },
      {
        id: 2,
        title: "Compliance Services",
        url: "/compliance-services-in-uae",
        links: [
          {
            id: 1,
            title: "AML Compliance Setup",
            url: "/aml-compliance-setup",
          },
          { id: 2, title: "Audit Services", url: "#" },
          {
            id: 3,
            title: "Tax Residency Certificate",
            url: "/tax-residency-certificate",
          },
          { id: 4, title: "ISO Certification Assistance", url: "#" },
          {
            id: 5,
            title: "Intellectual Property Rights Protection",
            url: "#",
            items: [
              { id: 1, title: "Trademark Registration", url: "#" },
              { id: 1, title: "Copyright Registration", url: "#" },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Insurance Advisory & Coverage",
        url: "/insurance-advisory-and-coverage-in-uae",
        links: [
          {
            id: 1,
            title: "Business Insurance",
            url: "/business-insurance-in-uae",
          },
          {
            id: 2,
            title: "Health Insurance ",
            url: "/health-insurance-in-uae",
          },
        ],
      },
      {
        id: 4,
        title: "Legal Services",
        url: "/legal-services-in-uae",
        links: [
          {
            id: 1,
            title: "Shareholder Agreement Drafting",
            url: "/shareholder-agreement-drafting",
          },
          { id: 2, title: "HR Policy Drafting", url: "/hr-policy-drafting" },
          {
            id: 3,
            title: "Board Resolution Drafting",
            url: "/board-resolution-drafting",
          },
          {
            id: 4,
            title: "Corporate Governance ",
            url: "/corporate-governance",
            items: [
              {
                id: 1,
                title: "Corporate Structuring & Restructuring",
                url: "#",
              },
              {
                id: 2,
                title: "Company Liquidation & Deregistration",
                url: "/corporate-liquidation-and-deregistration",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "Operational Services",
        url: "/operational-services-in-uae",
        links: [
          { id: 1, title: "IT Services", url: "#" },
          { id: 2, title: "Mail Management", url: "#" },
          { id: 3, title: "Virtual Receptionist", url: "#" },
          {
            id: 4,
            title: "HR & Recruitment Assistance",
            url: "/hr-and-recruitment-assistance",
          },
          {
            id: 5,
            title: "Document Management & Filing Services",
            url: "/document-management-and-filing-services",
          },
          { id: 6, title: "Logistics & Courier Coordination", url: "#" },
          { id: 7, title: "Procurement Support", url: "/procurement-support" },
          {
            id: 8,
            title: "Supplier & Vendor Registration Support",
            url: "/supplier-and-vendor-registration-support",
          },
          {
            id: 9,
            title: "Government Tender Registration Assistance",
            url: "/government-tender-registration-assistance",
          },
        ],
      },
      {
        id: 6,
        title: "Business Solutions",
        url: "/business-solutions-in-uae",
        links: [
          { id: 1, title: "Company Car Registration", url: "#" },
          {
            id: 2,
            title: "Business Plan Preparation",
            url: "/business-plan-preparation",
          },
          {
            id: 3,
            title: "Meeting Room Booking & Hosting",
            url: "/meeting-room-booking-and-hosting",
          },
          {
            id: 4,
            title: "Customs Registration (Imported/Exporter Code)",
            url: "/customs-registration-importer-exporter-code",
          },
          {
            id: 5,
            title: "Market Research & Feasibility Study",
            url: "/market-research-and-feasibility-study",
          },
          {
            id: 6,
            title: "Travel & Visa Support for Executives",
            url: "/travel-and-visa-support-for-executives",
          },
          { id: 7, title: "Local Sponsor Arrangement", url: "#" },
          { id: 8, title: "Local Agent/Partner", url: "#" },
          {
            id: 9,
            title: "Nominee Services",
            url: "/nominee-services",
            items: [
              { id: 1, title: "Nominee Director Services", url: "#" },
              { id: 2, title: "Nominee Shareholder Services", url: "#" },
              {
                id: 3,
                title: "Corporate Bank Account Opening Assistance",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Banking & Wealth",
    url: "/banking-and-wealth-services-in-uae",
    view: "parentChildGridView",
    items: [
      {
        id: 1,
        title: "Wealth Management",
        url: "/wealth-management",
        links: [],
      },
      {
        id: 2,
        title: "Bank Account Opening in the UAE",
        url: "/bank-account-opening-in-the-uae",
        links: [
          {
            id: 1,
            title: "Off Shore Bank Account",
            url: "/off-shore-bank-account-opening-in-uae",
          },
          {
            id: 2,
            title: "Corporate Bank Account",
            url: "/corporate-bank-account-opening-in-uae",
          },
          { id: 3, title: "UAE Non Resident Bank Account", url: "#" },
          { id: 4, title: "UAE Resident Bank Account", url: "#" },
        ],
      },
      {
        id: 3,
        title: "Treasury Management",
        url: "/treasury-management",
        links: [],
      },
      {
        id: 4,
        title: "Corporate Bank Account Opening Assistance",
        url: "/corporate-bank-account-opening-assistance",
        links: [],
      },
    ],
  },
  {
    id: 4,
    title: "Digital & Branding Solutions",
    url: "/digital-and-branding-services-in-uae",
    view: "parentChildGridView",
    items: [
      {
        id: 1,
        title: "Digital Solutions",
        url: "#",
        links: [{ id: 1, title: "Website Development", url: "#" }],
      },
      {
        id: 2,
        title: "IT Services",
        url: "/it-services",
        links: [
          {
            id: 1,
            title: "Domain Name & DNS Management",
            url: "/domain-name-and-dns",
          },
          { id: 2, title: "Web Hosting Services", url: "#" },
          {
            id: 3,
            title: "Office 365 Subscription",
            url: "/office-365-subscription",
          },
          {
            id: 4,
            title: "Hosted Exchange Mailbox",
            url: "/hosted-exchange-mail",
          },
          { id: 5, title: "24/7 Tech Support", url: "/247-tech-support" },
        ],
      },
      {
        id: 3,
        title: "Event Planning & Management Services",
        url: "/event-planning-and-management-services",
        links: [],
      },
      {
        id: 4,
        title: "Marketing & Branding ",
        url: "/marketing-and-branding",
        links: [],
      },
    ],
  },
  {
    id: 5,
    title: "Millionaire & Billionaire",
    url: "/millionaire-and-billionaire-services-in-uae",
    view: "childView",
    items: [
      {
        id: 1,
        title: "",
        links: [
          { id: 1, title: "Wealth Management Services", url: "#" },
          // { id: 2, title: "Financial Partnerships", url: "#" },
          // { id: 3, title: "Affiliates & Partners", url: "#" },
          {
            id: 4,
            title: "Will & Trust Preparation Services",
            url: "/will-and-trust-preparation-services",
          },
          { id: 5, title: "Private Office", url: "/private-office" },
          {
            id: 6,
            title: "Second Citizenship Programs",
            url: "/second-citizenship",
          },
          {
            id: 7,
            title: "Family Foundation & Trust",
            url: "/family-foundation-and-trusts",
          },
          { id: 8, title: "Family Office Setup", url: "/family-office-setup" },
          { id: 9, title: "Golden Visa UAE", url: "/uae-golden-visa" },
          { id: 10, title: "Asset Protection", url: "/asset-protection" },
          {
            id: 11,
            title: "Escrow Account Assistance",
            url: "/escrow-account-assistance",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Logistics & Relocation",
    url: "/logistics-and-relocation-services-in-uae",
    view: "childView",
    items: [
      {
        id: 1,
        title: "",
        links: [
          { id: 1, title: "Tourist Visa", url: "#" },
          { id: 2, title: "Family Relocation Support", url: "#" },
          { id: 3, title: "Green Visa", url: "/green-visa" },
          { id: 4, title: "Golden Visa UAE", url: "#" },
          { id: 5, title: "UAE Residence Visa", url: "#" },
          { id: 6, title: "Investor Visa", url: "/investor-visa" },
          { id: 7, title: "Mainland Visa", url: "/mainland-visa" },
          { id: 8, title: "Visa Cancellation", url: "/visa-cancellation" },
          { id: 9, title: "Employment Visa", url: "/employment-visa" },
          { id: 10, title: "Free Zone Visa", url: "/free-zone-visa" },
          { id: 11, title: "Partner Visa", url: "/partner-visa" },
          { id: 12, title: "Maid Visa", url: "#" },
          { id: 13, title: "Logistics & Courier Coordination", url: "#" },
        ],
      },
    ],
  },
];

export const navDataAr = [
  {
    id: 1,
    title: "إعداد الأعمال",
    url: "/business-setup-services-in-uae",
    view: "tabView",
    tabs: [
      {
        id: 1,
        title: "المنطقة الحرة بالإمارات",
        url: "/uae-free-zone-company-formation",
        items: [
          {
            id: 1,
            title: "منطقة دبي الحرة",
            url: "/dubai-free-zone-company-formation",
            links: [
              { id: 1, title: "منطقة المطار الحرة دبي", url: "#" },
              { id: 2, title: "منطقة السيارات دبي", url: "#" },
              { id: 3, title: "مدينة الإنترنت دبي", url: "#" },
              { id: 4, title: "مدينة الإعلام دبي", url: "#" },
              { id: 5, title: "مركز دبي للسلع المتعددة", url: "#" },
              { id: 6, title: "واحة دبي السيليكون", url: "#" },
              {
                id: 7,
                title: "دبي الجنوب - المنطقة الحرة دبي الجنوب",
                url: "#",
              },
              { id: 8, title: "مركز التكنولوجيا الريادي دبي", url: "#" },
              { id: 9, title: "مركز التجارة العالمية دبي", url: "#" },
              { id: 10, title: "منطقة إكسبو سيتي دبي الحرة", url: "#" },
              { id: 11, title: "الهيئة الدولية للمنطقة الحرة", url: "#" },
              { id: 12, title: "منطقة ميدان الحرة", url: "#" },
              {
                id: 13,
                title: "تيكوم - مجموعة التكنولوجيا والإعلام",
                url: "#",
              },
            ],
          },
          {
            id: 2,
            title: "منطقة أبوظبي الحرة",
            url: "/abu-dhabi-free-zone-company-formation",
            links: [
              { id: 1, title: "سوق أبوظبي العالمي", url: "#" },
              { id: 2, title: "منطقة خليفة الصناعية أبوظبي", url: "#" },
              { id: 3, title: "تو فور 54 (الإعلام والإبداع)", url: "#" },
              { id: 4, title: "مدينة مصدر الحرة", url: "#" },
              { id: 5, title: "منطقة مطار أبوظبي الحرة", url: "#" },
            ],
          },
          {
            id: 3,
            title: "منطقة الشارقة الحرة",
            url: "/sharjah-free-zone-company-formation",
            links: [
              { id: 1, title: "مدينة النشر الشارقة الحرة", url: "#" },
              { id: 2, title: "منطقة حمرية الحرة", url: "#" },
              { id: 3, title: "المنطقة الدولية مطار الشارقة", url: "#" },
              { id: 4, title: "مدينة الإعلام الشارقة الحرة", url: "#" },
            ],
          },
          {
            id: 4,
            title: "منطقة عجمان الحرة",
            url: "/ajman-free-zone-company-formation",
            links: [{ id: 1, title: "عجمان ميديا سيتي الحرة", url: "#" }],
          },
          {
            id: 5,
            title: "منطقة رأس الخيمة الحرة",
            url: "/ras-al-khaimah-free-zone-company-formation",
            links: [
              { id: 1, title: "المنطقة الاقتصادية رأس الخيمة", url: "#" },
              { id: 2, title: "مدينة رأس الخيمة البحرية الحرة", url: "#" },
              { id: 3, title: "واحة رأس الخيمة للأصول الرقمية", url: "#" },
            ],
          },
          {
            id: 6,
            title: "منطقة أم القيوين الحرة",
            url: "/umm-al-quwain-free-zone-company-formation",
            links: [{ id: 1, title: "المنطقة الحرة أم القيوين", url: "#" }],
          },
          {
            id: 7,
            title: "منطقة الفجيرة الحرة",
            url: "/fujairah-free-zone-company-formation",
            links: [
              { id: 1, title: "مدينة الفجيرة الإبداعية الحرة", url: "#" },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "البر الرئيسي الإماراتي",
        url: "/uae-mainland-company-formation",
        view: "childView",
        items: [
          {
            id: 1,
            title: "",
            url: "#",
            links: [
              {
                id: 1,
                title: "البر الرئيسي دبي",
                url: "/dubai-mainland-company-formation",
              },
              {
                id: 2,
                title: "البر الرئيسي أبوظبي",
                url: "/abu-dhabi-mainland-company-formation",
              },
              {
                id: 3,
                title: "البر الرئيسي عجمان",
                url: "/ajman-mainland-company-formation",
              },
              {
                id: 4,
                title: "البر الرئيسي الشارقة",
                url: "/sharjah-mainland-company-formation",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "الأنشطة الخارجية الإماراتية",
        view: "childView",
        url: "/uae-offshore-company-formation",
        items: [
          {
            id: 1,
            title: "",
            url: "#",
            links: [
              {
                id: 1,
                title: "دبي الخارجية",
                url: "/dubai-offshore-company-formation",
              },
              {
                id: 2,
                title: "جبل علي الخارجية",
                url: "/jebel-ali-offshore-company-formation",
              },
              {
                id: 3,
                title: "رأس الخيمة الخارجية",
                url: "/rak-offshore-company-formation",
              },
              {
                id: 4,
                title: "عجمان الخارجية",
                url: "/ajman-offshore-company-formation",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        title: "استشارات أنشطة الشركات",
        url: "/business-activities-consultancy",
        items: [],
      },
      {
        id: 5,
        title: "حلول المكاتب",
        view: "childView",
        url: "/office-solutions-in-uae",
        items: [
          {
            id: 1,
            title: "",
            url: "#",
            links: [
              {
                id: 1,
                title: "تأجير مكتب فعلي",
                url: "/physical-offices-in-uae",
              },
              { id: 2, title: "مكتب مرن / ذكي", url: "#" },
              {
                id: 3,
                title: "خدمات المكتب الافتراضي",
                url: "/virtual-offices-in-uae",
              },
              {
                id: 4,
                title: "مساحات العمل المشتركة",
                url: "/co-working-offices-in-uae",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        title: "رخصة الأعمال",
        url: "/business-license-in-uae",
        items: [
          {
            id: 1,
            title: "رخصة المنطقة الحرة",
            url: "#",
            links: [
              {
                id: 1,
                title: "رخصة تجارية",
                url: "/commercial-license-in-uae",
              },
              { id: 2, title: "رخصة عقارية", url: "#" },
              {
                id: 3,
                title: "رخصة صناعية",
                url: "/industrial-license-in-uae",
              },
              {
                id: 4,
                title: "رخصة مهنية",
                url: "/professional-license-in-uae",
              },
              { id: 5, title: "رخصة مزدوجة", url: "/dual-license-in-uae" },
              {
                id: 6,
                title: "رخصة كريبتو وويب3",
                url: "/crypto-and-web3-license-in-uae",
              },
              { id: 7, title: "رخصة الفعاليات", url: "/event-license-in-uae" },
              { id: 8, title: "رخصة التجارة الإلكترونية", url: "#" },
              {
                id: 9,
                title: "تصريح فريلانسر",
                url: "/freelancer-permit-in-uae",
              },
            ],
          },
          {
            id: 2,
            title: "الرخصة الرئيسية",
            links: [
              { id: 1, title: "رخصة تجارية", url: "#" },
              { id: 2, title: "رخصة عقارية", url: "#" },
              { id: 3, title: "رخصة فعاليات", url: "#" },
              { id: 4, title: "رخصة إلكترونية", url: "#" },
              { id: 5, title: "رخصة كريبتو وويب3", url: "#" },
              { id: 6, title: "رخصة صناعية", url: "#" },
              { id: 7, title: "رخصة مهنية", url: "#" },
            ],
          },
          {
            id: 3,
            title: "رخص العمل",
            links: [
              { id: 1, title: "رخصة تجارية", url: "#" },
              { id: 2, title: "رخصة عقارية", url: "#" },
              { id: 3, title: "رخصة صناعية", url: "#" },
              { id: 4, title: "رخصة مهنية", url: "#" },
              { id: 5, title: "رخصة كريبتو وويب3", url: "#" },
              { id: 6, title: "رخصة فعاليات", url: "#" },
              { id: 7, title: "رخصة إلكترونية", url: "#" },
            ],
          },
        ],
      },
      {
        id: 7,
        title: "خدمات الـ PRO بالإمارات",
        url: "/pro-services-in-uae",
        items: [
          {
            id: 1,
            title: "خدمات PRO دبي",
            url: "/pro-services-dubai",
            links: [
              { id: 1, title: "تسجيل حقوق النشر", url: "#" },
              { id: 2, title: "تسجيل الشركة", url: "#" },
              { id: 3, title: "حجز اسم تجاري", url: "#" },
              {
                id: 4,
                title: "تسجيل / تجديد العلامة التجارية",
                url: "/trademark-registration",
              },
              {
                id: 5,
                title: "تسجيل / تجديد الرخصة",
                url: "/license-registration-and-renewal",
              },
              {
                id: 6,
                title: "تسجيل / تقديم ضريبة القيمة المضافة",
                url: "/vat-registration-and-filing",
              },
              {
                id: 7,
                title: "إجاري (تسجيل عقد الإيجار)",
                url: "/ejari-tenancy-contract-registration",
              },
              { id: 8, title: "تسجيل / تقديم الضريبة الشركات", url: "#" },
              { id: 9, title: "تصديق المستندات", url: "/document-attestation" },
              { id: 10, title: "الترجمة القانونية", url: "/legal-translation" },
              {
                id: 11,
                title: "صياغة التوكيل",
                url: "/power-of-attorney-drafting",
              },
              { id: 12, title: "خدمات التوثيق", url: "#" },
              // { id: 13, title: "تقديم تنظيم الجوهر الاقتصادي (ESR)", url: "#" },
              { id: 14, title: "تقديم المالك الفعلي (UBO)", url: "#" },
            ],
          },
          {
            id: 2,
            title: "خدمات PRO أبوظبي",
            url: "/pro-services-abu-dhabi",
            links: [
              { id: 1, title: "تسجيل حقوق النشر", url: "#" },
              { id: 2, title: "تسجيل الشركة", url: "#" },
              { id: 3, title: "حجز اسم تجاري", url: "#" },
              { id: 4, title: "تسجيل / تجديد العلامة التجارية", url: "#" },
              { id: 5, title: "تسجيل / تجديد الرخصة", url: "#" },
              { id: 6, title: "تسجيل / تقديم ضريبة القيمة المضافة", url: "#" },
              { id: 7, title: "إجاري (تسجيل عقد الإيجار)", url: "#" },
              { id: 8, title: "تسجيل / تقديم الضريبة الشركات", url: "#" },
              { id: 9, title: "تصديق المستندات", url: "#" },
              { id: 10, title: "الترجمة القانونية", url: "#" },
              { id: 11, title: "صياغة التوكيل", url: "#" },
              { id: 12, title: "خدمات التوثيق", url: "#" },
              // { id: 13, title: "تقديم تنظيم الجوهر الاقتصادي (ESR)", url: "#" },
              { id: 14, title: "تقديم المالك الفعلي (UBO)", url: "#" },
            ],
          },
          {
            id: 3,
            title: "خدمات PRO الشارقة",
            url: "/pro-services-sharjah",
            links: [
              { id: 1, title: "تسجيل حقوق النشر", url: "#" },
              { id: 2, title: "تسجيل الشركة", url: "#" },
              { id: 3, title: "حجز اسم تجاري", url: "#" },
              { id: 4, title: "تسجيل / تجديد العلامة التجارية", url: "#" },
              { id: 5, title: "تسجيل / تجديد الرخصة", url: "#" },
              { id: 6, title: "تسجيل / تقديم ضريبة القيمة المضافة", url: "#" },
              { id: 7, title: "إجاري (تسجيل عقد الإيجار)", url: "#" },
              { id: 8, title: "تسجيل / تقديم الضريبة الشركات", url: "#" },
              { id: 9, title: "تصديق المستندات", url: "#" },
              { id: 10, title: "الترجمة القانونية", url: "#" },
              { id: 11, title: "صياغة التوكيل", url: "#" },
              { id: 12, title: "خدمات التوثيق", url: "#" },
              // { id: 13, title: "تقديم تنظيم الجوهر الاقتصادي (ESR)", url: "#" },
              { id: 14, title: "تقديم المالك الفعلي (UBO)", url: "#" },
            ],
          },
          {
            id: 4,
            title: "خدمات PRO عجمان",
            links: [
              { id: 1, title: "تسجيل حقوق النشر", url: "#" },
              { id: 2, title: "تسجيل الشركة", url: "#" },
              { id: 3, title: "حجز اسم تجاري", url: "#" },
              { id: 4, title: "تسجيل / تجديد العلامة التجارية", url: "#" },
              { id: 5, title: "تسجيل / تجديد الرخصة", url: "#" },
              { id: 6, title: "تسجيل / تقديم ضريبة القيمة المضافة", url: "#" },
              { id: 7, title: "إجاري (تسجيل عقد الإيجار)", url: "#" },
              { id: 8, title: "تسجيل / تقديم ضريبة الشركات", url: "#" },
              { id: 9, title: "تصديق المستندات", url: "#" },
              { id: 10, title: "الترجمة القانونية", url: "#" },
              { id: 11, title: "صياغة التوكيل", url: "#" },
              { id: 12, title: "خدمات التوثيق", url: "#" },
              // { id: 13, title: "تقديم تنظيم الجوهر الاقتصادي (ESR)", url: "#" },
              { id: 14, title: "تقديم المالك الفعلي (UBO)", url: "#" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "الخدمات المؤسسية",
    url: "/corporate-services-in-uae",
    view: "parentChildView",
    items: [
      {
        id: 1,
        title: "خدمات المحاسبة",
        url: "/accounting-services-in-uae",
        links: [
          {
            id: 1,
            title: "إدارة الرواتب",
            url: "/payroll-management-services-in-uae",
          },
          {
            id: 2,
            title: "استشارات ضريبة القيمة المضافة والضرائب",
            url: "/vat-and-tax-consultancy-in-uae",
          },
          {
            id: 3,
            title: "ضريبة الشركات",
            url: "/corporate-tax-services-in-uae",
          },
        ],
      },
      {
        id: 2,
        title: "خدمات الالتزام القانوني",
        url: "/compliance-services-in-uae",
        links: [
          {
            id: 1,
            title: "إعداد الامتثال لمكافحة غسل الأموال",
            url: "/aml-compliance-setup",
          },
          { id: 2, title: "خدمات التدقيق", url: "#" },
          {
            id: 3,
            title: "شهادة الإقامة الضريبية",
            url: "/tax-residency-certificate",
          },
          { id: 4, title: "مساعدة شهادة ISO", url: "#" },
          {
            id: 5,
            title: "حماية الحقوق الفكرية",
            url: "#",
            items: [
              { id: 1, title: "تسجيل العلامة التجارية", url: "#" },
              { id: 1, title: "تسجيل حقوق النشر", url: "#" },
            ],
          },
        ],
      },
      {
        id: 3,
        title: "استشارات التأمين والتغطية",
        url: "/insurance-advisory-and-coverage-in-uae",
        links: [
          { id: 1, title: "تأمين الأعمال", url: "/business-insurance-in-uae" },
          { id: 2, title: "تأمين صحي", url: "/health-insurance-in-uae" },
        ],
      },
      {
        id: 4,
        title: "الخدمات القانونية",
        url: "/legal-services-in-uae",
        links: [
          {
            id: 1,
            title: "صياغة اتفاقية المساهمين",
            url: "/shareholder-agreement-drafting",
          },
          {
            id: 2,
            title: "صياغة سياسات الموارد البشرية",
            url: "/hr-policy-drafting",
          },
          {
            id: 3,
            title: "صياغة قرارات المجلس",
            url: "/board-resolution-drafting",
          },
          {
            id: 4,
            title: "الحوكمة المؤسسية",
            url: "/corporate-governance",
            items: [
              { id: 1, title: "هيكلة وإعادة هيكلة الشركات", url: "#" },
              {
                id: 2,
                title: "تصفيّة الشركة وإلغاء التسجيل",
                url: "/corporate-liquidation-and-deregistration",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "الخدمات التشغيلية",
        url: "/operational-services-in-uae",
        links: [
          { id: 1, title: "خدمات تقنية المعلومات", url: "#" },
          { id: 2, title: "إدارة البريد", url: "#" },
          { id: 3, title: "مكتب استقبال افتراضي", url: "#" },
          {
            id: 4,
            title: "مساعدة التوظيف والموارد البشرية",
            url: "/hr-and-recruitment-assistance",
          },
          {
            id: 5,
            title: "إدارة الوثائق والأرشفة",
            url: "/document-management-and-filing-services",
          },
          { id: 6, title: "تنسيق اللوجستيات والبريد السريع", url: "#" },
          { id: 7, title: "دعم المشتريات", url: "/procurement-support" },
          {
            id: 8,
            title: "دعم تسجيل الموردين والبائعين",
            url: "/supplier-and-vendor-registration-support",
          },
          {
            id: 9,
            title: "مساعدة التسجيل في المناقصات الحكومية",
            url: "/government-tender-registration-assistance",
          },
        ],
      },
      {
        id: 6,
        title: "حلول الأعمال",
        url: "/business-solutions-in-uae",
        links: [
          { id: 1, title: "تسجيل سيارة الشركة", url: "#" },
          { id: 2, title: "إعداد خطة عمل", url: "/business-plan-preparation" },
          {
            id: 3,
            title: "حجز غرفة الاجتماعات واستضافتها",
            url: "/meeting-room-booking-and-hosting",
          },
          {
            id: 4,
            title: "التسجيل الجمركي (استيراد / تصدير)",
            url: "/customs-registration-importer-exporter-code",
          },
          {
            id: 5,
            title: "أبحاث السوق ودراسة الجدوى",
            url: "/market-research-and-feasibility-study",
          },
          {
            id: 6,
            title: "دعم السفر والتأشيرات للإداريين",
            url: "/travel-and-visa-support-for-executives",
          },
          { id: 7, title: "ترتيب الكفيل المحلي", url: "#" },
          { id: 8, title: "شريك / وكيل محلي", url: "#" },
          {
            id: 9,
            title: "خدمات الوكيل الاسمي",
            url: "/nominee-services",
            items: [
              { id: 1, title: "خدمات مدير اسمي", url: "#" },
              { id: 2, title: "خدمات مساهم اسمي", url: "#" },
              {
                id: 3,
                title: "مساعدة فتح حساب مصرفي للشركة",
                url: "#",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "الخدمات المصرفية والثروات",
    url: "/banking-and-wealth-services-in-uae",
    view: "parentChildGridView",
    items: [
      {
        id: 1,
        title: "إدارة الثروات",
        url: "/wealth-management",
        links: [],
      },
      {
        id: 2,
        title: "فتح حساب مصرفي بالإمارات",
        url: "/bank-account-opening-in-the-uae",
        links: [
          {
            id: 1,
            title: "حساب مصرفي خارجي",
            url: "/off-shore-bank-account-opening-in-uae",
          },
          {
            id: 2,
            title: "حساب مصرفي للشركات",
            url: "/corporate-bank-account-opening-in-uae",
          },
          { id: 3, title: "حساب مقيم غير مقيم الإمارات", url: "#" },
          { id: 4, title: "حساب مقيم الإمارات", url: "#" },
        ],
      },
      {
        id: 3,
        title: "إدارة الخزينة",
        url: "/treasury-management",
        links: [],
      },
      {
        id: 4,
        title: "مساعدة فتح حساب مؤسسي مصرفي",
        url: "/corporate-bank-account-opening-assistance",
        links: [],
      },
    ],
  },
  {
    id: 4,
    title: "الحلول الرقمية والعلامة التجارية",
    url: "/digital-and-branding-services-in-uae",
    view: "parentChildGridView",
    items: [
      {
        id: 1,
        title: "الحلول الرقمية",
        url: "#",
        links: [{ id: 1, title: "تطوير مواقع", url: "#" }],
      },
      {
        id: 2,
        title: "خدمات تكنولوجيا المعلومات",
        url: "/it-services",
        links: [
          {
            id: 1,
            title: "إدارة اسم النطاق و DNS",
            url: "/domain-name-and-dns",
          },
          { id: 2, title: "خدمات استضافة المواقع", url: "#" },
          {
            id: 3,
            title: "اشتراك Office 365",
            url: "/office-365-subscription",
          },
          {
            id: 4,
            title: "صندوق بريد Hosted Exchange",
            url: "/hosted-exchange-mail",
          },
          { id: 5, title: "دعم فني 24/7", url: "/247-tech-support" },
        ],
      },
      {
        id: 3,
        title: "تنظيم وإدارة الفعاليات",
        url: "/event-planning-and-management-services",
        links: [],
      },
      {
        id: 4,
        title: "التسويق والعلامة التجارية",
        url: "/marketing-and-branding",
        links: [],
      },
    ],
  },
  {
    id: 5,
    title: "المليونيرات والمليارات",
    url: "/millionaire-and-billionaire-services-in-uae",
    view: "childView",
    items: [
      {
        id: 1,
        title: "",
        links: [
          { id: 1, title: "خدمات إدارة الثروات", url: "#" },
          // { id: 2, title: "الشراكات المالية", url: "#" },
          // { id: 3, title: "شركاء و Affiliates", url: "#" },
          {
            id: 4,
            title: "إعداد الوصية والثقة",
            url: "/will-and-trust-preparation-services",
          },
          { id: 5, title: "المكتب الخاص", url: "/private-office" },
          {
            id: 6,
            title: "برامج المواطنة الثانية",
            url: "/second-citizenship",
          },
          {
            id: 7,
            title: "مؤسسة العائلة والثقة",
            url: "/family-foundation-and-trusts",
          },
          { id: 8, title: "إنشاء مكتب عائلي", url: "/family-office-setup" },
          {
            id: 9,
            title: "الفيزا الذهبية الإماراتية",
            url: "/uae-golden-visa",
          },
          { id: 10, title: "حماية الأصول", url: "/asset-protection" },
          {
            id: 11,
            title: "مساعدة الحساب الضمان",
            url: "/escrow-account-assistance",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "اللوجستيات والنقل",
    url: "/logistics-and-relocation-services-in-uae",
    view: "childView",
    items: [
      {
        id: 1,
        title: "",
        links: [
          { id: 1, title: "تأشيرة سياحية", url: "#" },
          { id: 2, title: "دعم انتقال العائلة", url: "#" },
          { id: 3, title: "الفيزا الخضراء", url: "/green-visa" },
          { id: 4, title: "الفيزا الذهبية الإماراتية", url: "#" },
          { id: 5, title: "فيزا الإقامة الإماراتية", url: "#" },
          { id: 6, title: "فيزا المستثمر", url: "/investor-visa" },
          { id: 7, title: "فيزا البر الرئيسي", url: "/mainland-visa" },
          { id: 8, title: "إلغاء التأشيرة", url: "/visa-cancellation" },
          { id: 9, title: "فيزا العمل", url: "/employment-visa" },
          { id: 10, title: "فيزا المنطقة الحرة", url: "/free-zone-visa" },
          { id: 11, title: "فيزا الشريك", url: "/partner-visa" },
          { id: 12, title: "فيزا الخادمة", url: "#" },
          { id: 13, title: "التنسيق اللوجستي وخدمات التوصيل", url: "#" },
        ],
      },
    ],
  },
];
