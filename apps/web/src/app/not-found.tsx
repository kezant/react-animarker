import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

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
  robots: "noindex, nofollow",
};

export default function NotFound() {
  return (
    <main className="h-full w-full flex items-center justify-center flex-col">
      <Logo className="mb-10" />
      <p className="text-4xl font-black mb-10">404</p>
      <p className="text-sm text-center mb-10">
        Oopsie daisy, I believe we didn't build this page yet...
        <br /> Are you sure this is the correct link?
      </p>
      <Button variant="outline" asChild>
        <Link href="/">
          <ArrowLeft size={16} className="mr-4" /> Go back
        </Link>
      </Button>
    </main>
  );
}
