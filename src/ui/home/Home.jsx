import { useSelector } from "react-redux";
import CreateUser from "../../features/user/CreateUser";
import Button from "../Button";
import HeroSection from "./HeroSection";

function Home() {
  const { userName } = useSelector((state) => state.user);

  return (
    <div>
      <HeroSection />
    </div>
  );
}

export default Home;
