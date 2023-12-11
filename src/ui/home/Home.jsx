import HeroSection from "./HeroSection";
import Specials from "./Specials";

function Home() {
  return (
    <div className="flex flex-col gap-[50px]">
      <HeroSection />
      <Specials />
      <div>COntent</div>
    </div>
  );
}

export default Home;
