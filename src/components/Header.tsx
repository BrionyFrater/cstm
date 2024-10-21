import { WidthCtrlWrapper } from "./WidthCtrlWrapper";
import { dmSans } from "@/app/layout";
import { SlotButton } from "./SlotButton";

export const Header = () => {
  return (
    <header className="mb-10 mt-5 sm:mt-0">
      <WidthCtrlWrapper>
        <nav className="flex justify-between items-center gap-3 md:gap-16">
          <h3
            className={`${dmSans.className} leading-none font-black text-[15vw] tracking-[-1.5vw] sm:text-[10rem] sm:tracking-[-1rem] cursor-default`}
          >
            cstm.
          </h3>
          <hr className="w-full h-[2px] border-slate-950" />
          <ul className="flex gap-2 md:gap-11">
            <li>
              <SlotButton text="Sign Up" link="/" />
            </li>
            <li>
              <SlotButton text="Login" link="/" />
            </li>
          </ul>
        </nav>
      </WidthCtrlWrapper>
    </header>
  );
};
