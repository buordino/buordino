import { useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";
import MobileBoxItems from "./MobileBoxItems";
export interface MobileBoxType {
  title: string;
  caption: string;
}

const items: MobileBoxType[] = [
  {
    title: "سیستم قرعه کشی",
    caption: "توی قرعه کشی های روزانه شرکت کن و جوایزی مثل هدفون و گوشی ببر.",
  },
  {
    title: "کوییز روزانه",
    caption: "دانشت رو با کوییز های جذاب تست کن و جایزه بگیر.",
  },
  {
    title: "خرید کوپن",
    caption: "کوپن بخر و شانس برنده شدنت رو بیشتر کن.",
  },
  {
    title: "کیف پول دیجیتال",
    caption: "جوایز و خریدات رو توی اپ مدیریت کن.",
  },
];

const MainPhone = () => {
  const [page, setPage] = useState(1);
  const onNext = () => {
    if (page !== items.length) setPage((p) => p + 1);
  };
  const onBefore = () => {
    if (page !== 1) setPage((p) => p - 1);
  };
  return (
    <div
      className="relative  h-[335px] w-[190px]  border-4 border-black rounded-2xl bg-gray-50 "
      style={{ boxShadow: "5px 5px 2.5px 6px rgb(209, 218, 218)" }}
    >
      <div className="absolute inset-0 bg-[#F47564] rounded-[12px] py-12 px-4 ">
        <div className="text-center text-white space-y-2">
          <h3 className=" font-bold  text-[16px]">به بردینو خوش امدید</h3>
          <p className=" text-[9px] leading-[19px]  ">
            به هزاران کاربر بپیوند و با کوییز و قرعه‌کشی جوایز روزانه ببر.
          </p>
        </div>
        <div className="mt-6">
          <MobileBoxItems
            key={page}
            item={items.at(page - 1) as MobileBoxType}
          />
        </div>
        <div
          className={`flex items-center ${
            page === items.length ? "justify-end" : "justify-between"
          } mt-4`}
        >
          {page !== items.length && (
            <MdOutlineNavigateNext
              size={24}
              color="white"
              className="cursor-pointer"
              onClick={onNext}
            />
          )}
          {page !== 1 && (
            <MdOutlineNavigateBefore
              size={24}
              color="white"
              className="cursor-pointer"
              onClick={onBefore}
            />
          )}
        </div>
      </div>
      <span className="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl block mx-auto absolute top-0 left-0 right-0" />
      <span className="absolute -right-2 top-14  border-4 border-black h-7 rounded-md" />
      <span className="absolute -right-2 bottom-36  border-4 border-black h-10 rounded-md" />
    </div>
  );
};

export default MainPhone;
