import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import Specials from "./Specials";

function Home() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <Specials />
      <OurTeam />
      <div>COntent</div>
    </div>
  );
}

export default Home;
