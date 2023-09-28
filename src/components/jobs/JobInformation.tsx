import { Job } from "@/types/Job";
import { lorem } from "@/util/lorem";
import { useEffect, useState } from "react";

interface JobInformationProps {
  selectedJob: number;
  jobs: Job[];
}

export const JobInformation = (props: JobInformationProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  }, [props.selectedJob]);

  return (
    <div
      about="Contains Job information"
      className="jobInformation hidden px-1.5 sticky w-[509px] top-[60x] rounded-lg bg-white shadow-xl h-[85vh]"
    >
      <div
        about="Contains scrolling container"
        className="jobInformationScrollContainer overflow-x-hidden overflow-y-scroll h-[85vh] py-4 pl-4 pr-5 text-center min-w-[509px]"
      >
        <div className="h-fit p-1 text-lg font-semibold">
          <h2>{props.jobs[props.selectedJob].jobTitle}</h2>
          <hr />
        </div>
        {isLoading ? <span className="loader translate-y-12" /> : lorem}
      </div>
    </div>
  );
};
