"use client";
import RandomThings from "../../components/17-random-things";
import About from "../../components/about";
import BuckBuckleyCaseStudy from "../../components/case-studies/buckbuckley";
import MrsCaseStudy from "../../components/case-studies/mrs";
import Experience from "../../components/experience";
import Footer from "../../components/footer";
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
      <Footer />
    </div>
  );
}
