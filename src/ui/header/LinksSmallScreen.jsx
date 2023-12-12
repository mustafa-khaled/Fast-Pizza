import { NavLink } from "react-router-dom";

const headerLinks = [
  { title: "Home", to: "/" },
  { title: "Menu", to: "/menu" },
  { title: "About", to: "/about" },
];

function LinksSmallScreen({ showList, closeList }) {
  return (
    <>
      <div
        className={`fixed left-0 top-[70px] h-[calc(100vh-70px)] ${
          showList && "w-full"
        }  bg-[#00000080]`}
        onClick={closeList}
      ></div>
      <div
        className={`header-links fixed ${
          showList ? "right-[20px]" : "right-[-100%]"
        } top-[80px] z-50 flex h-[250px] w-[calc(100%-40px)] flex-col
             items-center justify-center gap-[30px] bg-bgWhite transition-all sm:hidden
        `}
      >
        {headerLinks.map((el) => (
          <NavLink
            key={el.title}
            to={el.to}
            onClick={closeList}
            className={"font-bold uppercase"}
          >
            {el.title}
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default LinksSmallScreen;
