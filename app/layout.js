import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const librafranklin = Libre_Franklin({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: "One Nexuz",
  description: "All-in-One Business Setup & Corporate Solutions, Powered by One Nexuz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${librafranklin.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}