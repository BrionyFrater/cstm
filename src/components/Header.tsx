import { WidthCtrlWrapper } from "./WidthCtrlWrapper";
import { dmSans } from "@/app/layout";
import { SlotButton } from "./SlotButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const Header = async () => {
  const {getUser} = getKindeServerSession()
  const user = await getUser();
  const isAdmin = user?.email == process.env.ADMIN_EMAIL;

  return (
    <header className="mb-10 mt-5 sm:mt-0">
      <WidthCtrlWrapper>
        <nav className="flex justify-between items-center gap-3 md:gap-16">
          <h3
            className={`${dmSans.className} leading-none font-black text-[15vw] tracking-[-1.5vw] sm:text-[10rem] sm:tracking-[-1rem] cursor-default`}
          >
            cstm.
          </h3>
          <hr className="w-full border-2 border-accent-orange" />
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
