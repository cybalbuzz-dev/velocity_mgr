import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import UseCaseCards from "../others/UseCase";



function Section2() {
  return (
    <div className=" container1 flex flex-col my-[32px] sm:my-[80px]">
      <SectionHeader
        title="Velocity Manager vs Other Tools"
        description="A smarter, smoother way to manage your team—finally."
      />
      <UseCaseCards />
    </div>
  );
}

export default Section2;
