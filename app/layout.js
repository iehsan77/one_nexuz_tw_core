import localFont from "next/font/local";
import "./globals.css";
import Provider from "./provider";

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
  title: "",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${creato.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
