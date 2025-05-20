"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Work", href: "/work" },
  { name: "Experience", href: "#" },
  { name: "17 Random Things", href: "#" },
];

import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full shadow-sm sticky top-0 text-white p-6 z-50 transition-opacity duration-300 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <nav
        className="flex items-center justify-between max-w-6xl mx-auto px-4 py-2 text-white"
        aria-label="Top-level navigation"
      >
        <div className="flex items-center">
          <Link href="/" aria-label="Home" className="flex items-center">
            <Image
              src="/lucas-header-medium.jpeg"
              alt="Lucas Header"
              width={120}
              height={48}
              priority
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white no-underline font-medium text-base hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden ml-4 p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="w-7 h-7 text-white" />
          </button>
        </div>
      </nav>

      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 w-4/5 max-w-xs bg-zinc-900 p-6 flex flex-col shadow-lg focus:outline-none">
          <div className="flex items-center justify-between mb-8">
            <button
              aria-label="Close menu"
              className="p-2 rounded hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="w-7 h-7 text-white" />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-4">
            <Link
              href="/"
              className="text-white text-lg font-medium no-underline hover:text-blue-400 transition-colors px-2 py-2 rounded cursor-pointer"
              onClick={() => {
                setMobileMenuOpen(false);
                console.log("clicked");
              }}
            >
              Home
            </Link>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-lg font-medium no-underline hover:text-blue-400 transition-colors px-2 py-2 rounded cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  console.log("clicked");
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
