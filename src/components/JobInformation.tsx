import { lorem } from "@/util/lorem";

export const JobInformation = () => {
  return (
    <div
      about="Contains Job information"
      className="jobInformation hidden px-1.5 sticky flex-grow min-w-0 top-20"
    >
      <div
        about="Contains scrolling container"
        className="jobInformationScrollContainer overflow-x-hidden overflow-y-scroll pr-1.5 h-screen"
      >
        {lorem}
      </div>
    </div>
  );
};
