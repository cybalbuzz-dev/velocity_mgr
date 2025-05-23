// components/SectionHeader.tsx
import React from "react";
import { Header2, Header3, Paragraph2, Paragraph3 } from "../ui/Text";

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center mb-[56px] ">
      <Header2 className=" mb-[16px]">{title}</Header2>
      <Paragraph3 className="">{description}</Paragraph3>
    </div>
  );
};

export default SectionHeader;
