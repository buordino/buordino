import HeaderNavigation from "./HeaderNavigation";
import { FaSun } from "react-icons/fa";
import Logo from "./Logo";
import HeaderMobileMenu from "./HeaderMobileMenu";

const Header = () => {
  return (
    <header className="flex  items-center justify-between gap-3 py-5 px-6 sticky top-0 bg-white z-[1000] ">
      <HeaderMobileMenu />
      <Logo />
      <HeaderNavigation />
      <div className="cursor-pointer">
        <FaSun size={25} color="black" />
      </div>
    </header>
  );
};

export default Header;
