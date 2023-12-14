import Container from "../Container";
import SectionHead from "../SectionHead";

import icon1 from "../../assets/icon1a.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const whatYouGetData = [
  { title: "Fast Delivery", image: icon1 },
  { title: "Pickup In Store", image: icon2 },
  { title: "Seat Reservation", image: icon3 },
  { title: "Catering Is An Option", image: icon4 },
];

function WhatYouGet() {
  return (
    <Container>
      <SectionHead
        title={"What You Get With Us"}
        description={"We’ve Got You Covered!"}
      />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className="mt-[20px] flex flex-wrap items-center gap-[10px]"
      >
        {whatYouGetData.map((el) => {
          return (
            <div
              key={el.title}
              className="w-full overflow-hidden text-center sm:w-[calc(100%/2-10px)] md:w-[calc(100%/4-10px)]"
            >
              <img src={el.image} alt={el.title} className="mx-auto" />
              <h3 className="my-[10px] text-lg font-bold uppercase text-secondary sm:text-xl">
                {el.title}
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur sit.</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default WhatYouGet;
