interface DownloadButtonPropsType {
  size?: "small" | "large";
  text: string;
  href: string;
}
const DownloadButton = ({ href, text, size }: DownloadButtonPropsType) => {
  if (size === "large")
    return (
      <a
        href={href}
        className="relative inline-block transition-all duration-300 hover:shadow-lg hover:scale-105 bg-[#FF6347] text-white rounded-3xl py-3 px-7 text-[15px] overflow-hidden"
      >
        {text}
        <span className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></span>
      </a>
    );

  return (
    <a
      href={`href`}
      className={`inline-block cursor-pointer transition-all duration-300  hover:shadow-lg hover:scale-105 hover:shadow-[#FF6347] bg-[#FF6347] 
         text-[15px]
       text-white rounded-3xl py-3 px-6 hover:px-8`}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
