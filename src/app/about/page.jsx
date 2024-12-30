import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TitleOne from "@/components/Title-one";

export default function About() {
    return(
        <>
            <Header className="flex justify-between items-center p-6" />
            <TitleOne className="text-center text-2xl text-[#FFFFFF] ">about page</TitleOne>
            <Footer className="text-center text-[#FFFFFF] p-10">Developed by a teacher for teachers</Footer>
        </>

    )
}