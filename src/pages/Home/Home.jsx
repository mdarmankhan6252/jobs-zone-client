
import Banner from "./Banner";
import FindRemoteJob from "./FindRemoteJob";
import DreemJob from "./DreemJob";
import ForEmployers from "./ForEmployers";
import GoDeeper from "./GoDeeper";
import OurPledge from "./OurPledge";
import Sponsor from "./Sponsor";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Sponsor></Sponsor>
      <FindRemoteJob />
      <ForEmployers></ForEmployers>
      <GoDeeper></GoDeeper>
      <DreemJob></DreemJob>
      <OurPledge></OurPledge>
    </div>
  );
};

export default Home;
