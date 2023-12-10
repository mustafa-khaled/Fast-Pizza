import { useState } from "react";

import Container from "../Container";
import Logo from "./Logo";
import LinksBigScreen from "./LinksBigScreen";
import CartIcon from "./CartIcon";
import ToggleList from "./ToggleList";
import LinksSmallScreen from "./LinksSmallScreen";

function Header() {
  const [showList, setShowList] = useState(false);

  function toggleList() {
    setShowList((prev) => !prev);
  }

  return (
    <header className="fixed top-0 z-50 flex h-[70px] w-full items-center justify-center bg-white">
      <Container>
        <div className="flex items-center justify-between gap-[20px] ">
          {/* Logo */}
          <Logo />

          {/* Links */}
          <LinksBigScreen />
          <LinksSmallScreen showList={showList} />

          {/* List Toggle & Cart Icon*/}
          <div className="ml-auto flex items-center gap-[10px]">
            <CartIcon />
            <ToggleList showList={showList} toggleList={toggleList} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;