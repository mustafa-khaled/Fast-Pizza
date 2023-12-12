import { BiCartDownload } from "react-icons/bi";

import Container from "../../ui/Container";
import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <Container>
      <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-center gap-[10px] text-center">
        <BiCartDownload className="text-6xl text-gray sm:text-8xl" />

        <p className="font-semibold">
          Your cart is still empty. Start adding some pizzas :)
        </p>

        <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      </div>
    </Container>
  );
}

export default EmptyCart;
