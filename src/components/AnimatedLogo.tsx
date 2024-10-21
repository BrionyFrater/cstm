"use client";
import { motion } from "framer-motion";

export const AnimatedLogo = ({
  text,
  font,
}: {
  text: string;
  font?: string;
}) => {
  return (
    <motion.h3
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.07,
      }}
      className={`${font} leading-none font-black text-[15vw] tracking-[-1.5vw] sm:text-[10rem] sm:tracking-[-1rem] cursor-default`}
    >
      <div className="flex">
        {text.split("").map((letter, indx) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "50%",
                  scaleY: 0,
                },
                animate: {
                  y: 0,
                  scaleY: 1,
                }
              }}
              className="inline-block"
              key={indx}
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.h3>
  );
};
