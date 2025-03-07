import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import HeaderMenuBox from "./HeaderMenuBox";

const HeaderMobileMenu = () => {
  const [isShow, setIsShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    if (isShow) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [isShow]);
  const onOpen = () => {
    setIsShow(true);
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsShow(false);
    }, 500);
  };
  return (
    <div className="sm:hidden">
      <IoMdMenu size={28} className="cursor-pointer" onClick={onOpen} />
      {isShow && <HeaderMenuBox isVisible={isVisible} onClose={onClose} />}
    </div>
  );
};

export default HeaderMobileMenu;
