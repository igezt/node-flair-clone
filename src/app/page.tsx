import { JobCard } from "@/components/JobCard";
import { JobInformation } from "@/components/JobInformation";
import { JobsDisplaySection } from "@/components/JobsDisplaySection";
import { Company } from "@/types/Company";

export default function Home() {
  return (
    <div className="ml-auto mr-auto max-w-5xl">
      <JobsDisplaySection />
    </div>
  );
}
