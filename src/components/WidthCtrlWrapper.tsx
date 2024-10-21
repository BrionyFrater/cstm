import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WidthCtrlWrapperProps = {
  className?: string;
  children: ReactNode;
};

export const WidthCtrlWrapper = ({
  className,
  children,
}: WidthCtrlWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full px-5 max-w-screen-2xl md:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};
