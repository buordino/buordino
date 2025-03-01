import { JSX } from "react";
import { FaGift } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { RiCoupon2Fill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import FeatureItem from "./FeatureItem";

export interface FeatureType {
  icon: JSX.Element;
  title: string;
  caption: string;
}

const features: FeatureType[] = [
  {
    icon: <FaGift color="green" size={45} />,
    caption: "توی قرعه کشی های روزانه شرکت کن و جوایزی مثل هدفون و گوشی ببر.",
    title: "سیستم قرعه کشی",
  },
  {
    icon: <MdQuiz color="green" size={45} />,
    caption: "دانشت رو با کوییز های جذاب تست کن و جایزه بگیر.",
    title: "کوییز روزانه",
  },
  {
    icon: <RiCoupon2Fill color="green" size={45} />,
    caption: "کوپن بخر و شانس برنده شدنت رو بیشتر کن.",
    title: "خرید کوپن",
  },
  {
    icon: <FaWallet color="green" size={45} />,
    caption: "جوایز و خریدات رو توی اپ مدیریت کن.",
    title: "کیف پول دیجیتال",
  },
];

const MainFeatures = () => {
  return (
    <section id="features">
      <div className="px-4 pt-2 pb-[12rem] bg-gray-100">
        <h2 className="text-[#FF6347] font-bold text-center text-2xl sm:text-4xl mb-[3.5rem]">
          ویژگی‌ها
        </h2>
        <ul className="w-full sm:max-w-[45rem] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 flex-wrap">
            {features.map((feature,index)=><FeatureItem feature={feature} key={index} />)}
        </ul>
      </div>
    </section>
  );
};

export default MainFeatures;
