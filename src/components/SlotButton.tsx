import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface SlotButtonProps { 
  text: string; 
  link: string;
  className?: string;
}

export const SlotButton = ({ text, link, className }: SlotButtonProps) => {
  return (
    <Button
      variant={"outline"}
      className={cn("group shadow-none relative overflow-clip border-transparent bg-transparent hover:border-slate-950 px-2 hover:bg-transparent", className)} 
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
