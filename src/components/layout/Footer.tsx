import React from "react";
import { Paragraph1, Paragraph2, ParagraphLink1 } from "../ui/Text";
import Link from "next/link";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "About us", url: "#" },
      { name: "Features", url: "#" },
      { name: "Pricing & Plans", url: "#" },
      { name: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Solutions For",
    links: [
      { name: "Account", url: "#" },
      { name: "FAQs", url: "#" },
      { name: "Newsletters", url: "#" },
      { name: "Resources", url: "#" },
    ],
  },
  {
    title: "Why Choose Us",
    links: [
      { name: "Guides", url: "#" },
      { name: "Terms & Conditions", url: "#" },
      { name: "Privacy Policy", url: "#" },
      { name: "Licensing", url: "#" },
    ],
  },
];

const socialIcons = [
  {
    name: "LinkedIn",
    icon: "/icons/LinkedinLogo.svg",
    url: "https://www.linkedin.com/company/velocitymgr",
  },
  {
    name: "Twitter",
    icon: "/icons/TwitterLogo.svg",
    url: "https://twitter.com/velocitymgr",
  },
  {
    name: "Instagram",
    icon: "/icons/InstagramLogo.svg",
    url: "https://instagram.com/velocitymgr",
  },
  {
    name: "YouTube",
    icon: "/icons/YoutubeLogo.svg",
    url: "https://youtube.com/velocitymgr",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#012a27] text-white px-6 py-10 text-sm">
      <div className="container1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Branding */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold">VELOCITYMGR</h2>
            <Paragraph2 className="mt-2 max-w-[300px]">
              Your All-in-One Platform For Smarter Shift Scheduling, Time
              Tracking, Payroll, And Team Audits—Designed For Agencies That
              Manage People.
            </Paragraph2>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-1 grid sm:grid-cols-3 grid-cols-2 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <Paragraph1 className="font-semibold mb-2">
                  {section.title}
                </Paragraph1>
                <ul className="space-y-1">
                  {section.links.map(({ name, url }) => (
                    <li key={name}>
                      <Link href={url} className="hover:underline">
                        <ParagraphLink1 className="text-[#dbdada]">
                          {name}
                        </ParagraphLink1>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="flex sm:justify-end space-x-4 pt-[54px] items-center">
          <p>Follow us on:</p>
          {socialIcons.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <img
                src={icon}
                alt={name}
                className="w-5 h-5 hover:opacity-80 transition-opacity"
              />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Velocity Ltd. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
