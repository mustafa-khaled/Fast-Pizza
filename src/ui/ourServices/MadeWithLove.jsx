import Container from "../Container";
import image from "../../assets/ourServ3.jpg";

function MadeWithLove() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-[20px] md:flex-row">
        <div className="w-full md:w-[50%]" data-aos="fade-right">
          <img src={image} alt="Made With Love" />
        </div>

        <div className="w-full md:w-[50%]" data-aos="fade-right">
          <p className="font-bold uppercase text-primary">Made With Love</p>
          <h2 className="my-[10px] text-2xl font-bold uppercase sm:text-4xl">
            Every Day Specials
          </h2>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
            arcu. adipiscing elit. Ut blandit arcu.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default MadeWithLove;
