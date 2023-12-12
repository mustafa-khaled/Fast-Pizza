import Container from "../Container";

import photo1 from "../../assets/ourStory1.jpg";

const ourStoryData = [
  {
    title: "Our Family Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Our Journey",
    description:
      "Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },

  {
    title: "Experience And Food",
    description:
      "Lorem ipsum dolor sit amet,colur consectetur omni adipisicing elit, sed do eiusmod tempor sol incididunt ut labore et dolore magna.",
  },
];

function OutStory() {
  return (
    <Container>
      <div className="flex flex-col gap-[10px] md:flex-row">
        <div className="w-full md:w-[50%]">
          <div>
            <p className="font-bold uppercase text-primary">Our Story</p>
            <h2 className="my-[10px] text-3xl font-bold uppercase md:text-5xl">
              The Story About Peppe
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>

          <div className="mt-[30px] ">
            {ourStoryData.map((el) => {
              return (
                <div key={el.title} className="mb-[10px]">
                  <h3 className="text-secondary text-xl font-bold uppercase">
                    {el.title}
                  </h3>
                  <p className="text-sm">{el.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Photo */}
        <div
          className="h-[500px] w-full bg-cover md:h-auto md:w-[50%]"
          style={{
            backgroundImage: `url(${photo1})`,
            backgroundPosition: "50%",
          }}
        ></div>
      </div>
    </Container>
  );
}

export default OutStory;
