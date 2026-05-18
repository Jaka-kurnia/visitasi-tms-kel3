import Image from "next/image";
import { Header } from "@/components/Header";
import { Workflow} from "@/components/Workflow";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f0f0f] transition-colors duration-300 text-slate-900 dark:text-gray-100 font-sans">
     <Header/>
    
      <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full pt-5 pb-24 flex flex-col gap-8 md:gap-10">
        <section>
          {/* Hero */}

        </section>

        <section>
          {/* Workflow */}
          <Workflow />  
        </section>
        <section>
   {/* Teach stack */}
        </section>
     
      </main>

      {/* Footer */}
    </div>
  );
}
