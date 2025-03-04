import { motion } from "framer-motion";

interface AnimationElementsPropsType {
  type: "circle" | "squre" | "triangle";
}

const AnimationElementsCircle = ({ type }: AnimationElementsPropsType) => {
  if (type === "triangle")
    return (
      <motion.div
        className="fixed left-[15rem] top-[35rem] opacity-30
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
  if (type === "squre")
    return (
      <motion.div
        className="inline-block    fixed left-[75rem] top-[20rem] opacity-30"
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
      className="inline-block   fixed left-[15rem] top-[10rem] opacity-40"
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

export default AnimationElementsCircle;
