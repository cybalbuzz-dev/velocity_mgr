import React from "react";
import Card from "@/components/shared/Card";
import SectionHeader from "@/components/shared/SectionHeader";
import { Header2, Paragraph2 } from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const cardData = [
  {
    title: "Automated Payroll",
    description:
      " Streamline payroll processing with automated calculations and compliance checks.",
    imageUrl: "/images/place06.svg",
  },
  {
    title: "Smart Scheduling",
    description:
      "Plan, publish, and edit shifts with a flexible, drag-and-drop calendar.",
    imageUrl: "/images/place07.svg",
  },
  {
    title: "Time Tracking",
    description:
      "Track working hours accurately with GPS verification and productivity insights.",
    imageUrl: "/images/place08.svg",
  },
  {
    title: "Open Shifts Marketplace",
    description:
      "Post open shifts that eligible team members can claim directly from their profiles.",
    imageUrl: "/images/place09.svg",
  },
  {
    title: "Invoice and Expense Tracking",
    description:
      "From hours worked to cost incurred — get the full financial picture.",
    imageUrl: "/images/place010.svg",
  },
  {
    title: "Automated Tax Calculation",
    description:
      "Stay Compliant with Accurate Tax Breakdowns generated in real time.",
    imageUrl: "/images/place011.svg",
  },
];

function Section1() {
  return (
    <div className=" container1 flex flex-col mt-[32px] sm:mt-[80px]">
      <SectionHeader
        title="Everything you need to run a smarter team"
        description="One platform, every shift, every team mate, every detail—covered."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[24px] ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Section1;
