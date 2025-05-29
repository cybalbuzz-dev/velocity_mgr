/** @format */

import React from "react";
import {
  Header1,
  Header3,
  Paragraph1,
  Paragraph3,
  ParagraphLink1,
} from "@/components/ui/Text";
import Link from "next/link";
import Button from "@/components/ui/Button";

const Hero = () => {
  return (
    <>
      <div
        className="lg:pt-[150px] pt-[106px] "
        style={{
          background:
            "linear-gradient(to bottom, #a2e4e69a 10%, #e4f6f79a 80%, #EAF3F3 100%)",
        }}
      >
        <div className=" container1 items-center   grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center sm:items-start  py-2  ">
            <div className=" text-center sm:text-left">
              <Header1>Your Operations Toolkit, Finally in One Place</Header1>

              <Paragraph3 className=" mb-[24px] mt-[8px] sm:my-[30px]">
                Velocity Manager handles scheduling, clock-ins, payroll, and
                reporting—without needing five tools or long setup calls.
              </Paragraph3>

              <div className=" flex w-full  flex-col sm:flex-row justify-center sm:justify-start gap-[24px] sm:gap-[32px] items-center">
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

          <div className="flex  flex-col items-center justify-center py-2 container1 mt-[32px] sm:mt-[74px]">
            <img src="/images/place014.svg" alt="" />
          </div>
        </div>

        <div className="container1 py-2 mt-[32px] sm:mt-[74px]">
          <Header3>Features That Empower Your Church Community</Header3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div>
              <Paragraph1>
                SpiritSync fostering connection through real-time updates,
                enhancing communication with AI-powered messaging, simplifying
                event planning, encouraging generosity with seamless giving,
                nurturing discipleship through small groups, and creating a
                space for testimonies and prayer.
              </Paragraph1>
            </div>
            <div>
              <Paragraph1>
                SpiritSync brings your church community together in one powerful
                platform designed to foster connection, enhance communication,
                and support spiritual growth.
              </Paragraph1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
