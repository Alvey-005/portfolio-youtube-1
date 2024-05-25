import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import MegnaticEffect from "./MegnaticEffect";
type SocialProps = {
  containerStyles: string;
  iconStyles: string;
};


const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

function Social({ containerStyles, iconStyles }:SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <MegnaticEffect key={index} >
          <Link href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
          </MegnaticEffect>
        );
      })}
    </div>
  );
}

export default Social;
