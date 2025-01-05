import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import TitleOne from "@/components/Title-one";
import Image from "next/image";
import img from './reading.png';
import "./reading.css";

export default function Reading() {
    return(
        <>
            <Header className="flex justify-between items-center p-6"/>
            <Section className=" w-[90%] mx-auto flex flex-col gap-[30px] shadow-xl shadow-[#9788f8] rounded-2xl pt-9 reading-section">
                <TitleOne className="text-center text-2xl text-[#FFFFFF]">Reading topics are coming soon...</TitleOne>
                <Image className=" w-[40%] mx-auto img " src={img} alt="reading ilustration" /> 
            </Section>
            
            <Footer className="text-center text-[#FFFFFF] p-10">Developed by a teacher for teachers</Footer>
        </>

    )
}