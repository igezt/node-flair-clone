import { Job } from "@/types/Job";

// Mock jobs.
export const mockJobs: Job[] = [
  {
    id: 0,
    company: "Shopee",
    companyIcon: "https://nodeflair.com/companies/47.png",
    companyIconAlt: "ShopeeIcon",
    jobTitle: "Product Manager - Campaign, MarketPlace",
    shortenedJobTitle: "PM",
    timePosted: new Date("2023-09-27T09:41:51.790Z"),
    country: "Singapore",
    lowerBoundPay: 7000,
    upperBoundPay: 12000,
    skills: ["Strategy"],
    rating: 3.8,
  },
  {
    id: 1,
    company: "TikTok",
    companyIcon: "https://nodeflair.com/companies/240.png",
    companyIconAlt: "TikTokIcon",
    jobTitle: "Backend Software Engineer (Wallet) - TikTok - Singapore",
    shortenedJobTitle: "Backend",
    timePosted: new Date("2023-07-27T09:41:51.790Z"),
    country: "Singapore",
    lowerBoundPay: 10000,
    upperBoundPay: 20000,
    skills: ["C++", "Go", "Java", "Python"],
    rating: 3.6,
  },
  {
    id: 2,
    company: "Dyson",
    companyIcon: "https://nodeflair.com/companies/378.png",
    companyIconAlt: "DysonIcon",
    jobTitle: "Associate Principal Data Scientist",
    shortenedJobTitle: "Data Sci",
    timePosted: new Date("2022-09-27T09:41:51.790Z"),
    country: "Singapore",
    lowerBoundPay: 10000,
    upperBoundPay: 20000,
    skills: [
      "TDD",
      "ETL",
      "XGBoost",
      "Snowflake",
      "TensorFlow",
      "Docker",
      "C++",
      "LightGBM",
      "play",
      "Analytics",
      "Scipy",
      "CI",
      "R",
      "BigQuery",
      "PyTorch",
      "Keras",
      "Git",
    ],
    rating: 3,
  },
  {
    id: 3,
    company: "AICS",
    companyIcon: "https://nodeflair.com/companies/4688.png",
    companyIconAlt: "AICSIcon",
    jobTitle: "Software Engineer-Frontend",
    shortenedJobTitle: "Frontend",
    timePosted: new Date("2023-01-27T09:41:51.790Z"),
    country: "Singapore",
    lowerBoundPay: 8000,
    upperBoundPay: 15000,
    skills: [
      "API",
      "SPA",
      "Flow",
      "Webpack",
      "Git",
      "Typescript",
      "ES6",
      "Node.js",
      "Vue.js",
    ],
    rating: 4,
  },
  {
    id: 4,
    company: "AICS",
    companyIcon: "https://nodeflair.com/companies/4688.png",
    companyIconAlt: "AICSIcon",
    jobTitle: "Software Engineer-Backend",
    shortenedJobTitle: "Backend",
    timePosted: new Date("2023-05-27T09:41:51.790Z"),
    country: "Singapore",
    lowerBoundPay: 8000,
    upperBoundPay: 15000,
    skills: [
      "AWS",
      "Fluentd",
      "Sprint",
      "Azure",
      "Grafana",
      "Prometheus",
      "NoSQL",
      "Kubernetes",
      "Typescript",
      "JavaScript",
    ],
    rating: 4,
  },
];
