"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export const AnimatedLogo = ({
  text,
  font,
}: {
  text: string;
  font?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);


  // useGSAP(() => {
  //   gsap.fromTo(ref.current, {scale: 0}, {scale: 1})
  // }, [])

  return (
    
    <h3
      ref={ref}
      className={`${font} leading-none font-black text-[15vw] tracking-[-1.5vw] sm:text-[10rem] sm:tracking-[-1rem] z-[-1] cursor-default`}
    >
      {text}
    </h3>
  );
};
