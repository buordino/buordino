import HeaderNavigation from "./HeaderNavigation";
import { FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5 px-6">
      <div>
        <span className="text-[#FF6347] font-bold text-lg">بردینو</span>
      </div>
      <HeaderNavigation />
      <div>
        <FaSun size={25} color="black" />
      </div>
    </header>
  );
};

export default Header;
