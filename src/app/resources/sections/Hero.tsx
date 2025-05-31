/** @format */

import React from "react";
import { Header1, Paragraph3, ParagraphLink1 } from "@/components/ui/Text";
import Link from "next/link";
import Button from "@/components/ui/Button";

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
        <div className="  text-[#e4f6f79a]-  ">
          <div className="flex flex-col items-center justify-center py-2 container1 ">
            <div className="text-center max-w-4xl">
              <Header1>Operations Insights That Actually Help</Header1>

              <Paragraph3 className=" mb-[24px] mt-[8px] sm:my-[30px]">
                Real stories, practical guides, and tools for better shift and
                team management.
              </Paragraph3>

              <div className=" flex w-full  flex-col sm:flex-row justify-center gap-[24px] sm:gap-[32px] items-center">
                <Button
                  text="Get started for free"
                  href="/"
                  isLink={true}
                  backgroundColor="bg-primary"
                  border="border-primary border-2"
                  additionalClasses="border-secondary- text-white w-full sm:w-fit"
                />
                <Button
                  text="Schedule a Demo"
                  href="/"
                  isLink={true}
                  backgroundColor="bg-white"
                  border="border-primary border-2"
                  additionalClasses=" text-primary w-full sm:w-fit"
                  icon={
                    <img
                      src="/icons/calendar-2.svg"
                      alt="Calendar Icon"
                      className="w-4 h-4"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
