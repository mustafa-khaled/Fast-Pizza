import Container from "../Container";

import img1 from "../../assets/ourServ2.jpg";
import img2 from "../../assets/inst9.jpg";
import img3 from "../../assets/inst2.jpg";

const categoriesData = [
  { title: "Order Online", image: img1 },
  { title: "Pizzeria Reservations", image: img2 },
  { title: "We Deliver At Your Door", image: img3 },
];

function Categories() {
  return (
    <Container>
      <div className="mt-[10px] flex flex-wrap items-center gap-[20px]">
        {categoriesData.map((el) => {
          return (
            <div
              key={el.title}
              className="w-full sm:w-[calc(100%/2-20px)]  md:w-[calc(100%/3-20px)]"
            >
              <img
                src={el.image}
                alt="category"
                className="h-[300px] w-full object-cover"
              />
              <h3 className="my-[10px] text-xl font-bold uppercase sm:text-2xl">
                {el.title}
              </h3>
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur dolor adipisicing elit,
                sed do eiusmod tempor eut incididunt aliqua.
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Categories;
