import OurPledge from "../Home/OurPledge";
import Faqs from "./Faqs";
import HiringRemotely from "./HiringRemotely";
import PricingHeader from "./PricingHeader";
import TalentProfile from "./TalentProfile";


const Pricing = () => {
    return (
        <div>
            <PricingHeader></PricingHeader>
            <TalentProfile></TalentProfile>
            <Faqs></Faqs>
            <HiringRemotely></HiringRemotely>
            <OurPledge></OurPledge>
        </div>
    );
};

export default Pricing;