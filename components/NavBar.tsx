"use client";

import Link from "next/link";
import Image from "next/image";

// Customize these values to match your brand
const BRAND_CONFIG = {
  appName: "Interactive Avatar",
  logo: {
    src: "/logo.png", // Replace with your logo path in /public folder
    alt: "Logo",
    show: true, // Set to true to show logo
    height: 67,
  },
  showNavLinks: false, // Set to true to show navigation links
  navLinks: [
    // Add your own navigation links here
    // { href: "/about", label: "About" },
    // { href: "/docs", label: "Docs" },
  ],
};

export default function NavBar() {
  return (
    <nav className="border-b border-border">
      <div className="flex flex-row justify-between items-center w-[1000px] m-auto p-6">
        <div className="flex flex-row items-center gap-4">
          {BRAND_CONFIG.logo.show && BRAND_CONFIG.logo.src && (
            <Link href="/">
              <Image
                src={BRAND_CONFIG.logo.src}
                alt={BRAND_CONFIG.logo.alt}
                height={BRAND_CONFIG.logo.height}
                width={BRAND_CONFIG.logo.height * 3}
                className="h-[67px] w-auto"
              />
            </Link>
          )}
        </div>
        {BRAND_CONFIG.showNavLinks && BRAND_CONFIG.navLinks.length > 0 && (
          <div className="flex flex-row items-center gap-6">
            {BRAND_CONFIG.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
