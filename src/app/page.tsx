import React from "react";
import Hero from "./home/sections/Hero";
import Section1 from "./home/sections/Section1";
import Section2 from "./home/sections/Section2";
import Section3 from "./home/sections/Section3";
import Section4 from "./home/sections/Section4";
import Section5 from "./home/sections/Section5";
import Section6 from "./home/sections/Section6";

function Page() {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/dotted-lines.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // or '100% 100%' if you want to stretch
        backgroundPosition: "top",
        minHeight: "200vh", // ensures the image can scroll with long content
      }}
    >
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}

export default Page;
