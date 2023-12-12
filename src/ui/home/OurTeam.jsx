import mainImage from "../../assets/homeGabg.jpg";
import Team from "../Team";

function OurTeam() {
  return (
    <div>
      <div
        className="h-[80vh] bg-cover p-[30px] sm:p-[60px]"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundPosition: "50%",
        }}
      >
        <h2 className="text-4xl font-bold uppercase text-bgWhite sm:w-[60%] md:text-7xl">
          Go Ahead And Build Your Own Pizza We Won’t Judge!
        </h2>
      </div>

      <Team />
    </div>
  );
}

export default OurTeam;
