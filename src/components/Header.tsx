import { WidthCtrlWrapper } from "./WidthCtrlWrapper";
import { SlotButton } from "./SlotButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email == process.env.ADMIN_EMAIL;

  return (
    <header className="mb-0 mt-5 sm:mt-8 sm:mb-12 lg:mt-0 lg:mb-40">
      <WidthCtrlWrapper>
        <nav className="flex justify-between items-center gap-3 md:gap-16">
          <Link href={"/"}>
            <h3
              className="leading-none text-white font-black text-sm uppercase sm:text-4xl transition-transform ease-in-out hover:scale-105"
            >
              cstm.
            </h3>
          </Link>
          <ul className="flex gap-2 md:gap-11">
            {user ? (
              <>
                <li>
                  <SlotButton text="logout" link="/api/auth/logout" />
                </li>
                <li>{isAdmin && <SlotButton text="admin" link="/" />}</li>
              </>
            ) : (
              <>
                <li className="flex gap-8">
                  <SlotButton text="sign up" link="/api/auth/register" />
                </li>
                <li>
                  <SlotButton text="login" link="/api/auth/login" />
                </li>
              </>
            )}
          </ul>
        </nav>
      </WidthCtrlWrapper>
    </header>
  );
};
