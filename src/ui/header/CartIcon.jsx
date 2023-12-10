import { Link } from "react-router-dom";

import { MdDeliveryDining } from "react-icons/md";

function CartIcon() {
  return (
    <div>
      <Link to={"/cart"}>
        <MdDeliveryDining className="cursor-pointer text-3xl" />
      </Link>
    </div>
  );
}

export default CartIcon;
