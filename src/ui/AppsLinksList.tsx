import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const AppsLinksList = () => {
  return (
    <ul className="flex items-center justify-center gap-8">
      <li className="transition-all duration-300 hover:text-[#FF6347]">
        <a href="#">
          <FaInstagram size={35} />
        </a>
      </li>
      <li className="transition-all duration-300 hover:text-[#FF6347]">
        <a href="#">
          <FaTelegram size={35} />
        </a>
      </li>
      <li className="transition-all duration-300 hover:text-[#FF6347]">
        <a href="#">
          <FaTwitter size={35} />
        </a>
      </li>
    </ul>
  );
};

export default AppsLinksList;
