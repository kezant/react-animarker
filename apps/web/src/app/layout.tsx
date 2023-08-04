import { ThemeProvider } from "@/components/ThemeProvider";
import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Animarker",
  description:
    "An animated mark tag which highlights once it's in the viewport.",
  applicationName: "React Animarker",
  authors: {
    name: "Kezant",
    url: "https://kezant.com",
  },
  openGraph: {
    type: "website",
    title: "React Animarker",
    description:
      "An animated mark tag which highlights once it's in the viewport.",
    url: "https://animarker.kezant.com",
    siteName: "React animarker",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
