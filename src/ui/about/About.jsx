import HeroSection from "./HeroSection";
import OutStory from "./OutStory";
import Team from "../Team";
import SectionHead from "../SectionHead";

function About() {
  return (
    <div className="mb-[50px] flex flex-col gap-[70px]">
      <HeroSection />
      <OutStory />
      <div>
        <SectionHead title={"Team Members"} description={"Cooperative Team"} />
        <Team />
      </div>
    </div>
  );
}

export default About;
