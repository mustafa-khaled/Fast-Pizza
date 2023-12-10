import { MdOutlineList, MdClose } from "react-icons/md";

function ToggleList({ showList, toggleList }) {
  return (
    <div className="sm:hidden" onClick={toggleList}>
      {showList ? (
        <MdClose className="cursor-pointer text-3xl" />
      ) : (
        <MdOutlineList className="cursor-pointer text-3xl" />
      )}
    </div>
  );
}

export default ToggleList;
