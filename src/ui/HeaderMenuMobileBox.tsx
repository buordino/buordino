import { IoCloseSharp } from "react-icons/io5";
import { headerNavigationItems } from "./HeaderNavigation";
import { Link } from "react-router";
import DownloadBtn from "./DownloadBtn";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderMenuMobileBoxPropsType {
  onClose: () => void;
  isVisible: boolean;
}

const HeaderMenuMobileBox = ({
  onClose,
  isVisible,
}: HeaderMenuMobileBoxPropsType) => {
  return (
    <>
        <AnimatePresence>
      {isVisible && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => onClose()}
              className="fixed inset-0 bg-black z-[1000]"
            ></motion.div>

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-[#0F172A] w-[14.6rem] fixed right-0 top-0 bottom-0 flex flex-col pt-[1rem] pb-[2rem] px-[1.7rem] z-[1001]"
            >
              <div className="flex items-center justify-center gap-6">
                <IoCloseSharp
                  color="white"
                  size={35}
                  className="cursor-pointer"
                  onClick={() => onClose()}
                />
                <img
                  src="https://learnova.app/_next/image?url=%2Fimages%2Flogo%2Flogo_type_light.png&w=256&q=75"
                  className="w-[108px] opacity-60 pb-2"
                  alt="Bordino__Logo"
                />
              </div>

              <div className="mt-6 grow">
                <ul className="space-y-[2rem]">
                  {headerNavigationItems.map((item, index) => (
                    <li key={index} className="transition-all duration-150 hover:opacity-70">
                      <Link to={item.to}>
                        <span className="text-[1rem] text-white">
                          {item.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <DownloadBtn size="large" />
              </div>
            </motion.div>
          </div>
      )}
      </AnimatePresence>
    </>
  );
};

export default HeaderMenuMobileBox;
