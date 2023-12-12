import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./CartSlice";
import { getUser } from "../user/userSlice";
import EmptyCart from "./EmptyCart";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import Container from "../../ui/Container";

function Cart() {
  const dispatch = useDispatch();
  const userName = useSelector(getUser);
  const cart = useSelector(getCart);

  const handleClearCart = function () {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <Container>
      <div className="min-h-[calc(100vh-70px)] pb-[50px] pt-[20px]">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>

        <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>

        <ul className="mt-3 divide-y divide-stone-200 border-b border-gray">
          {cart?.map((item) => (
            <CartItem item={item} key={item.pizzaId} />
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>

          <Button type="secondary" onClick={handleClearCart}>
            Clear cart
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
