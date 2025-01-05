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
            
            <Main className=" w-[100%] h-[auto]   bg-gradient-to-r from-[#6b5ec3] to-[#9788f8] min-h-screen;">
                <TitleOne className="text-[#FFFFFF] text-2xl text-center mb-9 topics-title ">topics page</TitleOne>
                <Section 
                style={{ boxShadow: "1px 0 5px 5px #9788f8" }} 
                className=" w-[70%] mx-auto grid grid-cols-4 place-items-center shadow-xl shadow-[#9788f8] rounded-2xl pt-4 topics-list"  >
                    {topics.map((topic) => (
                        <Link className="text-[#FFFFFF] hover:scale-105 transition-transform duration-500 font-Raleway mb-4" href={`/topics/${topic.slug}`} key={topic.slug} >{topic.name}</Link>
                    ))}
                    
                   
                </Section>
            </Main>
            <Footer className="text-center text-[#FFFFFF] p-10">Developed by a teacher for teachers</Footer>
        </>
     
    //  border-[3px] border-[#1e306f]

    )
}