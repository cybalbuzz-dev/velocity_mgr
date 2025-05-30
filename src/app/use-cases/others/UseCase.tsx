import { Header3, Paragraph2 } from "@/components/ui/Text";
import Image from "next/image";
import Link from "next/link";

type UseCase = {
  
  title: string;
  content: string;
  image: string;
  link?: string; 
};

const UseCase: UseCase[] = [
  {
    title: "For Agency Owners",
    link: "/",
    content:
      "See the big picture—revenue, performance, and shift coverage from one view.",
    image: "/icons/step01.svg",
  },
  {
    title: "For Operations Leads",
    link: "/",
    content:
      " See the big picture—revenue, performance, and shift coverage from one view.",
    image: "/icons/step02.svg",
  },
  {
    title: "For Recruiters & Coordinators",
    link: "/",
    content:
      " See the big picture—revenue, performance, and shift coverage from one view.",
    image: "/icons/step03.svg",
  },
  {
    title: "For On-Site Staff",
    link: "/",
    content:
      " See the big picture—revenue, performance, and shift coverage from one view.",
    image: "/icons/step03.svg",
  },
];



export default function UseCaseCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] sm:gap-[16px] ">
      {UseCase.map((UseCase, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded  flex flex-col justify-between"
          style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={UseCase.image}
              alt={UseCase.title}
              width={40}
              height={40}
              className=""
            />
          </div>
          <Header3 className="font-semibold text-lg mb-2">
            {UseCase.title}
          </Header3>
          <Paragraph2 className="text-sm text-gray-700">
            {UseCase.content}
          </Paragraph2>

          <Link
            href={UseCase.link || "#"}
            className="text-primary hover:underline mt-4 flex items-center gap-1"
          >
            <Paragraph2 className="text-sm ">Read Owner Use Case </Paragraph2>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
