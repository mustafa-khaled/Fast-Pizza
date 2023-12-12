import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import MenuItem from "../../features/menu/MenuItem";
import Container from "../Container";

function PizzaSwiper() {
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  if (fetcher.state === "loading")
    return <p className="text-center text-2xl uppercase">Loading...</p>;

  return (
    <Container>
      <div>
        <div className="mb-[30px] text-center font-bold">
          <p className="text-sm uppercase text-primary">Choose Your Flavor</p>
          <h2 className="my-[5px] text-xl font-bold uppercase sm:text-3xl">
            The Best Pizza Menu In Town
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
            arcu in pretium molestie. Interdum et malesuada fames ac.
          </p>
        </div>

        <Swiper
          // className="w-full"
          className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },

            900: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {fetcher?.data?.length > 0 &&
            fetcher?.data?.slice(0, 7)?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <MenuItem pizza={item} key={item.id} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </Container>
  );
}

export default PizzaSwiper;
