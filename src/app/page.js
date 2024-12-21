
import Header from "@/components/Header";
import Main from "@/components/Main";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import TitleOne from "@/components/Title-one";
import TitleThree from "@/components/Title-three";
import TitleTwo from "@/components/Title-two";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-[100vh]">
      <Header className="flex justify-between p-6" />
      <Main className="w-[100%] h-[80vh] border border-red-500 flex flex-col items-center">
        <Section className="flex flex-col gap-[22px] w-[70%]">
          <TitleOne className="text-center text-4xl font-bold text-[#070F2B]" >Transform Your English Skills Forever!</TitleOne>
          <TitleTwo className="text-center text-3xl font-bold text-[#070F2B]">Immerse yourself in dynamic discussions, conquer everyday conversations, and experience the power of true fluency</TitleTwo>
          <TitleThree className="text-center text-2xl font-bold text-[#070F2B]">FluentFocus: Elevate your language, elevate your life.</TitleThree>
        </Section>
        <Section>
          <Link className="border-2 border-[#070F2B] " href="/topics">
            Conversation topics
            <Paragraph>All conversation topics you find here</Paragraph>
          </Link>
          <Link className="border-2 border-[#070F2B] " href="/reading">
          Reading texts
          </Link>
        </Section>
      </Main>
    </div>
  );
}
