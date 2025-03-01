interface DownloadButtonPropsType {
  size?: "small" | "large";
  text: string;
  href: string;
}
const DownloadButton = ({ href, text, size }: DownloadButtonPropsType) => {
  return (
    <a
      href={href}
      className={`inline-block transition-all duration-300 hover:shadow-lg hover:scale-105 hover:shadow-[#FF6347] bg-[#FF6347] ${
        size === "small" && "text-[10px]"
      } text-white rounded-2xl py-2 px-4`}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
