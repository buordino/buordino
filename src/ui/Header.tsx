import HeaderNavigation from "./HeaderNavigation";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Logo from "./Logo";
import HeaderMobileMenu from "./HeaderMobileMenu";
import { useGlobalContext } from "../context/useContext";
import { ContextType } from "../context/ContextProvider";

const Header = () => {
  const { isShow, setIsShow } = useGlobalContext() as ContextType;
  return (
    <header className="flex  items-center justify-between gap-3 py-5 px-6 sticky top-0 bg-white z-[1000] ">
      <HeaderMobileMenu />
      <Logo />
      <HeaderNavigation />
      <div className="cursor-pointer">
        {isShow ? (
          <FaSun size={25} color="black" onClick={() => setIsShow(false)} />
        ) : (
          <FaMoon size={25} color="black" onClick={() => setIsShow(true)} />
        )}
      </div>
    </header>
  );
};

export default Header;
