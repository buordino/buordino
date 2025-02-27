import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import HeaderMenuMobileBox from "./HeaderMenuMobileBox";

const HeaderMobileMenu = () => {
  const [isShow, setIsShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const onOpen = () => {
    setIsShow(true);
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsShow(false);
    }, 200);
  };
  return (
    <div>
      <span className="cursor-pointer" role="button" onClick={() => onOpen()}>
        <RiMenuFill color="white" size={25} />
      </span>
      {isShow && (
        <HeaderMenuMobileBox isVisible={isVisible} onClose={onClose} />
      )}
    </div>
  );
};

export default HeaderMobileMenu;
