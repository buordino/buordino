import { motion } from "framer-motion";

interface AnimationElementsPropsType {
  type: "gift" | "question" | "coupon";
}

const AnimationElements = ({ type }: AnimationElementsPropsType) => {
  if (type === "coupon")
    return (
      <motion.div
        className="fixed left-[5rem] sm:left-[15rem] top-[35rem] opacity-30
                "
        animate={{
          y: [0, -20, 0],
          x: [0, -35, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/coupon.png"
          alt="Coupon-Img"
          className="w-[8rem] h-[8rem]"
        />
      </motion.div>
    );
  if (type === "question")
    return (
      <motion.div
        className="inline-block    fixed left-[13rem] sm:left-[75rem] top-[15.5rem] sm:top-[20rem] opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, -35, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src="/images/question.png"
          alt="Question-Img"
          className="w-[10rem] h-[8rem]"
        />
      </motion.div>
    );
  return (
    <motion.div
      className="inline-block   fixed left-[1.5rem] sm:left-[15rem] top-[10rem] opacity-40"
      animate={{
        y: [0, +20, 0],
        x: [0, +35, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img src="/images/gift.png" alt="Gift-Img" className="w-[8rem] h-[8rem]" />
    </motion.div>
  );
};

export default AnimationElements;
