import InstagramLink from "../widget/InstagramLink";
import Logo from "../assets/images/Logo_giulia1.png";
import Logs from "../assets/images/Logo_giulia2.png";
import "../assets/styles/base.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" top-0 z-50 grid grid-cols-3 px-5 py-2 bg-black h-[75px] xs:pr-20">
      <div className="relative flex items-center w-80  ">
        <a href="/" style={{ display: "inline-block" }}>
          <img
            src={Logs}
            alt="Logo"
            className="cursor-pointer hidden md:block"
          />
          <img
            src={Logo}
            alt="Logo"
            style={{ objectFit: "contain", width: "50px" }}
            className="cursor-pointer md:hidden "
          />
        </a>
      </div>
      <div className="relative flex items-center  justify-center ml-2 ">
        <ul className="text-lg cursor-pointer flex xs:hidden lg:flex  text-white">
          <li className="pl-auto">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-20">
            <Link to="#services">Servizi</Link>
          </li>
          <li className="pl-20">
            <Link to="/">Contatti</Link>
          </li>
        </ul>
      </div>
      <div className="relative flex items-center ml-auto mr-2 text-white">
        <InstagramLink />

        <Link to="/book" className="ml-4">
          Prenota
        </Link>
      </div>
    </header>
  );
};

export default Header;
