// components/Card.tsx
import React from "react";
import { Header2, Header3, Paragraph2 } from "../ui/Text";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHeight?: string; // Optional height override (Tailwind class)
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  imageHeight = "h-[200px]", // Default height
}) => {
  return (
    <div
      className="rounded-xl overflow-hidden bg-white"
      style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
    >
      {" "}
      <div className="p-4">
        <Header3 className="">{title}</Header3>
        <Paragraph2 className="text-gray-600 mt-2">{description}</Paragraph2>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className={`w-full object-cover ${imageHeight}`}
      />
    </div>
  );
};

export default Card;
