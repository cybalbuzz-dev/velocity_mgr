"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { Header3, Paragraph3 } from "@/components/ui/Text";

function Questions() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openSection, setOpenSection] = useState<number | null>(0); // default open first

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const questions = [
    {
      title: "Is there a contract or cancellation fee?",
      content:
        "We provide a full suite of design and creative services, including web design, branding and strategy, graphic design, packaging design, digital illustration, video and motion design, UI/UX design, and creative consultancy.",
    },
    {
      title: "What happens after the 3-month free trial?",
      content:
        "After your 3-month free trial, you can choose a subscription plan that best fits your team's needs. All your data, settings, and activity will remain intact, and you can continue using VELOCITYMGR without interruption by upgrading to a paid plan.",
    },
    {
      title: "Can I import my team or existing data?",
      content:
        "Yes! VELOCITYMGR allows you to easily import your team, shift schedules, and other essential data using our CSV import tool or through direct integration with your current systems. Our support team is also available to help you with onboarding.",
    },
    {
      title: "Do I need to train my team?",
      content:
        "VELOCITYMGR is designed to be intuitive and easy to use. Most teams can get started without formal training. However, we provide helpful onboarding guides, tutorial videos, and customer support to ensure a smooth experience for everyone.",
    },
  ];

  return (
    <div className="p-6 bg-[#D1E3E4] rounded-[24px]">
      <div data-aos="fade-left">
        {questions.map((item, index) => (
          <div
            key={index}
            className={`mb-4 px-[32px] rounded-[24px] ${
              openSection === index
                ? "bg-white py-[40px]"
                : "bg-white [#e8f6f5] py-[64px]"
            } p-4 transition-colors duration-300`}
          >
            <button
              className="w-full text-left flex justify-between items-center text-[17px] font-semibold"
              onClick={() => toggleSection(index)}
            >
              <Header3> Q. {item.title} </Header3>
              <Header3>{openSection === index ? "−" : "+"} </Header3>
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openSection === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {item.content && (
                <Paragraph3 className="mt-[24px] text-[14px] text-gray-700">
                  {item.content}
                </Paragraph3>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
