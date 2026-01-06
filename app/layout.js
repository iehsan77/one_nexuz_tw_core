import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import Navbar from "@/components/Navbar/Navbar";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import TopNavbar from "@/components/Navbar/TopNavbar";
import BottomNav from "@/components/Navbar/BottomNav";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

export const dynamic = "force-dynamic";

const creato = localFont({
  src: [
    {
      path: "../public/assets/font/CreatoDR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/font/CreatoDM.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/font/CreatoDB.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-creato",
  display: "swap",
});

export const metadata = {
  title: "One Nexuz",
  description: "One Nexuz",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="DU5OTwTqVc3M43HM_gzsfG9gjVr5cM3yebLj0jmNYA0"
        />
      </head>
      <body className={`${creato.className} antialiased`}>
        <Providers>
          <div className="sticky top-0 z-50 lg:hidden">
            <TopNavbar />
          </div>
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <BottomNav />
          <MobileMenu />
          {children}
          <Newsletter />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
