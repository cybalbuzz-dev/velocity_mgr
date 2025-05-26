"use client";

import React, { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              ? `${isMobile ? "text-primary" : "text-primary"}`
              : ""
          }
        >
          {label}
        </ParagraphLink1>
      </Link>
    ));

  return (
    <div
      className={`fixed z-50 w-full transition-all duration-500 ${
        scrolled
          ? "top-0 bg-bg_gray"
          : "lg:top-[56px] bg-bg_gray lg:bg-transparent "
      }`}
    >
      <div className="flex flex-col container1 w-full">
        <div
          className={`py-[16px] transition-all duration-500  bg-bg_gray rounded-[8px] flex justify-between gap-[50px] w-full items-center ${
            scrolled ? "" : "sm:px-[56px] "
          }`}
        >
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo1.svg"
              alt="Logo"
              className="xl:h-[24px] h-[21px] "
            />
          </Link>

          <div className="xl:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none text-2xl text-primary"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xl:w-[24px] w-[21px] xl:h-[24px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xl:w-[24px] w-[21px] xl:h-[24px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="gap-[32px] items-center hidden xl:flex">
            {renderLinks()}
          </div>

          <div className=" gap-[32px] items-center hidden xl:flex">
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

        {menuOpen && (
          <div className="p-[24px] flex flex-col bg-bg_gray justify-center items-center">
            <div className="container1 flex flex-col w-full space-y-[24px] items-center">
              {renderLinks(true)}
              <div className=" gap-[32px] items-center xl:flex-row flex flex-col">
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
          </div>
        )}
      </div>
    </div>
  );
}
