import DeveloperItems from "./DeveloperItems";

export interface DeveloperType {
  name: string;
  job: string;
  linkText: string;
  link: string;
  img: string;
}

const developers: DeveloperType[] = [
  {
    img: "./images/no-profile.png",
    name: "جان دو",
    job: "برنامه‌نویس بک‌اند",
    linkText: "وب‌سایت",
    link: "#",
  },
  {
    img: "./images/no-profile.png",
    name: "جین اسمیت",
    job: "طراح UI/UX",
    linkText: "پورتفولیو",
    link: "#",
  },
];

const FooterAboutUs = () => {
  return (
    <div id="about" className="mb-[7.5rem]">
      <h2 className="text-[#FF6347] font-bold text-2xl sm:text-4xl text-center mb-[3.5rem]">
        درباره ما
      </h2>
      <ul className="w-full divide-y dark:divide-white/25 divide-stone-300 sm:divide-none sm:max-w-[35rem] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-12">
        {developers.map((developer, index) => (
          <DeveloperItems developer={developer} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default FooterAboutUs;
