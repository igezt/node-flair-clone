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
    <div className="bg-neutral-100">
      <div className="flex items-start py-5 max-w-5xl ml-auto mr-auto">
        <div className="pr-15 pl-15 w-full">
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
    </div>
  );
};
