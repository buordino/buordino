import { motion, AnimatePresence } from "framer-motion";
import DownloadButton from "./DownloadButton";
import Logo from "./Logo";

interface HeaderMenuBoxPropsType {
  isVisible: boolean;
  onClose: () => void;
}

const HeaderMenuBox = ({ isVisible, onClose }: HeaderMenuBoxPropsType) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[10000]">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }} 
            className="fixed top-0 bottom-0 right-0 flex flex-col dark:bg-gray-900 bg-white w-[15rem] z-[10001] py-8 shadow-lg"
          >
            <div className="flex items-center justify-center pb-8 border-b border-solid border-stone-300/70 dark:border-white/25">
              <Logo />
            </div>
            <ul className="flex flex-col divide-y divide-stone-300/70 dark:divide-white/25 text-sm grow dark:text-white">
              <li className="py-4 px-4 transition-all duration-200 hover:text-[#FF6347]">
                <a href="#features" onClick={onClose}>
                  ویژگی‌ها
                </a>
              </li>
              <li className="py-4 px-4 transition-all duration-200 hover:text-[#FF6347]">
                <a href="#app-showcase" onClick={onClose}>
                  معرفی اپ
                </a>
              </li>
              <li className="py-4 px-4 transition-all duration-200 hover:text-[#FF6347]">
                <a href="#download" onClick={onClose}>
                  دانلود
                </a>
              </li>
              <li className="py-4 px-4 transition-all duration-200 hover:text-[#FF6347]">
                <a href="#contact" onClick={onClose}>
                  تماس
                </a>
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <DownloadButton href="#" size="large" text="دانلود اپلیکیشن" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMenuBox;
