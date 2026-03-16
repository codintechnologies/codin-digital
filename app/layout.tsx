import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Codin Technologies - Engineering Intelligent Platforms for Enterprise Transformation",
  description:
    "Codin Technologies builds, operates, and scales enterprise software across logistics, sustainability, digital marketing, supply chains, and AI-driven transformation.",
  keywords: [
    "enterprise software",
    "SaaS",
    "digital platforms",
    "AI transformation",
    "logistics software",
    "sustainability management",
    "supply chain platforms",
  ],
  authors: [{ name: "Codin Technologies" }],
  creator: "Codin Technologies",
  publisher: "Codin Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://codin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Codin Technologies - Engineering Intelligent Platforms",
    description:
      "Build, operate, and scale enterprise software across industries.",
    url: "https://codin.com",
    siteName: "Codin Technologies",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Codin Technologies Enterprise Platforms",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codin Technologies - Engineering Intelligent Platforms",
    description:
      "Build, operate, and scale enterprise software across industries.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
