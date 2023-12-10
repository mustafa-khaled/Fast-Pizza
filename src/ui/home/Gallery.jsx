import image1 from "../../assets/underSlide1.jpg";
import image2 from "../../assets/underSlide2.jpg";
import image3 from "../../assets/underSlide3.jpg";
import image4 from "../../assets/underSlide4.jpg";

const images = [image1, image2, image3, image4];

function Gallery() {
  return (
    <div className="mt-[10px] flex flex-wrap items-center gap-[10px]">
      {images.map((img) => {
        return (
          <img
            key={img}
            src={img}
            alt="Gallery Img"
            className="h-[300px] w-full object-cover sm:w-[calc(100%/2-10px)] md:w-[calc(100%/4-10px)]"
            style={{ backgroundPosition: "50%" }}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
