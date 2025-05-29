import { Header3, Paragraph2 } from "@/components/ui/Text";
import Image from "next/image";

type Steps = {
  
  title: string;
  content: string;
  image: string;
};

const Steps: Steps[] = [
  {
    title: "Set Up Your Team",
    content:
      "Sleek, functional, and impactful websites that tell your story with purpose.",
    image: "/icons/step01.svg",
  },
  {
    title: "Build Smart Schedules",
    content:
      " Create shifts, open available slots for pickup, and edit calendars easily.",
    image: "/icons/step02.svg",
  },
  {
    title: "Track and Optimize",
    content:
      " Use GPS clock-ins, real-time alerts, and compliance reminders to stay on top of operations.",
    image: "/icons/step03.svg",
  },
];



export default function StepsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[16px] ">
      {Steps.map((Steps, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded  flex flex-col justify-between"
          style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={Steps.image}
              alt={Steps.title}
              width={40}
              height={40}
              className=""
            />
            
          </div>
          <Header3 className="font-semibold text-lg mb-2">
            {Steps.title}
          </Header3>
          <Paragraph2 className="text-sm text-gray-700">
            {Steps.content}
          </Paragraph2>

          
        </div>
      ))}
    </div>
  );
}
