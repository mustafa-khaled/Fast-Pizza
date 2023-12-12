import { Link } from "react-router-dom";
import { MdDeliveryDining } from "react-icons/md";
import { useSelector } from "react-redux";
import { getCart } from "../../features/cart/CartSlice";

function CartIcon() {
  const cartItems = useSelector(getCart).length;

  return (
    <div className="relative">
      <Link to={"/cart"}>
        <MdDeliveryDining className="cursor-pointer text-3xl" />
      </Link>
      <span
        className="absolute left-[-3px] top-[-3px] flex h-[15px] w-[15px] items-center justify-center
       rounded-full bg-primary text-xs text-bgWhite"
      >
        {cartItems}
      </span>
    </div>
  );
}

export default CartIcon;
