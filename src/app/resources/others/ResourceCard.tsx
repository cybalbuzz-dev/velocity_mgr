"use client";

import Link from "next/link";
import Image from "next/image";
import { Header2, Header3, Paragraph1, ParagraphLink1 } from "@/components/ui/Text";

interface ResourceCardProps {
  title: string;
  description: string;
  slug: string;
  image: string;
}

export const ResourceCard = ({
  title,
  description,
  slug,
  image,
}: ResourceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md- overflow-hidden transition hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <Paragraph1 className="text-xl font-semibold mb-2">{title}</Paragraph1>
        {/* <Paragraph1 className="text-gray-600 text-sm mb-4">{description}</Paragraph1> */}
        <Link
          href={`/resources/${slug}`}
          className="text-primary hover:underline font-medium"
        >
          <ParagraphLink1> Read More → </ParagraphLink1>
        </Link>
      </div>
    </div>
  );
};
