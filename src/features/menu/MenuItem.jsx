import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/CartSlice";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import Button from "../../ui/Button";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = function () {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <div
      className="relative rounded-xl"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <img
        src={imageUrl}
        alt={name}
        className={` ${
          soldOut ? "opacity-70 grayscale" : ""
        } h-[200px] w-full rounded-t-xl object-cover`}
      />
      <div className="flex h-[170px] flex-col p-[10px] text-center">
        <h4 className="text-lg font-medium uppercase sm:text-xl">{name}</h4>
        <p className="my-[5px] text-xs capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mb-[10px] mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="mx-auto text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="mx-auto text-sm font-medium uppercase">Sold out</p>
          )}
        </div>

        {isInCart && (
          <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
        )}

        {!soldOut && !isInCart && (
          <Button type="small" onClick={handleAddToCart}>
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
