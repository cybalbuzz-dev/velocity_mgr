"use client";

import Link from "next/link";
import Image from "next/image";

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
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <Image
        src={image}
        alt={title}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link
          href={`/resources/${slug}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};
