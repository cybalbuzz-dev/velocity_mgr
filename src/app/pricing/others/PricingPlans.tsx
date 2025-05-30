"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Header2, Header3, Paragraph1, Paragraph2 } from "@/components/ui/Text";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    description:
      "Smart scheduling tools, basic time tracking, invoice creation, basic payroll processing, mobile app access, standard email support",
    monthly: 11.99,
    yearly: 119.99,
    features: [
      "Smart scheduling",
      "Basic time tracking",
      "Invoicing",
      "Payroll processing",
      "Mobile app access",
      "Standard support",
    ],
    badge: "",
    users: "0-5",
  },
  {
    name: "Standard",
    description:
      "Smart scheduling tools, basic time tracking, invoice creation, basic payroll processing, mobile app access, standard email support",
    monthly: 29.99,
    yearly: 299.99,
    features: [
      "Everything in Starter",
      "Advanced time tracking and productivity insights",
      "Productivity insights",
      "Batch payroll",
      "Shift swapping",
      "Compliance alerts",
      "Priority support",
    ],
    badge: "Most Popular",
    users: "6-12",
  },
  {
    name: "Premium",
    description:
      "Smart scheduling tools, basic time tracking, invoice creation, basic payroll processing, mobile app access, standard email support",
    monthly: 49.99,
    yearly: 499.99,
    features: [
      "Everything in Standard",
      "Custom scheduling rules",
      "Multi-location ops",
      "Advanced compliance settings",
      "Dedicated account manager",
      "Phone & priority support",
    ],
    badge: "",
    users: "13-20",
  },
];

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="bg-muted py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center flex justify-center mb-8">
        <button
          onClick={() => setIsYearly(!isYearly)}
          className="relative w-[250px] border border-primary bg-gray-100 rounded-lg p-1 flex items-center justify-between transition-all duration-300 shadow-inner"
        >
          {/* Sliding Indicator */}
          <span
            className={`absolute top-1 bottom-1 left-1 w-[120px] rounded-lg bg-primary transition-all duration-300 ${
              isYearly ? "translate-x-full" : "translate-x-0"
            }`}
          />

          {/* Labels */}
          <span
            className={`z-10 w-1/2 py-1 text-center text-sm transition-colors p duration-300 ${
              !isYearly ? "text-white" : "text-gray-700"
            }`}
          >
            <Paragraph1>Monthly</Paragraph1>
          </span>
          <span
            className={`z-10 w-1/2 py-1 text-center text-sm transition-colors duration-300 ${
              isYearly ? "text-white" : "text-gray-700"
            }`}
          >
            <Paragraph1>Yearly</Paragraph1>
          </span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={cn(
              " rounded-xl shadow-sm p-6 flex flex-col justify-between",
              plan.name === "Standard"
                ? " bg-primary text-white"
                : "border bg-white"
            )}
          >
            <div>
              <Header3 className="text-xl  mb-1">
                {plan.name}{" "}
                {plan.badge && <span className="text-s">({plan.badge})</span>}
              </Header3>
              <p className="text-sm ">{plan.description}</p>
              <Header2 className="mb-1">
                ${isYearly ? plan.yearly.toFixed(2) : plan.monthly.toFixed(2)}
                <span className="text-base font-normal">
                  /user/{isYearly ? "year" : "month"}
                </span>
              </Header2>

              <p className="text-xs text-gray-400 mb-4">
                Best for{" "}
                {plan.name === "Premium"
                  ? "enterprise teams of up to"
                  : "teams of"}{" "}
                {plan.users} members
              </p>
              <ul className="text-sm space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Paragraph2>✔ {feature}</Paragraph2>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              text="Get started for free"
              href="/"
              isLink={true}
              backgroundColor="bg-primary"
              additionalClasses={cn(
                "ni mt-6",
                plan.name === "Standard"
                  ? " border bg-white text-primary "
                  : " bg-primary text-white"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
