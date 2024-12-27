import Header from "@/components/Header";
import Main from "@/components/Main";
import Question from "@/components/Question";
import Section from "@/components/Section";
import TitleOne from "@/components/Title-one";
import topics from "@/data/topics";

export default function TopicQuestions({ params }) {

    const { slug } = params;
    const topic = topics.find((topic) => topic.slug === slug);
    
    if (!topic) {
        return <div>this topic doesnt exist</div>;
    }

    return (            
        <>
            <Header className="flex justify-between p-6" /> 
            <Main className=" border-[3px] border-[#1e306f] py-10 px-40">
                <Section className=" border-[3px] border-[#1e306f] py-20 px-10">
                    <TitleOne className="mb-8">{topic.name} conversation questions</TitleOne>

                    {topic.questions.map((question, index) => (
                        <Question className="m-2" key={index}>{question}</Question>
                    ))}
                </Section>
            </Main>


        </>
    )
}