import { useDispatch } from "react-redux";
import { increaseItemQuantity, decreaseItemQuantity } from "./CartSlice";
import Button from "../../ui/Button";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="mx-auto flex items-center gap-2 md:gap-5">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>

      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type={"round"}
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
