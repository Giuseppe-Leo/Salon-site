import banner from "../assets/images/BannerImg.jpg";

const Banner = () => {
  return (
    <div className="relative h-[550px] xs:h-[300px] md:h-[400px] lg:h-[550px] shadow-lg bg-black ">
      <img
        src={banner}
        alt="Banner"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default Banner;
