import { useState } from "react";

import Container from "../Container";
import Logo from "./Logo";
import LinksBigScreen from "./LinksBigScreen";
import CartIcon from "./CartIcon";
import ToggleList from "./ToggleList";
import LinksSmallScreen from "./LinksSmallScreen";
import SearchIcon from "./SearchIcon";
import SearchOrder from "../../features/order/SearchOrder";

function Header() {
  const [showList, setShowList] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  function toggleList() {
    setShowList((prev) => !prev);
    setShowSearchBar(false); // Close search bar when toggling list
  }

  function closeList() {
    setShowList(false);
  }

  function toggleSearchBar() {
    setShowSearchBar((prev) => !prev);
    setShowList(false); // Close list when toggling search bar
  }

  function closeSearchBar() {
    setShowSearchBar(false);
  }

  return (
    <header
      className="fixed top-0 z-50 flex h-[70px] w-full items-center justify-center
     bg-bgWhite shadow-md"
    >
      <Container>
        <div className="flex items-center justify-between gap-[20px] ">
          {/* Logo */}
          <Logo />

          {/* Links */}
          <LinksBigScreen />
          <LinksSmallScreen showList={showList} closeList={closeList} />

          <SearchOrder
            showSearchBar={showSearchBar}
            closeSearchBar={closeSearchBar}
          />

          {/* List Toggle & Cart Icon*/}
          <div className="ml-auto flex items-center gap-[10px]">
            <CartIcon />
            <SearchIcon toggleSearchBar={toggleSearchBar} />
            <ToggleList showList={showList} toggleList={toggleList} />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
