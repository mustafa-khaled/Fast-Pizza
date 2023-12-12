import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import PizzaSwiper from "./PizzaSwiper";
import Specials from "./Specials";

function Home() {
  return (
    <div className="mb-[50px] flex flex-col gap-[70px]">
      <HeroSection />
      <Specials />
      <OurTeam />
      <PizzaSwiper />
    </div>
  );
}

export default Home;
