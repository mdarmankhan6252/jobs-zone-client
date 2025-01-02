import DreemJob from "../Home/DreemJob";
import OurPledge from "../Home/OurPledge";
import JobsMatches from "./JobsMatches";
import RemoteJob from "./RemoteJob";


const Jobs = () => {
    return (
        <div>
            <RemoteJob></RemoteJob>
            <JobsMatches></JobsMatches>
            <DreemJob></DreemJob>
            <OurPledge></OurPledge>
        </div>
    );
};

export default Jobs;