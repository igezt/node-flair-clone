"use client";

import { Company } from "@/types/Company";
import React, { useState } from "react";
import { JobCard } from "./JobCard";
import { JobInformation } from "./JobInformation";

export const JobsDisplaySection = () => {
  const companies: Company[] = [
    {
      id: 0,
      company: "Shopee",
      companyIcon: "https://nodeflair.com/companies/47.png",
      companyIconAlt: "ShoppeIcon",
      jobTitle: "Product Manager - Campaign, MarketPlace",
      shortenedJobTitle: "PM",
      timePosted: new Date("2023-09-27T09:41:51.790Z"),
      country: "Singapore",
      lowerBoundPay: 7000,
      upperBoundPay: 12000,
      skills: [
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
      ],
      rating: 3.8,
    },
    {
      id: 1,
      company: "Shopee",
      companyIcon: "https://nodeflair.com/companies/47.png",
      companyIconAlt: "ShoppeIcon",
      jobTitle: "Product Manager - Campaign, MarketPlace",
      shortenedJobTitle: "PM",
      timePosted: new Date("2023-09-27T09:41:51.790Z"),
      country: "Singapore",
      lowerBoundPay: 7000,
      upperBoundPay: 12000,
      skills: [
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
      ],
      rating: 3.8,
    },
    {
      id: 2,
      company: "Shopee",
      companyIcon: "https://nodeflair.com/companies/47.png",
      companyIconAlt: "ShoppeIcon",
      jobTitle: "Product Manager - Campaign, MarketPlace",
      shortenedJobTitle: "PM",
      timePosted: new Date("2023-09-27T09:41:51.790Z"),
      country: "Singapore",
      lowerBoundPay: 7000,
      upperBoundPay: 12000,
      skills: [
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
      ],
      rating: 3.8,
    },
    {
      id: 3,
      company: "Shopee",
      companyIcon: "https://nodeflair.com/companies/47.png",
      companyIconAlt: "ShoppeIcon",
      jobTitle: "Product Manager - Campaign, MarketPlace",
      shortenedJobTitle: "PM",
      timePosted: new Date("2023-09-27T09:41:51.790Z"),
      country: "Singapore",
      lowerBoundPay: 7000,
      upperBoundPay: 12000,
      skills: [
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
      ],
      rating: 3.8,
    },
    {
      id: 4,
      company: "Shopee",
      companyIcon: "https://nodeflair.com/companies/47.png",
      companyIconAlt: "ShoppeIcon",
      jobTitle: "Product Manager - Campaign, MarketPlace",
      shortenedJobTitle: "PM",
      timePosted: new Date("2023-09-27T09:41:51.790Z"),
      country: "Singapore",
      lowerBoundPay: 7000,
      upperBoundPay: 12000,
      skills: [
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
        "Strategy",
      ],
      rating: 3.8,
    },
  ];

  const [selected, setSelected] = useState(companies[0].id);

  const handleSelectJob = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="flex items-start py-5">
      <div className="pr-15 pl-15 w-full max-w-7xl ml-auto mr-auto">
        {companies.map((company, i) => (
          <JobCard
            key={i}
            {...company}
            selectedJob={selected}
            handleSelectJob={handleSelectJob}
          />
        ))}
      </div>
      <JobInformation />
    </div>
  );
};
