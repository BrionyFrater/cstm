import { SlotButton } from "@/components/SlotButton";
import { domine } from "@/lib/fonts"
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className={`${domine.className} flex flex-col w-full h-[100vh] items-center justify-center `}
    >
      <h3 className="text-4xl tracking-tighter font-black text-center inline-flex items-center gap-2 bg-slate-950 text-tan mx-2">
        hmmm...looks like that page doesn&apos;t exist
        <Frown size={32} />
      </h3>

      <p className="mb-5 font-light">let&apos;s get you back home</p>
      <SlotButton
        text="Home"
        link="/"
        className="bg-accent-orange text-tan hover:bg-slate-950 hover:text-white"
      />
    </div>
  );
}
