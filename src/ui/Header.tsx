import DownloadBtn from "./DownloadBtn";
import HeaderNavigation from "./HeaderNavigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <header>
      <div className="bg-[#0F172A] flex items-center justify-between py-6 px-[6rem]">
        <div className="flex items-center gap-5">
        <HeaderNavigation />
        <DownloadBtn />
        </div>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
