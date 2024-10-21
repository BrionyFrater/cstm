import Link from "next/link";
import { Button } from "./ui/button";

export const SlotButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Button
      variant={"outline"}
      className="group shadow-none relative overflow-clip border-transparent bg-transparent hover:border-slate-950 px-2 hover:bg-transparent"
    >
      <Link href={link} className="flex flex-col items-center">
        <p className="transition-all duration-300 ease-in-out group-hover:translate-y-[-150%]">
          {text}
        </p>
        <p className="absolute ease-in-out transform translate-y-[150%] transition-all duration-300 group-hover:translate-y-0">
          {text}
        </p>
      </Link>
    </Button>
  );
};
