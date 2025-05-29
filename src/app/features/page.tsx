import React from "react";
import Hero from "./sections/Hero";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";

function page() {
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
    </div>
  );
}

export default page;
