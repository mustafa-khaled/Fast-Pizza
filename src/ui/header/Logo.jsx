import { Link } from "react-router-dom";
import logo from "/logo.png";

function Logo() {
  return (
    <Link to="/" className="tracking-widest">
      <img src={logo} alt="logo" className="w-[100px]" />
    </Link>
  );
}

export default Logo;
