import image from "../../assets/Specials.jpg";
import logo from "../../assets/SpecialsLogo.png";
import Container from "../Container";

const specialsData = ["$10", "$20", "$30"];

function Specials() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row">
        <div
          data-aos="fade-right"
          className="flex w-full items-center justify-center bg-cover p-[20px] md:w-[50%]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <img src={logo} alt="Specials logo" className="w-[400px]" />
        </div>

        <div
          data-aos="fade-left"
          className=" w-full pt-[20px] sm:pl-[20px] md:w-[50%]"
        >
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
