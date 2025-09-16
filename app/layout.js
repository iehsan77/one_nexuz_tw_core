// import localFont from "next/font/local";
import { Libre_Franklin } from 'next/font/google';
import "./globals.css";
import Provider from "./provider";

const librafrankin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

// const creato = localFont({
//   src: [
//     {
//       path: "../public/assets/font/CreatoDR.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/assets/font/CreatoDM.woff2",
//       weight: "500",
//       style: "normal",
//     },
//     {
//       path: "../public/assets/font/CreatoDB.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-creato",
//   display: "swap",
// });

export const metadata = {
  title: "One Nexuz",
  description: "One Nexuz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${librafrankin.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
