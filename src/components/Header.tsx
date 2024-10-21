import { WidthCtrlWrapper } from "./WidthCtrlWrapper";
import { dmSans } from "@/app/layout";
import { SlotButton } from "./SlotButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { AnimatedLogo } from "./AnimatedLogo";

export const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email == process.env.ADMIN_EMAIL;

  return (
    <header className="mb-10 mt-5 sm:mt-0">
      <WidthCtrlWrapper>
        <nav className="flex justify-between items-center gap-3 md:gap-16">
          <AnimatedLogo text="cstm" font={dmSans.className} />
          <hr className="w-full border-2 border-accent-orange animate-scale-width" />
          <ul className="flex gap-2 md:gap-11">
            {user ? (
              <>
                <li>
                  <SlotButton text="Logout" link="/api/auth/logout" />
                </li>
                <li>{isAdmin && <SlotButton text="Admin" link="/" />}</li>
              </>
            ) : (
              <>
                <li>
                  <SlotButton text="Sign Up" link="/api/auth/register" />
                </li>
                <li>
                  <SlotButton text="Login" link="/api/auth/login" />
                </li>
              </>
            )}
          </ul>
        </nav>
      </WidthCtrlWrapper>
    </header>
  );
};
