import { Outlet, useNavigation } from "react-router-dom";
import Header from "./header/Header";
import Loader from "./Loader";
import Footer from "./Footer";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-stone-100 text-stone-800">
      {isLoading && <Loader />}

      <Header />

      <main className="mt-[70px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
