
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import Span from "@/components/TextHighlight";
import TitleOne from "@/components/Title-one";
import TitleThree from "@/components/Title-three";
import TitleTwo from "@/components/Title-two";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      <Header className="flex justify-between items-center p-6 text-[#FFFFFF] "/>
      <Main className="w-[100%] h-[90%] border border-red-500 flex flex-col items-center py-20 px-10 main-sp-screen">
        <Section className="flex flex-col gap-[22px] w-[70%] titles-section">
          <TitleOne className="text-center text-4xl font-bold  text-[#FFFFFF] title-one-sp-screen" >Transform Your English Skills Forever!</TitleOne>
          <TitleTwo className="text-center text-3xl font-bold text-[#FFFFFF] title-two-sp-screen">Immerse yourself in dynamic discussions, conquer everyday conversations, and experience the power of true fluency</TitleTwo>
          <TitleThree className="text-center text-2xl font-bold text-[#FFFFFF] title-three-sp-screen">FluentFocus: Elevate your language, elevate your life.</TitleThree>
        </Section>
        <Section className="  mt-10 flex justify-center gap-[25px] max-[390px]:flex-col secao-boxes">
          <Link className=" w-[100%]  border-[3px] border-[#1e306f] rounded-[8px] flex flex-col items-center bg-[#4d67c6] py-10 px-10 box" href="/topics">
            <Span className="text-2xl my-7  text-[#FFFFFF] span" >Conversation topics</Span>
            <Paragraph className="text-lg text-center mb-1.5 text-[#FFFFFF]">Explore fun and engaging topics to keep your conversations flowing</Paragraph>
            <Paragraph className="text-lg text-center  text-[#FFFFFF]">From family to parties, discover ideas that spark great discussions!</Paragraph>
          </Link>
          <Link className=" w-[100%] border-[3px] border-[#1e306f] rounded-[8px] flex flex-col items-center py-10 px-10 bg-[#0d1d57] box" href="/reading">
            <Span className="text-2xl my-7 text-center text-[#FFFFFF] span">Reading texts</Span>
            <Paragraph className="text-lg text-center mb-1.5 text-[#FFFFFF]">Discover stories that inspire and ideas that engage.</Paragraph>
            <Paragraph className="text-lg text-center text-[#FFFFFF]">Learn English through texts that spark curiosity!</Paragraph>
          </Link>
 
        </Section>
      </Main>
      <Footer className="text-center text-[#FFFFFF] p-10">Developed by a teacher for teachers</Footer>
    </div>
  );
}
