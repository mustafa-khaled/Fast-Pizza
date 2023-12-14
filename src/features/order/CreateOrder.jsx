import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/CartSlice";
import { fetchAddress, getUser } from "../user/userSlice";
import { formatCurrency } from "../../utils/helpers";

import store from "../../store";
import EmptyCart from "../cart/EmptyCart";
import Button from "../../ui/Button";
import Container from "../../ui/Container";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    userName,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  const handleGetPosition = function (e) {
    e.preventDefault();
    dispatch(fetchAddress());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <Container>
      <div className="mt-[100px] min-h-[calc(100vh-70px)]">
        <h2 className="mb-8 text-xl font-semibold">
          Ready to order? Let's go!
        </h2>

        <Form method="POST">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">First Name</label>
            <input
              className="input grow"
              type="text"
              name="customer"
              required
              defaultValue={userName}
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Phone number</label>
            <div className="grow">
              <input
                className="input w-full"
                type="tel"
                name="phone"
                required
              />
              {formErrors?.phone && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {formErrors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Address</label>
            <div className="grow">
              <input
                className="input w-full"
                type="text"
                name="address"
                required
                defaultValue={address}
              />
              {addressStatus === "error" && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {errorAddress}
                </p>
              )}
            </div>
            {!position.latitude && !position.longitude && (
              <span className="absolute right-[3px] top-[35px] z-40 sm:top-[3px] md:right-[5px] md:top-[5px]">
                <Button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={handleGetPosition}
                >
                  Get position
                </Button>
              </span>
            )}
          </div>

          <div className="mb-12 flex items-center gap-5">
            <input
              className="h-6 w-6 accent-primary focus:outline-none focus:ring focus:ring-primary
               focus:ring-offset-2"
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label
              htmlFor="priority"
              className="ms:text-base text-sm font-medium"
            >
              Want to yo give your order priority?
            </label>
          </div>

          <div>
            <input type="hidden" name="cart" value={JSON.stringify(cart)} />
            <input
              type="hidden"
              name="position"
              value={
                position.latitude && position.longitude
                  ? `${position.latitude}, ${position.longitude}`
                  : ""
              }
            />

            <Button disabled={isSubmitting || isLoadingAddress} type="primary">
              {isSubmitting
                ? "Placing order...."
                : `Order now for ${formatCurrency(totalPrice)}`}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect

  const newOrder = await createOrder(order);
  // selecting the store and dispatch and action => Do NOT overuse
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
