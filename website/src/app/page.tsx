"use client";
import RandomThings from "../../components/17-random-things";
import About from "../../components/about";
import BuckBuckleyCaseStudy from "../../components/case-studies/buckbuckley";
import MrsCaseStudy from "../../components/case-studies/mrs";
import Experience from "../../components/experience";
import Headshot from "../../components/headshot";
import Skills from "../../components/skills";
import Testimonials from "../../components/testimonials";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Headshot />
        <About />
        <div className="p-4">
          <MrsCaseStudy />
          <BuckBuckleyCaseStudy />
        </div>
        <div className="p-4">
          <div>
            A freelance creative and expert in with over of industry experience.
            Expertise extends to enabling me to create both aesthetically
            pleasing and on brand content. Currently works as at Midwest
            Refrigerated Services.
          </div>
        </div>
        <Testimonials />
        <Skills />
        <Experience />
        <RandomThings />
      </main>
      <footer className="row-start-3 flex flex-col gap-2 items-center justify-center py-8 text-sm text-gray-400 w-full border-t border-[rgba(204,204,204,0.1)] mt-8">
        <div>© {new Date().getFullYear()} Lucas Slowik. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="mailto:lucas@email.com" className="hover:text-blue-400 transition-colors">Contact</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
