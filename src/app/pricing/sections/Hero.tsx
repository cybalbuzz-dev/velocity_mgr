/** @format */

import React from "react";
import { Header1, Paragraph3 } from "@/components/ui/Text";

import PricingPlans from "../others/PricingPlans";

const Hero = () => {
  return (
    <>
      <div
        className="lg:pt-[200px] pt-[106px] "
        style={{
          background:
            "linear-gradient(to bottom, #a2e4e69a 10%, #e4f6f79a 80%, #EAF3F3 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center container1 ">
          <div className="text-center">
            <Header1>
              Flexible pricing to keep your team running at its best.
            </Header1>

            <Paragraph3 className=" mt-[24px]">
              Start free today. No credit card required. Cancel anytime.
            </Paragraph3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center -mt-[24px] justify-center py-2 container1">
        <PricingPlans />
      </div>
    </>
  );
};

export default Hero;
