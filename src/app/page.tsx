import { WidthCtrlWrapper } from "@/components/WidthCtrlWrapper";
import Image from "next/image";
import { domine } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/Header";
export default function Home() {
  return (
    <>
      <Header />
      <main className="">
          <section>
            <Image
              src="/16.jpg"
              alt=""
              width={1920}
              height={1080}
              quality={100}
              className="absolute top-0 z-[-1] object-cover w-full"
            />

            <WidthCtrlWrapper className="text-yellow">
            <div className={`${domine.className} text-[7vw] flex gap-10 justify-between w-full uppercase leading-none min-[1360px]:mt-60 min-[1360px]:text-[8rem]`}>
              <h1 className="leading-none">Custom</h1>
              <h1 className="leading-none">Apparel</h1>
            </div>

            <div className="flex flex-col gap-20 max-w-fit">
              <p className="max-w-[70%] font-medium text-[1.8vw] lg:text-[1rem] lg:max-w-[20rem]">High-quality fabrics, stamped with your personal designs in long-lasting ink. Don&apos;t just wear clothes—wear your identity.</p>
              
              <Link href={"/gallery"}><Button className="rounded-none shadow-none max-w-fit bg-white text-slate-950 scale-[1.6] origin-left transition-transform ease-in-out hover:scale-[1.9] hover:bg-slate-950 hover:text-white">get started</Button></Link>
            </div>

            <div className="flex mt-20 flex-col w-full font-extrabold text-yellow gap-0 leading-none tracking-tighter items-end ">
              <Image src={"/yellowStar.png"} alt="" width={40} height={40}></Image>
              <p className="text-4xl">2.5K</p>
              <p>cstmers served</p>
            </div>
            </WidthCtrlWrapper>
          </section>
        <WidthCtrlWrapper>
          <p></p>
        </WidthCtrlWrapper>
      </main>

      {/* <footer>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </footer> */}
    </>
  );
}
