import { motion } from "framer-motion";

interface AnimationElementsPropsType {
  type: "question" | "trophy" | "handle" | "discount";
}

const AnimationElements = ({ type }: AnimationElementsPropsType) => {
  if(type==='discount') 
    return (
      <motion.div
        className="fixed right-0 sm:right-[5rem]  md:right-[10rem] top-[25rem] opacity-50
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
          src="/images/discount.png"
          alt="discount-IMG"
          className="w-[8rem] h-[6rem]"
        />
      </motion.div>
    );
  if (type === "handle")
    return (
      <motion.div
        className="fixed left-[5rem] sm:left-[15rem] top-[35rem] opacity-60
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
          src="/images/handle.png"
          alt="handle-IMG"
          className="w-[10rem] h-[7rem]"
        />
      </motion.div>
    );
  if (type === "trophy")
    return (
      <motion.div
        className="inline-block    fixed right-0 sm:right-[3rem] md:right-[7rem] top-[8.5rem] opacity-50"
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
          src="/images/trophy.png"
          alt="Trophy-Img"
          className="w-[10rem] h-[8rem]"
        />
      </motion.div>
    );
  return (
    <motion.div
      className="inline-block   fixed left-0 sm:left-[8rem] md:left-[5rem] top-[14rem] opacity-40"
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
      <img
        src="/images/question.png"
        alt="Question-Img"
        className="w-[8rem] h-[8rem]"
      />
    </motion.div>
  );
};

export default AnimationElements;
