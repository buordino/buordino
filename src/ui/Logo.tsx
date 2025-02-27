import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <span
      onClick={() => navigate("/")}
      role="button"
      className="flex justify-center items-center pb-[.3rem]"
    >
      <img
        src="https://learnova.app/_next/image?url=%2Fimages%2Flogo%2Flogo_type_light.png&w=256&q=75"
        className=" transition-all duration-150 hover:scale-105 cursor-pointer w-[108px] h-[28px]"
        alt="Bordino__Logo"
      />
    </span>
  );
};

export default Logo;
