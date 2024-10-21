import { WidthCtrlWrapper } from "./WidthCtrlWrapper";
import { dmSans } from "@/app/layout";
import { SlotButton } from "./SlotButton";

export const Header = () => {
  return (
    <header className="mb-10 mt-5 sm:mt-0">
      <WidthCtrlWrapper>
        <nav className="flex justify-between items-center gap-3 md:gap-16">
          <h3
            className={`${dmSans.className}  font-black text-3xl tracking-[-0.1rem] sm:text-6xl sm:tracking-[-0.35rem]`}
          >
            cstm.
          </h3>
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
