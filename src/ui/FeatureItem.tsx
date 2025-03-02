import { FeatureType } from "./MainFeatures"

interface FeatureItemPropsType{
    feature:FeatureType
}

const FeatureItem = ({feature}:FeatureItemPropsType) => {
    const {caption,icon,title}=feature
  return (
    <li className="bg-white/10 shadow-lg backdrop-blur-lg backdrop-opacity-50 border border-white/20 w-full sm:w-[320px] rounded-lg p-6 flex flex-col items-center gap-4 text-center">
      <div>{icon}</div>
      <h3 className="text-[#FF6347] font-bold text-lg">{title}</h3>
      <p className="text-[14px] leading-[28px]">{caption}</p>
    </li>
  );
}

export default FeatureItem