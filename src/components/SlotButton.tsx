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
      className={cn(
        "group text-white rounded-none border-none shadow-none relative overflow-clip bg-transparent px-2 text-[0.6rem] sm:text-[1rem]",
        className,
      )}
    >
      <Link href={link} className="flex flex-col items-center">
        <p className="transition-all duration-300 ease-in-out group-hover:translate-y-[-170%]">
          {text}
        </p>
        <p className="absolute ease-in-out transform translate-y-[170%] transition-all duration-300 group-hover:translate-y-0">
          {text}
        </p>
      </Link>
    </Button>
  );
};
