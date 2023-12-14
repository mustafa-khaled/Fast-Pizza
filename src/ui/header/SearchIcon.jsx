import { IoMdSearch } from "react-icons/io";

function SearchIcon({ toggleSearchBar }) {
  return (
    <div onClick={toggleSearchBar}>
      <IoMdSearch className="cursor-pointer text-2xl sm:text-3xl" />
    </div>
  );
}

export default SearchIcon;
