import { Link } from "react-router-dom";
import { MdOutlineDeliveryDining } from "react-icons/md";

import { useSelector } from "react-redux";
import { getCart } from "../../features/cart/CartSlice";

function CartIcon() {
  const cartItems = useSelector(getCart).length;

  return (
    <Link to={"/cart"} className="relative">
      <MdOutlineDeliveryDining className="cursor-pointer text-2xl sm:text-3xl" />

      <span
        className="absolute left-[-3px] top-[-3px] flex h-[15px] w-[15px] items-center justify-center
       rounded-full bg-primary text-xs text-bgWhite"
      >
        {cartItems}
      </span>
    </Link>
  );
}

export default CartIcon;
