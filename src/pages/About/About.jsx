import AboutHeader from "./AboutHeader";
import ClaimProfile from "./ClaimProfile";

const About = () => {
  return (
    <div>
      <AboutHeader></AboutHeader>
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-12 md:pt-16 flex flex-col gap-16 xl:flex-row justify-between">
        <div className="bg-green-600 flex-shrink-0 xl:w-[48rem] h-20"></div>
        <ClaimProfile></ClaimProfile>
      </div>
    </div>
  );
};

export default About;
