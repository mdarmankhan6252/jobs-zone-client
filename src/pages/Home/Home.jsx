import DreemJob from "./DreemJob";
import FindRemoteJob from "./FindRemoteJob";
import ForEmployers from "./ForEmployers";
import GoDeeper from "./GoDeeper";
import Sponsor from "./Sponsor";

const Home = () => {
   return (
      <div>
         I am home page.
         <Sponsor></Sponsor>
         <FindRemoteJob></FindRemoteJob>

         <ForEmployers></ForEmployers>
         <GoDeeper></GoDeeper>
         <DreemJob></DreemJob>
      </div>
   );
};

export default Home;