import { useNavigate } from "react-router";

const DownloadBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/download")}
      className="text-black bg-[#FACC15] rounded-md pb-[.6rem] pt-[.36rem] px-4 cursor-pointer transition-all duration-150 hover:opacity-90"
    >
      دانلود
    </button>
  );
};

export default DownloadBtn;
