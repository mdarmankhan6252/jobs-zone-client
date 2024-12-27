import FindRemoteJob from "./FindRemoteJob";
import ForEmployers from "./ForEmployers";
import Sponsor from "./Sponsor";

const Home = () => {
   return (
      <div>
         I am home page.
         <Sponsor></Sponsor>
         <FindRemoteJob></FindRemoteJob>

         <ForEmployers></ForEmployers>
      </div>
   );
};

export default Home;