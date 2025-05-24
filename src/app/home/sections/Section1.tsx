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
    imageUrl: "/images/place02.svg",
  },
  {
    title: "Smart Scheduling",
    description:
      "Plan, publish, and edit shifts with a flexible, drag-and-drop calendar.",
    imageUrl: "/images/place03.svg",
  },
  {
    title: "Time Tracking",
    description:
      "Track working hours accurately with GPS verification and productivity insights.",
    imageUrl: "/images/place02.svg",
  },
  {
    title: "Open Shifts Marketplace",
    description:
      "Post open shifts that eligible team members can claim directly from their profiles.",
    imageUrl: "/images/place03.svg",
  },
  {
    title: "Invoice and Expense Tracking",
    description:
      "From hours worked to cost incurred — get the full financial picture.",
    imageUrl: "/images/place02.svg",
  },
  {
    title: "Automated Tax Calculation",
    description:
      "Stay Compliant with Accurate Tax Breakdowns generated in real time.",
    imageUrl: "/images/place01.svg",
  },
];

function Section1() {
  return (
    <div className=" container1 flex flex-col mt-[32px] sm:mt-[80px]">
      <SectionHeader
        title="Everything you need to run a smarter team"
        description="One platform, every shift, every team mate, every detail—covered."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[48px] ">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[48px] mt-[32px] sm:mt-[80px]">
        <img
          src="/images/peoplehold.svg"
          alt=""
          className="order-2 md:order-1 flex justify-center items-center"
        />

        <div className="order-1 md:order-2">
          <Header2 className=" mb-[16px]">
            Built for shifts and hourly teams.
          </Header2>

          <Paragraph2>
            <span className="font-bold">Retail & Store Teams</span> – Frontline
            workers with high turnover and variable hours
            <br />
            <span className="font-bold">Healthcare & Care Homes</span> – Nurses,
            agency staff, and rotating support workers
            <br />
            <span className="font-bold">Security & Guard Agencies</span> – Staff
            across multiple client sites
            <br />
            <span className="font-bold">Cleaning & Maintenance Crews</span> –
            On-location teams with assigned zones and hours
            <br />
            <span className="font-bold">Event & Temp Staffing</span> –
            Short-term assignments and mobile clock-ins
            <br />
            <span className="font-bold">Field & Facility Staff</span> – Split
            locations, independent assignments, tight tracking.
          </Paragraph2>
          <div className=" flex mt-[40px] ">
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
