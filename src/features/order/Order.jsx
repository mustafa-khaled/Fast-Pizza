// Test ID: IIDSAT ZP5P24

import { useEffect } from "react";
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";

import Container from "../../ui/Container";
import OrderItem from "./OrderItem";
import UpdateOrder from "./UpdateOrder";

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <Container>
      <div className="mt-[100px] min-h-[100vh]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Order #{id} status</h2>

          <div className=" flex items-center gap-[10px]">
            {priority && (
              <span className="rounded-full bg-red-500  px-1 py-1 text-xs font-semibold uppercase tracking-wide text-red-50 sm:px-3 sm:text-sm">
                Priority
              </span>
            )}
            <span className="rounded-full bg-green-500 px-1 py-1 text-xs font-semibold uppercase tracking-wide text-green-50 sm:px-3 sm:text-sm">
              {status} order
            </span>
          </div>
        </div>

        <div className="my-[20px] flex flex-wrap items-center justify-between gap-2 bg-lightGray px-6 py-5">
          <p className="font-medium">
            {deliveryIn >= 0
              ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
              : "Order should have arrived"}
          </p>
          <p className="text-xs">
            (Estimated delivery: {formatDate(estimatedDelivery)})
          </p>
        </div>

        <ul className="mb-[20px] divide-y divide-lightGray border-b border-lightGray">
          {cart.map((item) => (
            <OrderItem
              item={item}
              key={item.pizzaId}
              isLoadingIngredients={fetcher.state === "loading"}
              ingredients={
                fetcher?.data?.find((el) => el.id === item.pizzaId)
                  ?.ingredients ?? []
              }
            />
          ))}
        </ul>

        <div className="mb-[20px] space-y-2 bg-lightGray px-6 py-5">
          <p className="text-sm font-medium ">
            Price pizza: {formatCurrency(orderPrice)}
          </p>
          {priority && (
            <p className="text-sm font-medium">
              Price priority: {formatCurrency(priorityPrice)}
            </p>
          )}
          <p className="font-bold">
            To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
          </p>
        </div>
        {!priority && <UpdateOrder order={order} />}
      </div>
    </Container>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
