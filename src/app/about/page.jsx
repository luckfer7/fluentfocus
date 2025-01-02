import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Paragraph from "@/components/Paragraph";
import TitleOne from "@/components/Title-one";
import './about.css';

export default function About() {
    return(
        <>
            <Header className="flex justify-between items-center p-6" />
            <Main className=" py-20 px-40 about-main-page " >
                <TitleOne className="text-center text-2xl text-[#FFFFFF] mb-9 ">About FluentFocus</TitleOne>
                <Paragraph className=" text-[#FFFFFF] ">
                The idea behind FluentFocus emerged from my many years of experience as an English teacher. I often struggled to find resources that provided meaningful and engaging conversation questions. When I did find questions, they were usually too shallow to spark interesting discussions. I also spent a significant amount of time crafting my own questions from scratch to prepare for lessons. 
                <br />
                <br />
                That’s why I created FluentFocus—a platform that compiles conversation questions for a wide range of topics and proficiency levels, from beginner to advanced. These questions are designed to not only guide discussions but also inspire the development of follow-up questions, enhancing the flow of conversation.
                <br />
                <br />
                FluentFocus was built with English teachers in mind, aiming to save them time and effort in finding and preparing conversation materials for their classrooms.
                <br />
                <br />
                Are you a student? No worries! Feel free to use FluentFocus to your heart’s content. This site was made for you and your growth!
                </Paragraph>
            </Main>
            
            <Footer className="text-center text-[#FFFFFF] p-10">Developed by a teacher for teachers</Footer>
        </>

    )
}