import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";

function SearchOrder({ showSearchBar, closeSearchBar }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
    closeSearchBar();
  }

  return (
    <>
      <div
        className={`fixed left-0 top-[70px] h-[calc(100vh-70px)] ${
          showSearchBar && "w-full"
        }  bg-[#00000080]`}
        onClick={closeSearchBar}
      ></div>

      <form
        onSubmit={handleSubmit}
        className={`header-links fixed ${
          showSearchBar ? "right-[20px]" : "right-[-100%]"
        } top-[80px] z-50 flex w-[calc(100%-40px)] items-center 
             justify-center gap-[30px] bg-bgWhite p-[20px] transition-all 
        `}
      >
        <input
          placeholder="Search order #"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[100%] rounded-full bg-lightGray px-4 py-2 text-sm transition-all duration-300 
        placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50
         sm:w-64 sm:focus:w-72"
        />

        <MdClose
          className="cursor-pointer text-2xl sm:text-3xl"
          onClick={closeSearchBar}
        />
      </form>
    </>
  );
}

export default SearchOrder;
