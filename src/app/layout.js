import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "MOHAMMAD ABDULLAH - Portfulio",
  description: "Professional Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="selection:bg-blue-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
