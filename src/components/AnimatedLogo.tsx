
'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { dmSans } from '@/app/layout';

const AnimatedHeader = ({ text }: {text: string;}) => {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if(ref.current){
        gsap.to(ref.current, {y: -200,  duration: 1})
    }
  }, {scope: ref})


  return (
    <h3
      ref={ref}
      className={`${dmSans.className} leading-none font-black text-[15vw] tracking-[-1.5vw] sm:text-[10rem] sm:tracking-[-1rem] cursor-default`}
    >
      {text}
    </h3>
  );
};

export default AnimatedHeader;
