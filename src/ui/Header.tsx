import HeaderNavigation from "./HeaderNavigation";

import Logo from "./Logo";
import HeaderMobileMenu from "./HeaderMobileMenu";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex  items-center justify-between gap-3 py-5  px-6 sticky top-0 dark:bg-gray-900 bg-white  z-[1000] ">
      <HeaderMobileMenu />
      <Logo />
      <HeaderNavigation />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
