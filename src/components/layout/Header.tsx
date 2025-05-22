"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { ParagraphLink1 } from "../ui/Text";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use Cases", disabled: false },
  { href: "/pricing", label: "Pricing" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const renderLinks = (isMobile = false) =>
    navLinks.map(({ href, label, disabled }) => (
      <Link
        key={label}
        href={href}
        onClick={isMobile ? closeMenu : undefined}
        className={disabled ? "cursor-not-allowed" : ""}
      >
        <ParagraphLink1
          className={
            pathname === href
              ? `${
                  isMobile ? "text-primary " : "text-primary "
                }`
              : ""
          }
        >
          {label}
        </ParagraphLink1>
      </Link>
    ));

  return (
    <div className="flex flex-col container1 w-full">
      <div className="mt-[56px] py-[16px] px-[56px] bg-bg_gray rounded-[8px] flex justify-between gap-[50px] w-full items-center">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo1.svg"
            alt="Logo"
            className="xl:h-[24px] h-[21px] xl:flex hidden"
          />
        </Link>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none text-2xl">
            =
          </button>
        </div>

        <div className="gap-[32px] items-center hidden lg:flex">
          {renderLinks()}
        </div>

        <div className=" gap-[32px] items-center hidden lg:flex">
          <Link href="/contact-us">
            <ParagraphLink1>Request Demo</ParagraphLink1>
          </Link>
          <Button
            text="Sign in"
            href="/"
            isLink={true}
            backgroundColor="bg-white"
            additionalClasses="border-secondary- text-black"
          />
          <Button
            text="Get started for free"
            href="/"
            isLink={true}
            backgroundColor="bg-primary"
            additionalClasses="border-secondary- text-white"
          />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="p-[24px] flex flex-col justify-center  items-center">
          <div className="container1 flex flex-col w-full space-y-[24px] items-center">
            {renderLinks(true)}
            <Button
              text="Contact us"
              href="/contact-us"
              isLink={true}
              onClick={closeMenu}
              backgroundColor="bg-l_green"
              additionalClasses="border-secondary- text-black"
            />
          </div>
        </div>
      )}
    </div>
  );
}
