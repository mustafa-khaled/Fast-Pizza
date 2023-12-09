import { Link, NavLink } from "react-router-dom";
import {
  MdDeliveryDining,
  MdOutlineList,
  MdClose,
  MdOutlineSearch,
} from "react-icons/md";

import logo from "/logo.png";
import Container from "./Container";
import { useState } from "react";

const headerLinks = [
  { title: "Home", to: "/" },
  { title: "Menu", to: "/menu" },
  { title: "About", to: "/about" },
];

function Header() {
  const [showList, setShowList] = useState(false);

  function toggleList() {
    setShowList((prev) => !prev);
  }

  return (
    <header className="flex h-[70px] items-center justify-center">
      <Container>
        <div className="flex items-center justify-between gap-[20px] bg-red-400">
          {/* Logo */}
          <Link to="/" className="tracking-widest">
            <img src={logo} alt="logo" className="w-[100px]" />
          </Link>

          {/* Links */}
          <div
            className={`header-links fixed ${
              showList ? "right-[20px]" : "right-[-300px]"
            } top-[70px] flex h-[300px] w-[250px] 
            flex-col items-center justify-center gap-[30px] bg-green-400 transition-all sm:static sm:h-auto
             sm:w-full  sm:flex-row`}
          >
            {headerLinks.map((el) => (
              <NavLink
                key={el.title}
                to={el.to}
                className={"font-bold uppercase"}
              >
                {el.title}
              </NavLink>
            ))}

            <div className="flex items-center gap-[10px] sm:ml-auto">
              <Link to={"/cart"}>
                <MdDeliveryDining className="cursor-pointer text-3xl" />
              </Link>
            </div>
          </div>

          {/* List Toggle */}

          <div className="sm:hidden" onClick={toggleList}>
            {showList ? (
              <MdClose className="cursor-pointer text-3xl" />
            ) : (
              <MdOutlineList className="cursor-pointer text-3xl" />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
