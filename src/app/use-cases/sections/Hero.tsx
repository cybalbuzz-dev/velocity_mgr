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
            <div className="text-center">
              <Header1>Built for Everyone Who Makes Ops Work</Header1>

              <Paragraph3 className=" mb-[24px] mt-[8px] sm:my-[30px]">
                Velocity Manager supports every person behind your staffing
                agency’s operations—from the ones scheduling shifts to the ones
                showing up for them. No extra tools. No misalignment.
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
      <div className="flex flex-col items-center justify-center py-2 container1 mt-[32px] sm:mt-[74px]">
        <img src="/images/frame001.svg" alt="" />
      </div>
    </>
  );
};

export default Hero;
