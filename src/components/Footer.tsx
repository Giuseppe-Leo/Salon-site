import logo from "../assets/images/Logo_giulia1.png";

import { EmailOutlined, PhoneAndroidRounded } from "@mui/icons-material";

const Footer = () => {
  return (
    <div
      className=" bg-black flex-col md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3 font-lighter "
      id="footer"
    >
      <div className="mt-2 flex justify-center">
        <img
          src={logo}
          alt="foot logo"
          width={100}
          className="pt-8 xl:pt-4 lg:pt-4"
        />
        <p className="text-white mt-14 ml-2 ">
          All rights reserved <br />
          P.Iva 2321545665
        </p>
      </div>
      <div className="mt-8 flex-col">
        <h2 className="text-white flex justify-center text-xl">Contacts:</h2>
        <div className="flex mt-2 justify-center">
          <PhoneAndroidRounded className="text-white mr-2" />
          <h4 className="text-white">1234567890</h4>
        </div>
        <div className="flex justify-center mt-2">
          <EmailOutlined className="text-white mr-2" />
          <h4 className="text-white">HairStyle@Giulia.com</h4>
        </div>
      </div>
      <div className="text-white mt-8 flex-col">
        <h1 className="flex justify-center">HairStyle Experience</h1>
        <h3 className="flex justify-center">Via Duca D\Aosta 8000</h3>
        <h4 className="flex justify-center">San Michele Salentino</h4>
        <h5 className="flex justify-center">72018 BR</h5>
      </div>
      <div>
        <p className="text-white font-extralight text-sm mt-4">
          Made with Love.
        </p>
      </div>
    </div>
  );
};

export default Footer;
