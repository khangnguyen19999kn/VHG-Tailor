"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay,
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="flex">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          whileInView="animate"
          custom={i}
          viewport={{ once: true, amount: 0.5 }}
          className={cn(
            "font-display text-center text-4xl mobile:text-lg font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white tablet:text-2xl md:leading-[5rem]",
            className,
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
