import Categories from "./Categories";
import HeroSection from "./HeroSection";
import MadeWithLove from "./MadeWithLove";
import WhatYouGet from "./WhatYouGet";

function OurServices() {
  return (
    <div className="mb-[50px] flex flex-col gap-[70px]">
      <HeroSection />
      <Categories />
      <MadeWithLove />
      <WhatYouGet />
    </div>
  );
}

export default OurServices;
