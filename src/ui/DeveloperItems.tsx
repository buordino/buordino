import { useState } from "react";
import { DeveloperType } from "./FooterAboutUs";

interface DeveloperItemsPropsType {
  developer: DeveloperType;
}
const DeveloperItems = ({ developer }: DeveloperItemsPropsType) => {
  const [isShadow, setIsShadow] = useState(false);
  const { img, job, link, linkText, name } = developer;

  return (
    <li
      onMouseEnter={() => setIsShadow(true)}
      onMouseLeave={() => setIsShadow(false)}
      className={`flex flex-col items-center gap-3 py-6 sm:py-0  `}
    >
      <img
        src={img}
        alt={job}
        className={`w-[5.5rem] h-[5.5rem] rounded-[100%] transition-all duration-300  overflow-hidden ${
          isShadow && "shadow-lg shadow-green-300"
        } `}
      />
      <h3 className="text-[#FF6347] font-bold text-lg">{name}</h3>
      <p className="text-sm">{job}</p>
      <a href={link} target="_blank" className="text-sm">
        {linkText}
      </a>
    </li>
  );
};

export default DeveloperItems;
