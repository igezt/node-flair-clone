"use client";

import { Job } from "@/types/Job";
import React, { useState } from "react";
import { JobCard } from "./JobCard";
import { JobInformation } from "./JobInformation";
import { mockJobs } from "@/util/mockJobs";

export const JobsDisplaySection = () => {
  const [selected, setSelected] = useState(mockJobs[0].id);
  const [jobs, setJobs] = useState<Job[]>(mockJobs);

  const handleSelectJob = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="jobcardsContainer flex items-start py-5 mt-12 max-w-5xl ml-auto mr-auto ">
      <div
        about="Contains all the jobCards"
        className="jobcardContainer w-full min-w-[370px] "
      >
        {jobs.map((job, i) => (
          <JobCard
            key={i}
            {...job}
            selectedJob={selected}
            handleSelectJob={handleSelectJob}
          />
        ))}
      </div>
      <JobInformation selectedJob={selected} jobs={jobs} />
    </div>
  );
};
