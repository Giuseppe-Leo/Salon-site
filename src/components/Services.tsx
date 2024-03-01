import cutone from "../assets/images/cut1.jpg";
import color from "../assets/images/color.jpg";
import piega from "../assets/images/piega.jpg";
import style from "../assets/images/Style1.jpg";
import stileone from "../assets/images/style2.jpg";
import colorone from "../assets/images/color1.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="bg-white" id="services">
        <div className="relative mt-0">
          <h1 className="flex justify-center text-4xl font-bold pt-4 xl:text-7xl">
            Cut. Style. Color
          </h1>
          <h4 className="flex justify-center mt-2 text-xl mx-20 lg:text-2xl">
            Elevate Your Style with Our Professional Hair Services
          </h4>
          <Link
            className="flex mx-[120px] mt-4  xl:mx-[520px] xs:mx-[110px] sm:mx-[200px] md:mx-[320px] lg:mx-[400px] bg-black text-white p-2 justify-center text-lg  border-2"
            to="/book"
          >
            Book Here
          </Link>
        </div>
        <div className="relative grid grid-cols-3 gap-2 py-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 w-max-auto ">
          <div
            className="relative flex flex-col items-center  rounded border 
                       border-transparent bg-black p-1 text-center shadow-lg transition 
                       "
          >
            <img
              src={cutone}
              alt="haircut"
              className=" lg:h-[490px] h-[144px] sm:h-[289px] md:h-[312px]"
            />
          </div>
          <div
            className="relative flex flex-col items-center  rounded border 
                       border-transparent bg-black p-1 text-center shadow-lg transition"
          >
            <img
              src={color}
              alt="color"
              className="h-[144px] sm:h-[289px] lg:h-[490px] md:h-[312px]"
            />
          </div>
          <div
            className="relative flex flex-col items-center  rounded border 
                       border-transparent bg-black p-1 text-center shadow-lg transition"
          >
            <img
              src={piega}
              alt="piega"
              className="h-[144px] sm:h-[289px] lg:h-[490px] md:h-[312px]"
            />
          </div>
          <div
            className="relative flex flex-col items-center  rounded border 
                       border-transparent bg-black p-1 text-center shadow-lg transition"
          >
            <img
              src={style}
              alt="piega"
              className=" lg:h-[490px] sm:h-[289px] h-[144px] md:h-[312px]"
            />
          </div>
          <div
            className="relative flex flex-col items-center  rounded border 
                       border-transparent bg-black p-1 text-center shadow-lg transition "
          >
            <img
              src={stileone}
              alt="piega"
              className=" lg:h-[490px] h-[144px] sm:h-[289px] md:h-[312px]"
            />
          </div>
          <div
            className="relative flex flex-col items-center  rounded border 
                       border-transparent bg-black p-1 text-center shadow-lg transition"
          >
            <img
              src={colorone}
              alt="piega"
              className="lg:h-[490px] sm:h-[289px] h-[144px] md:h-[312px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
