import { NavLink } from "react-router-dom";

const headerLinks = [
  { title: "Home", to: "/" },
  { title: "Menu", to: "/menu" },
  { title: "About", to: "/about" },
];

function LinksSmallScreen({ showList }) {
  return (
    <div
      className={`header-links fixed ${
        showList ? "right-[20px]" : "right-[-100%]"
      } bg-bgWhite top-[70px] z-50 flex h-[300px] w-[calc(100%-40px)]
             flex-col items-center justify-center gap-[30px] transition-all sm:hidden
        `}
    >
      {headerLinks.map((el) => (
        <NavLink key={el.title} to={el.to} className={"font-bold uppercase"}>
          {el.title}
        </NavLink>
      ))}
    </div>
  );
}

export default LinksSmallScreen;
