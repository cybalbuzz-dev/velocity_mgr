import React from "react";
import Card from "@/components/shared/Card";
import SectionHeader from "@/components/shared/SectionHeader";


const cardData = [
  {
    title: "Save time on boring and repetitive admin tasks",
    description:
      " Automate repetitive processes so you can focus on what really matters — managing people, not spreadsheets.",
    imageUrl: "/images/place012.svg",
  },
  {
    title: "Reduce absenteeism and time theft",
    description:
      "Real-time tracking and smart clock-ins keep everyone accountable and on schedule.",
    imageUrl: "/images/place01.svg",
  },
  {
    title: "Increase accountability and team transparency",
    description:
      "Give managers and team members full visibility into shifts, hours worked, and attendance history.",
    imageUrl: "/images/place06.svg",
  },
  
];

function Section2() {
  return (
    <div className=" container1 flex flex-col mt-[32px] sm:mt-[80px]">
      <SectionHeader
        title="More Control. Less Chaos."
        description="Run your complex Team Ops with the tool designed to make them easy."
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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[24px] sm:gap-[24px] mt-[24px] sm:mt-[24px]">
        <div className="sm:col-span-2">
          <Card
            title="Stay on top of scheduling changes — in real-time"
            description="Receive instant notifications and make updates on the fly without disrupting workflows."
            imageUrl="/images/place04.svg"
            imageHeight="h-[400px] - - h-full "
          />
        </div>

        <div className="sm:col-span-3">
          <Card
            title="Grow confidently with scalable tools"
            description="Whether you manage 5 or 500 employees, Velocity Manager grows with your team — no added complexity."
            imageUrl="/images/place05.svg"
            imageHeight="h-[443px] - min- h-full-"
          />
        </div>
      </div>
    </div>
  );
}

export default Section2;
