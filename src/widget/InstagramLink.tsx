import { useEffect, useState } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const isMobileDevice = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    userAgent.includes("android") ||
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod") ||
    userAgent.includes("blackberry") ||
    userAgent.includes("iemobile") ||
    userAgent.includes("opera mini")
  );
};

const InstagramLink = () => {
  const [instagramUrl, setInstagramUrl] = useState("");

  useEffect(() => {
    const url = isMobileDevice()
      ? "https://www.instagram.com/giuliahairexperience_23/"
      : "https://www.instagram.com/giuliahairexperience_23/";

    setInstagramUrl(url);
  }, []);

  return (
    <a
      href={instagramUrl}
      target={isMobileDevice() ? "_self" : "blank"}
      rel="noopener noreferrer"
    >
      <InstagramIcon className="mr-6 cursor-pointer" />
    </a>
  );
};

export default InstagramLink;
