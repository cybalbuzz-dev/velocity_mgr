import { Header3, Paragraph2 } from "@/components/ui/Text";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  title: string;
  content: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Bola E.",
    role: "Operations Manager, Retail Staffing",
    title: "Simpler Time Tracking",
    content:
      "We stopped chasing timesheets. Now we actually focus on our team.",
    image: "/images/avata01.svg", // Update with actual image paths
  },
  {
    name: "Ijeoma A.",
    role: "HR Lead, BrightTemps Agency",
    title: "Easier Staff Management",
    content:
      "Velocity Manager made it easy for us to manage over 50 part-time staff without missing a single shift.",
    image: "/images/avata01.svg",
  },
  {
    name: "David M.",
    role: "Ops Lead",
    title: "Faster Scheduling",
    content:
      "We reduced scheduling time by 70% within the first month of using Velocity Manager.",
    image: "/images/avata01.svg",
  },
];

const StarRating = () => (
  <div className="flex gap-1 mt-4">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] sm:gap-[16px] ">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded  flex flex-col justify-between"
          style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-sm text-gray-600">
              <strong>{testimonial.name}</strong>, {testimonial.role}
            </p>
          </div>
          <Header3 className="font-semibold text-lg mb-2">
            {testimonial.title}
          </Header3>
          <Paragraph2 className="text-sm text-gray-700">
            {testimonial.content}
          </Paragraph2>

          <div className="flex justify-end">
            {" "}
            <StarRating />
          </div>
        </div>
      ))}
    </div>
  );
}
