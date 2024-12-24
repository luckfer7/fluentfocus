import Section from "@/components/Section";
import topics from "@/data/topics";

export default function TopicQuestions({ params }) {

    const { slug } = params;
    const topic = topics.find((topic) => topic.slug === slug);
    
    if (!topic) {
        return <div>this topic doesnt exist</div>;
    }

    return (
        <Section>
            <h1>{topic.name}</h1>

            {topic.questions.map((question, index) => (
                <p key={index}>{question}</p>
            ))}
        </Section>
    )
}