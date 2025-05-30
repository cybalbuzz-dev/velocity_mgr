import React from "react";
import Card from "@/components/shared/Card";
import SectionHeader from "@/components/shared/SectionHeader";
import { Header2, Paragraph2 } from "@/components/ui/Text";
import Button from "@/components/ui/Button";
import BulletPointList from "../others/BulletPointList";

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
      <div className="grid items-center- grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[52px] mt-[32px] sm:mt-[80px]">
        <img
          src="/images/peoplehold.svg"
          alt=""
          className="order-2 md:order-1 h-ful-l rounded-lg flex justify-center items-center"
        />

        <div className="order-1 md:order-2">
          <Header2 className=" mb-[16px]">
            Built for shifts and hourly teams.
          </Header2>
          <BulletPointList />
        
          <div className=" flex mt-[10px] sm:pl-[60px]- ">
            <Button
              text="Set Up Velocity Manager for Your Team"
              href="/"
              isLink={true}
              backgroundColor="bg-primary"
              additionalClasses="border-secondary- w-full sm:w-fit text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
