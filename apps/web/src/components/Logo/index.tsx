"use client";
import Image from "next/image";
import logoSvg from "@/../public/logo.svg";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Image
        src={logoSvg}
        alt="Kezant"
        height={60}
        className="dark:invert"
        title="Kezant"
      />
    </div>
  );
}
