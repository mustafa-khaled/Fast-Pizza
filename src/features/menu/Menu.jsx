import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import Container from "../../ui/Container";

import photo from "../../assets/menuImg.jpg";
import MenuSwiper from "./MenuSwiper";

function Menu() {
  const menu = useLoaderData();

  return (
    <div className="mb-[50px]">
      <div
        className="mb-[60px] flex h-[50vh] flex-col items-center justify-center bg-cover px-[10px]"
        style={{ backgroundImage: `url(${photo})`, backgroundPosition: "50%" }}
      >
        <p className="font-bold uppercase text-bgWhite">Choose Your Favorite</p>
        <h2 className="text-3xl font-bold uppercase text-bgWhite sm:text-5xl">
          Our Menu
        </h2>
      </div>

      <Container>
        <ul
          className="mb-[50px] grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] 
        gap-[20px] sm:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
        >
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </Container>
      <MenuSwiper />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
