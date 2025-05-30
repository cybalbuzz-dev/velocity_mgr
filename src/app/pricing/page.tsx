import React from "react";
import Hero from "./sections/Hero";

function page() {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/dotted-lines.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        minHeight: "200vh",
      }}
    >
      <Hero />
    </div>
  );
}

export default page;
