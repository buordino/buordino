import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterContact = () => {
  return (
    <div id="contact">
      <h2 className="text-[#FF6347] font-bold text-2xl sm:text-4xl text-center mb-[3.5rem]">
        تماس
      </h2>
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
    </div>
  );
};

export default FooterContact;
