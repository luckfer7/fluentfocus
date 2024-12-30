import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Section from "@/components/Section";
import Link from "next/link";
import topics from "@/data/topics";
import TitleOne from "@/components/Title-one";
import './topics.css'

export default function topicsPage() {
    return(
        <>
            <Header className="flex justify-between items-center p-6 text-[#FFFFFF]" />
            
            <Main className=" w-[100%] h-[auto]  border-[3px] border-[#1e306f] bg-[#0d1d57]">
                <TitleOne className="text-[#FFFFFF] text-2xl text-center topics-title ">topics page</TitleOne>
                <Section className=" w-[70%] mx-auto grid grid-cols-4 place-items-center bg-[#12266fda] topics-list"  >
                    {topics.map((topic) => (
                        <Link className="text-[#FFFFFF] font-Raleway" href={`/topics/${topic.slug}`} key={topic.slug} >{topic.name}</Link>
                    ))}
                    
                   
                </Section>
            </Main>
            <Footer className="text-center text-[#FFFFFF] p-10">Developed by a teacher for teachers</Footer>
        </>
        
    )
}