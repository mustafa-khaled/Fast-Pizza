import { Outlet, useNavigation } from "react-router-dom";
import Header from "./header/Header";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-stone-100 text-stone-700">
      {isLoading && <Loader />}

      <Header />

      <main className="mt-[70px]">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
