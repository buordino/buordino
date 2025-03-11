import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const defaultIsDark: boolean =
    JSON.parse(localStorage.getItem("isDark") as string) || false;

  const [isShow, setIsShow] = useState(defaultIsDark);

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isShow));

    if (isShow) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isShow]);

  return (
    <div className="cursor-pointer">
      {isShow ? (
        <FaSun size={25} color="white" onClick={() => setIsShow(false)} />
      ) : (
        <FaMoon size={25} color="black" onClick={() => setIsShow(true)} />
      )}
    </div>
  );
};

export default ThemeSwitcher;
