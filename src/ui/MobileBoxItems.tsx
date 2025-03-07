import { motion } from "framer-motion";
import { MobileBoxType } from "./MainPhone";

interface MobileBoxItemsPropsType {
  item: MobileBoxType;
}

const MobileBoxItems = ({ item }: MobileBoxItemsPropsType) => {
  const { caption, title } = item;

  return (
    <motion.div
      className="bg-white rounded-xl py-3 px-3 text-center space-y-3 h-[100px] border-2 border-solid border-black"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h4 className="font-bold">{title}</h4>
      <p className="text-[9px]">{caption}</p>
    </motion.div>
  );
};

export default MobileBoxItems;
