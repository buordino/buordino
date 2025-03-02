import MainPhoneImage from "./MainPhoneImage";

const MainAppShowCase = () => {
  return (
    <section id="app-showcase">
      <div className="bg-white py-20 px-4 flex flex-col items-center gap-12">
        <h2 className="text-[#FF6347] font-bold text-center text-2xl sm:text-4xl ">
          اپلیکیشن رو کاوش کن
        </h2>
        <MainPhoneImage />
      </div>
    </section>
  );
}

export default MainAppShowCase