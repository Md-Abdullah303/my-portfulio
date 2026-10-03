import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://khan-mohammad-abdullah-portfulio.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mohammad Abdullah — Full Stack Web Developer | Next.js & React",
    template: "%s | Mohammad Abdullah",
  },
  description:
    "Portfolio of Mohammad Abdullah, a Full Stack Web Developer from Dhaka, Bangladesh. Specializing in Next.js, React, Node.js, and MongoDB. Building fast, beautiful, and scalable web applications.",
  keywords: [
    "Mohammad Abdullah",
    "Full Stack Developer",
    "Web Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "MERN Stack",
    "Node.js",
    "MongoDB",
    "Dhaka Developer",
  ],
  authors: [{ name: "Mohammad Abdullah", url: SITE_URL }],
  creator: "Mohammad Abdullah",
  publisher: "Mohammad Abdullah",
  icons: {
    icon: [{ url: "/MD_Abdullah.png", type: "image/png" }],
    shortcut: ["/MD_Abdullah.png"],
    apple: [{ url: "/MD_Abdullah.png", type: "image/png" }],
  },
  openGraph: {
    title: "Mohammad Abdullah — Full Stack Web Developer",
    description:
      "Specializing in Next.js, React, Node.js & MongoDB. Building fast, beautiful web apps.",
    url: SITE_URL,
    siteName: "Mohammad Abdullah — Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Abdullah — Full Stack Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Abdullah — Full Stack Web Developer",
    description:
      "Specializing in Next.js, React, Node.js & MongoDB. Building fast, beautiful web apps.",
    images: ["/og-banner.png"],
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
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: "your-verification-code",
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  // JSON-LD Person schema for global site-wide SEO
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammad Abdullah",
    url: SITE_URL,
    image: `${SITE_URL}/MD_Abdullah.png`,
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer from Dhaka, Bangladesh. Specializing in Next.js, React, Node.js, and MongoDB.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [
      "https://github.com/Md-Abdullah303",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Full Stack Development",
    ],
  };

  // JSON-LD WebSite schema for sitelinks search
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mohammad Abdullah — Portfolio",
    url: SITE_URL,
    description:
      "Portfolio of Mohammad Abdullah, a Full Stack Web Developer from Dhaka, Bangladesh.",
    author: {
      "@type": "Person",
      name: "Mohammad Abdullah",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="icon" href="/MD_Abdullah.png" type="image/png" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personJsonLd, websiteJsonLd]),
          }}
        />
      </head>
      <body className="selection:bg-blue-500 selection:text-white" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
