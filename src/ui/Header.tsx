import DownloadBtn from "./DownloadBtn";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="bg-[#0F172A] flex items-center justify-between py-4 md:py-3 px-[2rem] sm:px-[3.5rem] md:px-[6rem]">
        <div className="hidden md:block">
          <div className="flex items-center gap-5">
            <HeaderNavigation />
            <DownloadBtn />
          </div>
        </div>
        <div className="md:hidden">
          <HeaderMobileMenu />
        </div>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
