
import Section from "@/components/Section";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-[3px] border-blue-500">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start border-[3px] border-blue-500">
             <Section className="w-[300px] h-[300px] border-[3px] border-red-500">
              alguma coisa aqui
            </Section> 

      </main>
    </div>
  );
}
