import type { Metadata, Viewport } from "next";
import { Playfair_Display, Dancing_Script, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const title = "Manisha & Akshay | #AkManifested";
const description =
  "Join us in celebrating the wedding of Manisha & Akshay, August 16–23, 2026, Hyderabad.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mani-akshay-invitation.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#7A2E2E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dancing.variable} ${montserrat.variable} font-body bg-ivory text-darktext overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
