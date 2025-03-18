import DownloadButton from "./DownloadButton";

const MainTitle = () => {
  return (
    <section>
      <div className="bg-stone-100 dark:bg-black text-center space-y-[2rem] py-[16rem] px-4 bg-[url(/images/day-bg.jpg)] bg-no-repeat bg-center bg-cover">
        <h1 className="text-[#FF6347] font-bold text-2xl sm:text-4xl ">
          با بردینو برنده هر چیزی شو
        </h1>
        <p className="text-sm sm:text-xl dark:text-white">
          به هزاران کاربر بپیوند و با کوییز و قرعه‌کشی جوایز روزانه ببر.
        </p>
        <DownloadButton text="دانلود اپلیکیشن" size="small" href="#" />
      </div>
    </section>
  );
}

export default MainTitle