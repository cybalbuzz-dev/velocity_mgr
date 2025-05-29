import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import Steps from "../others/Steps";
import Button from "@/components/ui/Button";
import { Header2, Paragraph2 } from "@/components/ui/Text";

function Section2() {
  return (
    <div className=" container1 flex flex-col my-[32px] sm:my-[80px]">
      <SectionHeader
        title="Customer Testimonials"
        description="What Teams Are Saying"
      />

      <div>
        <Steps />
      </div>

      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-[24px] sm:gap-[32px] mt-[32px] sm:mt-[80px]">
        <div>
          <img
            src="/images/place015.svg"
            alt=""
            className="order-2 md:order-1 rounded-lg flex justify-center items-center"
          />
        </div>

        <div className="order-1 md:order-2">
          <Header2 className=" mb-[16px]">
            Built for shifts and hourly teams.
          </Header2>

          <Paragraph2>
            At SpiritSync, we are dedicated to helping churches and faith
            communities stay connected, engaged, and spiritually nourished.
            <br />
            Our platform provides churches with powerful tools to enhance
            communication, manage small groups, organize events, and foster
            deeper connections among members.
          </Paragraph2>
          <div className=" flex mt-[40px] ">
            <Button
              text="Get started for free"
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

export default Section2;
