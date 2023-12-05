import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500  p-4  uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
