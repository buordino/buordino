import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <span
      role="button"
      className="block w-[7rem] h-[1.5rem]"
      onClick={() => navigate("/")}
    >
      {/* test logo */}
      <img
        src="https://learnova.app/_next/image?url=%2Fimages%2Flogo%2Flogo_type_light.png&w=256&q=75"
        className=" transition-all duration-150 hover:scale-105 cursor-pointer w-full h-full"
        alt="Bordino__Logo"
      />
    </span>
  );
};

export default Logo;
