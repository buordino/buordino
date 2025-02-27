import { useNavigate } from "react-router";

interface DownloadBtnPropsType {
  size?: string;
}

const DownloadBtn = ({ size }: DownloadBtnPropsType) => {
  const navigate = useNavigate();
  if(size==='large') return (
    <button
      onClick={() => navigate("/download")}
      className="text-black bg-[#FACC15] rounded-md pb-[.6rem] pt-[.36rem] w-full cursor-pointer transition-all duration-150 hover:opacity-90"
    >
      دانلود
    </button>
  );
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
