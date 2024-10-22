"use client"

import { cn } from "@/lib/utils";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
 

export const GalleryAnimation = () => {
  
  const imageGroups = [
    [1, 2, 3, 4, 5],
    [11, 12, 13, 14, 8],

    [6, 15, 16, 9, 10],
    
    [7, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ];

  const gsapScope = useRef<HTMLDivElement>(null);

  useEffect(() => {

  }, [])

  useGSAP(() => {
    const tl = gsap.timeline({delay: 0})

    tl.to(".col", {
      top: 0,
      duration: 3, 
      ease:  "power4.inOut"
    })

    tl.to(".c-0 .item", {
      top: 0,
      objectPosition: "top",
      stagger: 0.25,
      duration: 3, 
      ease: "power4.inOut"
    }, "-=2")

    tl.to(".c-1 .item", {
      top: 0,
      objectPosition: "top",
      stagger: -0.25,
      duration: 3, 
      ease: "power4.inOut"
    }, "-=4")

    tl.to(".c-2 .item", {
      top: 0,
      stagger: 0.25,
      duration: 3, 
      ease: "power4.inOut"
    }, "-=4")

    tl.to(".c-3 .item", {
      top: 0,
      objectPosition: "top",
      stagger: -0.25,
      duration: 3, 
      ease: "power4.inOut"
    }, "-=4")

    tl.to(".c-4 .item", {
      top: 0,
      stagger: 0.25,
      duration: 3, 
      ease: "power4.inOut"
    }, "-=4")

    tl.to(".galleryCtn", {
      scale: 5.4,
      duration: 4,
      ease: "power4.inOut"
    }, "-=2")

    // tl.to(".hero", {
    //   top: 50,
    //   duration: 1,
    //   ease: "power3.out"
    // }, "-=1.5")

    tl.autoRemoveChildren = true;

  }, {scope: gsapScope})

  return (
    <div ref={gsapScope}>
    <div className="galleryCtn fixed w-full h-full flex gap-[1em]">
      {imageGroups.map((group, groupIndex) => (
        
        <div key={groupIndex} className={cn(`col c-${groupIndex} relative flex flex-1 w-full flex-col gap-[1em]`, groupIndex == 0 || groupIndex == 2 || groupIndex == 4 ? "top-full" : "top-[-100%]")}>
          {group.map((imageNumber) => (
            <div key={imageNumber} className={cn("item relative flex-1 w-full  overflow-hidden", groupIndex == 0 || groupIndex == 2 || groupIndex == 4 ? "top-full" : "top-[-100%]")}>
              
              <Image 
                src={imageNumber != 16 ? `/${imageNumber}.webp` : `/${imageNumber}.jpg`} 
                alt={`Image ${imageNumber}`}
                width={1920}
                height={1920}
                draggable={false}
                className="w-full h-full object-cover"
                quality={imageNumber != 16 ? 40 : 100} 
              />
            </div>
          ))}
        </div>
      ))}
    </div>

    <div className="hero text-6xl absolute w-[95%] top-[-100%] flex items-center justify-center text-[#faf725] md:text-[20rem]">
      <h3>cstm.</h3>
    </div>
    </div>
  );
};
