import Button from "@/components/ui/Button";
import { Header2, Paragraph1 } from "@/components/ui/Text";
import React from "react";

const Section3: React.FC = () => {
  return (
    <div className="bg-[#01524B] text-white py-20  ">
      <div className="container1 flex flex-col gap-[40px] sm:flex-row items-center justify-between">
        <div className=" flex flex-col gap-[32px] ">
          <Header2 className="">
            Workforce Management <br /> Reimagined
          </Header2>
          <Paragraph1 className=" ">
            Get Started With A 90-Day Free Trial. No Credit Card Required.
          </Paragraph1>

          <div className="flex gap-4">
            <Button
              text="Get Started"
              href="/"
              isLink={true}
              backgroundColor="bg-[#FDC298]"
              additionalClasses="border-secondary- w-full sm:w-fit text-primary"
            />{" "}
          </div>
        </div>
        <div className="flex gap-4">
          <img
            src="/images/place013.svg"
            alt="Mobile Screenshot Left"
            // className="w-40 md:w-48 lg:w-56"
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
