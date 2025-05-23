import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "aos/dist/aos.css";
import Head from "next/head"; // Import Head for adding custom scripts
import { Toaster } from "react-hot-toast"; // Import Toaster
import A005rro from "./005rro";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VELOCITYMGR – Smarter Team Management and Workforce Automation",
  description:
    "VELOCITYMGR is the all-in-one platform for smart scheduling, time tracking, payroll automation, and task management. Streamline operations and boost productivity with ease.",
  generator:
    "VELOCITYMGR, smart scheduling, time tracking, payroll software, workforce management, shift planning, HR automation, open shifts marketplace, expense tracking, team productivity",
  keywords: [
    "workforce management",
    "team scheduling",
    "smart scheduling",
    "time tracking software",
    "automated payroll",
    "shift planning",
    "open shifts marketplace",
    "task automation",
    "employee management",
    "HR tech",
    "shift management",
    "payroll automation",
    "compliance tracking",
    "remote workforce tools",
    "employee productivity",
    "digital timesheets",
    "automated task calculation",
    "invoice and expense tracking",
    "smart workforce tools",
    "business operations software",
    "shift-based workforce",
    "employee engagement tools",
    "real-time team tracking",
    "productivity management",
    "cloud-based HR platform",
    "staff scheduling system",
    "employee time monitoring",
    "workplace automation",
    "digital workforce tools",
    "VELOCITYMGR",
  ],

  applicationName: "VELOCITYMGR",
  openGraph: {
    title: "VELOCITYMGR – Smarter Team Management and Workforce Automation",
    description:
      "Manage your team the smart way with VELOCITYMGR. Schedule shifts, track time, automate payroll, and streamline task execution — all in one platform.",
    url: "https://www.velocitymgr.com",
    siteName: "VELOCITYMGR",
    images: [
      {
        url: "https://res.cloudinary.com/dipwsq5cg/image/upload/v1740640203/Screenshot_2025-02-27_080849_t6c2iz.png", // Replace with VELOCITYMGR branding if available
        width: 1200,
        height: 630,
        alt: "VELOCITYMGR – Smarter Workforce Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@velocitymgr",
    title: "VELOCITYMGR – Smarter Team Management and Workforce Automation",
    description:
      "Automate how you manage teams, track time, and run payroll — with VELOCITYMGR.",
    images:
      "https://res.cloudinary.com/dipwsq5cg/image/upload/v1740640203/Screenshot_2025-02-27_080849_t6c2iz.png", // Replace with VELOCITYMGR image if available
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add Cloudinary widget script */}
        <script
          src="https://widget.cloudinary.com/v2.0/global/all.js"
          type="text/javascript"
          async
        ></script>
      </Head>
      <body className=" bg-[#f1efe8]- ">
        <Header />
        <Toaster />
        {/* <A005rro /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
