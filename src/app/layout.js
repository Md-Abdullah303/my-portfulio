import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mohammad Abdullah — Full Stack Web Developer | Next.js & React",
  description:
    "Portfolio of Mohammad Abdullah, a Full Stack Web Developer from Dhaka, Bangladesh. Specializing in Next.js, React, Node.js, and MongoDB. Building fast, beautiful, and scalable web applications.",
  keywords: [
    "Mohammad Abdullah",
    "Full Stack Developer",
    "Web Developer Bangladesh",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
  ],
  authors: [{ name: "Mohammad Abdullah" }],
  openGraph: {
    title: "Mohammad Abdullah — Full Stack Web Developer",
    description:
      "Specializing in Next.js, React, Node.js & MongoDB. Building fast, beautiful web apps.",
    type: "website",
  },
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="selection:bg-blue-500 selection:text-white" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
