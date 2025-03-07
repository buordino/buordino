import { MobileBoxType } from "./MainPhone";

interface MobileBoxItemsPropsType {
  item: MobileBoxType;
}

const MobileBoxItems = ({ item }: MobileBoxItemsPropsType) => {
  const { caption, title } = item;
  return (
    <div className="bg-white rounded-xl py-5 px-4 text-center space-y-3 ">
      <h4 className="font-bold">{title}</h4>
      <p className="text-[9px]">{caption}</p>
    </div>
  );
};

export default MobileBoxItems;
