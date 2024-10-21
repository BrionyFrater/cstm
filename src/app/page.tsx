import { Header } from "@/components/Header";
import { WidthCtrlWrapper } from "@/components/WidthCtrlWrapper";

export default function Home() {
  return (
    <>
      <Header />

      <main className="">
        <WidthCtrlWrapper>
          <section>
            <p>Hi</p>
          </section>
        </WidthCtrlWrapper>
      </main>

      {/* <footer>
        &copy; {new Date().getFullYear()} All Rights Reserved
      </footer> */}
    </>
  );
}
