import { resources } from "@/data/resources";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Header1, Paragraph1, Paragraph2 } from "@/components/ui/Text";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ResourceDetailPage({ params }: PageProps) {
  const resource = resources.find((res) => res.slug === params.slug);

  if (!resource) return notFound();

  return (
    <div>
      <div
        className=""
        style={{
          background:
            "linear-gradient(to bottom, #a2e4e69a 10%, #e4f6f79a 80%, #EAF3F3 100%)",
        }}
      >
        {/* Hero Section with Cover Image and Dark Gradient Overlay */}

        <div className="container1 ">
          <div className=" invisible">r</div>
          <div className="relative h-[450px] mt-[150px] rounded-lg overflow-hidden ">
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b e via-black/70 to-black from-transparent z-10" />

            <div className="absolute bottom-10  z-20 flex  px-4 text-white ">
              <div>
                <Header1 className="text-3xl md:text-5xl font-bold mb-4">
                  {resource.title}
                </Header1>
                <Paragraph1 className="max-w-2xl  text-lg">
                  {resource.description}
                </Paragraph1>
              </div>
            </div>
          </div>
        </div>
        {/* Body Text Section */}
      </div>

      <div className="container1 px-4 py-12 text-gray-800 space-y-6 leading-relaxed max-w-4xl">
        <Paragraph2>{resource.content}</Paragraph2>

        {/* Add more paragraphs or content as needed */}
      </div>
    </div>
  );
}
