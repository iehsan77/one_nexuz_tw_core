import React from "react";

// import { isIndex } from "@/app/constants/global";
import Heading1 from "@/components/Typography/Heading1";
import { SEOAction } from "@/actions/seo-action";

export async function generateMetadata() {
  const vMetaData = await SEOAction();
  return {
    title: vMetaData?.seo_title || "",
    description: vMetaData?.seo_description || "",
    alternates: {
      canonical: vMetaData?.canonical_url || "",
    },
    openGraph: vMetaData?.opengraph_data || "",
    twitter: vMetaData?.twitter_tag || "",
    robots: {
      index: false,
      nocache: true,
    },
    h1: vMetaData?.h1 || "",
    faq: vMetaData?.faq?.mainEntity || null,
  };
}

const Page = () => {
  return (
    <section className="privacy-content bg-fullHeightBg bg-cover py-44">
      <div className="container">
        <Heading1 heading="Privacy Policy" className={`text-center`} />

        <p>
          <strong>Introduction</strong>
          <br />
          {`Welcome to our website. The following Terms and Conditions ("Terms") govern
          your access and use of our services. By visiting this site or using our
          services, you agree to these Terms. If you do not agree, please do not use
          the website.`}
          <br />
          <br />

          <strong>Purpose</strong>
          <br />
          These Terms outline the rules and guidelines for using our platform,
          services, and related content. Please read carefully before proceeding.
          <br />
          <br />

          <strong>Copyright</strong>
          <br />
          All content on this website, including text, images, and graphics, is owned
          by the company or licensed to us. You may view and download material for
          personal, non-commercial use only. Unauthorized use is strictly prohibited.
          <br />
          <br />

          <strong>Trademarks</strong>
          <br />
          All company logos, trademarks, and brand names displayed on this site belong
          to us or our partners. Any unauthorized usage is prohibited without prior
          permission.
          <br />
          <br />

          <strong>User Submissions</strong>
          <br />
          We welcome feedback, suggestions, and comments. By submitting content, you
          grant us a non-exclusive, royalty-free license to use, display, and share it
          for business purposes. Users must not upload or submit unlawful or harmful
          content.
          <br />
          <br />
          <ul className="list-disc">
            <li>Do not share copyrighted material without permission.</li>
            <li>Do not post abusive, threatening, or defamatory content.</li>
            <li>Do not violate any applicable laws or regulations.</li>
            <li>Do not impersonate another person or entity.</li>
            <li>Do not attempt to hack, spam, or exploit the platform.</li>
          </ul>
          <br />

          <strong>Product & Service Information</strong>
          <br />
          Information provided on this website is for general purposes only. While we
          strive to ensure accuracy, we make no warranties or guarantees about the
          reliability or completeness of any information.
          <br />
          <br />

          <strong>Limitation of Liability</strong>
          <br />
          We are not responsible for any direct, indirect, incidental, or consequential
          damages arising from the use of our website, services, or third-party links.
          <br />
          <br />

          <strong>Third-Party Links</strong>
          <br />
          This website may contain links to third-party sites. We are not responsible
          for the content or policies of external websites.
          <br />
          <br />

          <strong>Indemnity</strong>
          <br />
          You agree to indemnify and hold us harmless against any claims, damages, or
          expenses arising from your misuse of the website or violation of these Terms.
          <br />
          <br />

          <strong>Governing Law</strong>
          <br />
          These Terms are governed by applicable local and federal laws. Any disputes
          will be handled in the courts of the relevant jurisdiction.
          <br />
          <br />

          <strong>Changes to Terms</strong>
          <br />
          We may update these Terms at any time without prior notice. By continuing to
          use the website, you agree to the updated Terms.
          <br />
          <br />

          <strong>Contact Us</strong>
          <br />
          If you have any questions regarding these Terms and Conditions, please
          contact our support team at support@example.com.
        </p>

      </div>
    </section>
  );
};

export default Page;
