import { useState } from "react";
import DreemJob from "../Home/DreemJob";
import OurPledge from "../Home/OurPledge";
import AboutHeader from "./AboutHeader";
import BenefitsTab from "./BenefitsTab";
import ClaimProfile from "./ClaimProfile";
import JobsTab from "./JobsTab";
import Overview from "./Overview";
import SalariesTab from "./SalariesTab";
import TechStack from "./TechStack";

const About = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const activeTabState = { activeTab, setActiveTab };
  return (
    <div>
      <AboutHeader activeTabState={activeTabState}></AboutHeader>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col gap-16 xl:flex-row justify-between">
        <div className="flex-shrink-0 xl:w-[48rem]">
          {activeTab === "Overview" && <Overview activeTabState={activeTabState}></Overview>}
          {activeTab === "Jobs" && <JobsTab></JobsTab>}
          {activeTab === "Salaries" && <SalariesTab></SalariesTab>}
          {activeTab === "Benefits" && <BenefitsTab></BenefitsTab>}
          {activeTab === "Tech_Stack" && <TechStack></TechStack>}
        </div>
        <ClaimProfile></ClaimProfile>
      </div>
      <DreemJob></DreemJob>
      <OurPledge></OurPledge>
    </div>
  );
};

export default About;
