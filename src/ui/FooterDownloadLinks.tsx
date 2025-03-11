import DownloadButton from "./DownloadButton";

const FooterDownloadLinks = () => {
  return (
    <div className="flex flex-col gap-10 items-center mb-[8.5rem] " id="download">
      <h2 className="text-[#FF6347] font-bold text-2xl sm:text-4xl text-center">
        دانلود اپلیکیشن
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <DownloadButton href="#" text="دانلود برای اندروید" size="large" />
        <DownloadButton href="#" text="دانلود برای iOS " size="large" />
      </div>
    </div>
  );
}

export default FooterDownloadLinks