import image from "../../assets/Specials.jpg";
import logo from "../../assets/SpecialsLogo.png";
import Container from "../Container";

const specialsData = ["$10", "$20", "$30"];

function Specials() {
  return (
    <Container>
      <div className="flex flex-col gap-[20px] md:flex-row">
        <div
          className="flex h-[400px] w-full items-center justify-center bg-cover md:w-1/2"
          style={{ backgroundImage: `url(${image})` }}
          data-aos="fade-right"
        >
          <img src={logo} alt="Specials logo" className="max-w-[200px]" />
        </div>

        <div className="w-full md:w-1/2" data-aos="fade-right">
          <h2 className="text-2xl font-bold uppercase sm:text-3xl">
            Specials:
          </h2>
          <p className="my-[10px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ut.
          </p>

          <div>
            {specialsData.map((el) => {
              return (
                <div key={el}>
                  <h3 className="text-xl font-bold uppercase sm:text-2xl">
                    <span className="mr-[20px] text-primary">{el}</span>
                    Combo Piccolo
                  </h3>
                  <p className="my-[5px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ut aliquam dui.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Specials;
