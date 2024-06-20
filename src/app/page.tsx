import Advantage from "@/components/advantage";
import Cause from "@/components/cause";
import Deadline from "@/components/deadline";
import Footer from "@/components/footer";
import Gift from "@/components/gift";
import Main from "@/components/main";
import Result from "@/components/result";
import Solutions from "@/components/solutions";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 md:gap-24 lg:gap-[170px] pb-10 sm:pb-16 md:pb-24">
      <Main />
      <Solutions />
      <Cause />
      <Result />
      <Gift />
      <Advantage />
      <Deadline />
      <Footer />
    </main>
  );
}
