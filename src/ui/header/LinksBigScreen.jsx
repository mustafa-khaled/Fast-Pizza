import { NavLink } from "react-router-dom";

const headerLinks = [
  { title: "Home", to: "/" },
  { title: "Menu", to: "/menu" },
  { title: "About", to: "/about" },
];

function LinksBigScreen() {
  return (
    <div className="header-links hidden items-center gap-[30px] sm:flex">
      {headerLinks.map((el) => (
        <NavLink key={el.title} to={el.to} className={"font-bold uppercase"}>
          {el.title}
        </NavLink>
      ))}
    </div>
  );
}

export default LinksBigScreen;
