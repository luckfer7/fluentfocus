import Header from "@/components/Header";
import Main from "@/components/Main";
import Question from "@/components/Question";
import Section from "@/components/Section";
import TitleOne from "@/components/Title-one";
import topics from "@/data/topics";
import './topic.css'


export async function generateStaticParams() {
   return topics.map((topic) => ({
    slug: topic.slug,
   }));
}


export default async function TopicQuestions ({ params }) {

    const resolvedParams = await params;

    const topic = topics.find((topic) => topic.slug === resolvedParams.slug);
    if (!topic) {
        return <div>this topic doesnt exist</div>;
    }

    return (            
        <>
            <Header className="flex justify-between items-center p-6" /> 
            <Main className="  py-10 px-40 topic-page">
                <Section className="  py-20 px-10 shadow-inner shadow-[#9788f8] rounded-2xl  questions-box">
                    <TitleOne className="mb-8 text-2xl  text-[#FFFFFF]">{topic.name} conversation questions</TitleOne>

                    {topic.questions.map((question, index) => (
                        <Question className="m-4 text-[#FFFFFF] font-Nunito question" key={index}>{index + 1}. {question}</Question>
                    ))}
                </Section>
            </Main>

            {/* border-[3px] border-[#1e306f] */}
        </>
    )
}