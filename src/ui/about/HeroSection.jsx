import image from "../../assets/aboutImg.jpg";
import Container from "../Container";

function HeroSection() {
  return (
    <div
      className="h-[60vh] w-[100%] bg-cover"
      style={{ backgroundImage: `url(${image})`, backgroundPosition: "50%" }}
    >
      <Container>
        <div
          className="flex h-[60vh] w-full flex-col items-center justify-center
         text-center sm:items-start sm:text-left md:w-[60%]"
        >
          <p className="text-base  uppercase text-bgWhite sm:text-lg">
            Welcome To The Family
          </p>
          <h1 className="text-3xl font-bold uppercase text-bgWhite sm:text-5xl">
            Meet Don Peppe
          </h1>
          <p className="text-base text-bgWhite sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
