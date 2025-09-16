import { Archivo, Libre_Franklin } from "next/font/google";
import "./globals.css";

const librafranklin = Libre_Franklin({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600'],
});
const archivo = Archivo({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});
export const metadata = {
  title: "One Nexuz",
  description: "All-in-One Business Setup & Corporate Solutions, Powered by One Nexuz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${librafranklin.variable} ${archivo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}