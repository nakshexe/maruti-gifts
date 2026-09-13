import type { Metadata, Viewport } from "next";
import { Marcellus, Karla } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

const title = "Maruti Gifts — Premium Dry Fruit Hampers, Beawar";
const description =
  "Hand-packed almonds, cashews, pistachios and raisins in brass trunks, jaali-cut trays and hand-painted jars. Maruti Gifts, Beawar, Rajasthan.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://marutigifts.com",
    siteName: "Maruti Gifts",
    images: [{ url: "/images/meadow-platter.jpg", width: 1200, height: 1200 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/meadow-platter.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#3e0a14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${marcellus.variable} ${karla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}
