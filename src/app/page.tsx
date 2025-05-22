import React from "react";

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
      <div>pdivvage</div>
      <div>uiweeryijskdf</div>
    </div>
  );
}

export default Page;
