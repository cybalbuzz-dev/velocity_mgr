import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import Questions from "../others/Questions";

function Section5() {
  return (
    <div className=" container1 flex flex-col my-[80px]">
      <SectionHeader
        title="Frequently Asked Questions"
        description="All-in-One Workforce Management – Built for Speed."
      />

      <Questions />
    </div>
  );
}

export default Section5;
