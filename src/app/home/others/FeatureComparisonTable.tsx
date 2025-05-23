import { Paragraph2, ParagraphLink1 } from "@/components/ui/Text";
import React from "react";

const features = [
  {
    feature: "2-Minute Setup",
    velocityMor: "✔ Yes",
    legacyTools: "✘ No",
  },
  {
    feature: "Geofenced Automatic Clock-In",
    velocityMor: "✔ Yes",
    legacyTools: "✘ No",
  },
  {
    feature: "Timezone + Location Handling",
    velocityMor: "✔ Yes",
    legacyTools: "Partial",
  },
  {
    feature: "Shift Swapping & Claiming",
    velocityMor: "✔ Yes",
    legacyTools: "Limited",
  },
  {
    feature: "Compliance Reminders",
    velocityMor: "✔ Yes",
    legacyTools: "Limited",
  },
  {
    feature: "Custom Scheduling Rules",
    velocityMor: "✔ Yes",
    legacyTools: "✘ No",
  },
  {
    feature: "Multi-location Payroll",
    velocityMor: "✔ Yes",
    legacyTools: "Partial",
  },
  {
    feature: "Free Onboarding Support",
    velocityMor: "✔ Yes",
    legacyTools: "Paid or Limited",
  },
  {
    feature: "Free Trial",
    velocityMor: "3-months free trial",
    legacyTools: "14 days free trial",
  },
];

const FeatureComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg  text-left text-sm">
        <thead className="">
          <tr>
            <th className="px-6 py-4 border-r-2 border-b-2 border-primary">
              <ParagraphLink1>Feature</ParagraphLink1>
            </th>
            <th className="px-6 py-4 border-l-2 border-b-2 border-primary">
              <img src="/images/logo2.svg" className="h-[23px] min-h-[24px]" alt="" />
            </th>
            <th className="px-6 py-4 border-l-2 border-b-2 border-primary">
              <ParagraphLink1>Legacy Tools</ParagraphLink1>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map(({ feature, velocityMor, legacyTools }, index) => (
            <tr key={index} className="">
              <td className="px-6 py-4 border-r-2 border-b-2 border-primary">
                <Paragraph2>{feature}</Paragraph2>
              </td>
              <td className="px-6 py-4 border-l-2 border-b-2 border-primary">
                <Paragraph2>{velocityMor}</Paragraph2>
              </td>
              <td className="px-6 py-4 border-l-2 border-b-2 border-primary">
                <Paragraph2>{legacyTools}</Paragraph2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeatureComparisonTable;
