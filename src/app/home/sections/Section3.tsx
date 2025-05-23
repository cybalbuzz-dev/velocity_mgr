import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureComparisonTable from "../others/FeatureComparisonTable";



function Section3() {
  return (
    <div className=" container1 flex flex-col mt-[80px]">
      <SectionHeader
        title="Velocity Manager vs Other Tools"
        description="A smarter, smoother way to manage your team—finally."
      />
      <FeatureComparisonTable />
    </div>
  );
}

export default Section3;
