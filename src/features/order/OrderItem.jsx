import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="text-stone-800">
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold text-stone-800">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xs capitalize italic sm:text-sm">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
