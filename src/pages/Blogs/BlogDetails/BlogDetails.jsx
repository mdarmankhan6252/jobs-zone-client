import DreemJob from "../../Home/DreemJob";
import OurPledge from "../../Home/OurPledge";
import Articles from "./Articles";
import DetailsHead from "./DetailsHead";
import RelatedArticles from "./RelatedArticles";
import SocialLink from "./SocialLink";


const BlogDetails = () => {
    return (
        <div>
            <DetailsHead></DetailsHead>
            <Articles></Articles>
            <SocialLink></SocialLink>
            <DreemJob></DreemJob>
            <RelatedArticles></RelatedArticles>
            <OurPledge></OurPledge>
        </div>
    );
};

export default BlogDetails;