export interface Job {
  id: number;
  company: string;
  companyIcon: string;
  companyIconAlt: string;
  jobTitle: string;
  shortenedJobTitle: string;
  timePosted: Date;
  country: string;
  lowerBoundPay: number;
  upperBoundPay: number;
  skills: string[];
  rating: number;
}
