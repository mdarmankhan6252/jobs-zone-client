import { useState } from "react";
import AboutHeader from "./AboutHeader";
import BenefitsTab from "./BenefitsTab";
import ClaimProfile from "./ClaimProfile";
import JobsTab from "./JobsTab";
import Overview from "./Overview";
import SalariesTab from "./SalariesTab";

const About = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const activeTabState = { activeTab, setActiveTab };
  return (
    <div>
      <AboutHeader activeTabState={activeTabState}></AboutHeader>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 flex flex-col gap-16 xl:flex-row justify-between">
        <div className="flex-shrink-0 xl:w-[48rem]">
          {activeTab === "Overview" && <Overview activeTabState={activeTabState}></Overview>}
          {activeTab === "Jobs" && <JobsTab></JobsTab>}
          {activeTab === "Salaries" && <SalariesTab></SalariesTab>}
          {activeTab === "Benefits" && <BenefitsTab></BenefitsTab>}
          {activeTab === "Tech_Stack" && <div>Tech Stack</div>}
        </div>
        <ClaimProfile></ClaimProfile>
      </div>
    </div>
  );
};

export default About;
