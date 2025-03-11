import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const defaultIsDark = JSON.parse(localStorage.getItem("isDark") as string) || false;

  const [isShow, setIsShow] = useState(defaultIsDark);

  console.log(isShow);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isShow));
  }, [isShow]);

  return (
    <div className="cursor-pointer">
      {isShow ? (
        <FaSun size={25} color="black" onClick={() => setIsShow(false)} />
      ) : (
        <FaMoon size={25} color="black" onClick={() => setIsShow(true)} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
