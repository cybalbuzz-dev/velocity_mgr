import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import TestimonialCards from "../others/TestimonialCard";

function Section4() {
  return (
    <div className=" container1 flex flex-col mt-[80px]">
      <SectionHeader
        title="Customer Testimonials"
        description="What Teams Are Saying"
      />

      <div>
        <TestimonialCards />
      </div>


    </div>
  );
}

export default Section4;
