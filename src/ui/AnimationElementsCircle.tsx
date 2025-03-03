import { motion } from "framer-motion";

interface AnimationElementsPropsType {
  type: "circle" | "squre" | "triangle";
}

const AnimationElementsCircle = ({ type }: AnimationElementsPropsType) => {
   if (type === "triangle")
     return (
       <motion.div
         className="fixed left-[15rem] top-[35rem] opacity-30
                   w-0 h-0
                   border-l-[55px] border-l-transparent
                   border-r-[55px] border-r-transparent
                   border-b-[100px] border-b-[#FF6347]"
         animate={{
           y: [0, -20, 0],
           x: [0, -35, 0],
         }}
         transition={{
           duration: 5,
           repeat: Infinity,
           ease: "easeInOut",
         }}
       />
     );
  if(type==="squre") return (
    <motion.div
      className="inline-block  bg-green-700 w-[5rem] h-[5rem] fixed left-[75rem] top-[20rem] opacity-30"
      animate={{
        y: [0, -20, 0],
        x: [0, -35, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
  return (
    <motion.div
      className="inline-block rounded-[100%] bg-[#FF6347] w-[6rem] h-[6rem] fixed left-[15rem] top-[10rem] opacity-40"
      animate={{
        y: [0, +20, 0], 
        x:[0,+35,0]
      }}
      transition={{
        duration: 5, 
        repeat: Infinity, 
        ease: "easeInOut", 
      }}
    />
  );
};

export default AnimationElementsCircle;
