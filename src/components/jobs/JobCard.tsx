import { convertMillisecondsToHighestOrder } from "@/util/convertMilliseconds";
import { sgdFormatter } from "@/util/salaryConverter";
import Image from "next/image";

export interface JobCardProps {
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

  selectedJob: number;
  handleSelectJob: (id: number) => void;
}

export const JobCard = (props: JobCardProps) => {
  const recency = convertMillisecondsToHighestOrder(
    new Date().valueOf() - props.timePosted.valueOf()
  );

  const salary = `${sgdFormatter.format(
    props.lowerBoundPay
  )} - ${sgdFormatter.format(props.upperBoundPay)} / mth `;

  const handleOnClick = () => {
    props.handleSelectJob(props.id);
  };

  return (
    <div
      className={`jobcard mx-5 p-5 mb-5 curve rounded-lg min-w bg-white relative cursor-pointer h-full border-2 text-base shadow-sm duration-200 select-none hover:shadow-lg hover:-translate-y-[3px] ${
        props.selectedJob == props.id ? "border-green-500" : ""
      }`}
      onClick={handleOnClick}
    >
      <div
        about="Top part of the card"
        className="jobcard_top flex items-start justify-start leading-normal"
      >
        <div about="Company Icon" className="w-max h-max mr-3">
          <div className="w-11 h-11">
            <Image
              alt={props.companyIconAlt}
              height={44}
              width={44}
              className="float-left rounded-lg"
              src={props.companyIcon}
            />
          </div>
        </div>
        <div
          about="Contains the shortened version of the job title"
          className="jobcard_shortenedJobTitle ml-auto pl-2.5"
        >
          <div className="bg-green-100 text-green-500 px-2 py-1.5 rounded-md font-semibold">
            {props.shortenedJobTitle}
          </div>
        </div>
        <div
          about="Contains information about the company"
          className="basis-auto mt-0 flex-shrink block text-left text-ellipsis w-full"
        >
          <p
            about="Company name and rating"
            className="jobcard_jobDescription mb-2 basis-auto shrink text-gray-600 m-block block whitespace-pre-wrap"
          >
            <span>{props.company}</span>
            <span className="pl-3">{props.rating}</span>
            <span>&nbsp;★</span>
          </p>
          <h2 className="font-bold font-sans text-inherit jobcard_title">
            {props.jobTitle}
          </h2>
        </div>
      </div>
      <div
        about="Middle section of the card"
        className="jobcard_middle block align-top mb-2"
      >
        <div
          about="Date posted and Location"
          className="py-2 flex flex-row text-gray-500"
        >
          <span className="text-green-500 font-bold inherit">{recency}</span>
          <Image
            about="Map pin svg"
            alt="map pin"
            src={"/map-pin.svg"}
            height={10.5}
            width={15}
            className="ml-1"
          />
          &nbsp;
          {props.country}
        </div>
        <div about="Salary">
          <span className="pt-0.5 font-medium">{salary}</span>
          <span className="py-0.6 px-2 bg-gray-100 rounded-md">EST</span>
        </div>
      </div>
      <hr />
      <div
        about="Bottom Section"
        className="jobcard_bottom pt-3 w-full truncate block"
      >
        {props.skills.map((skill, i) => (
          <span
            key={i}
            className="inline-block py-1.5 px-2 mr-1 bg-gray-100 font-bold text-gray-500 rounded overflow-hidden align-middle"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
