import { resources } from "@/data/resources";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ResourceDetailPage({ params }: PageProps) {
  const resource = resources.find((res) => res.slug === params.slug);

  if (!resource) return notFound();

  return (
    <div className="relative h-[550px] overflow-hidden">
      <Image
        src={resource.image}
        alt={resource.title}
        fill
        className="object-cover brightness-[0.5]"
        priority
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {resource.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg">{resource.description}</p>
        </div>
      </div>
    </div>
  );
}
