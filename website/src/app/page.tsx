"use client";
import RandomThings from "../../components/17-random-things";
import About from "../../components/about";
import Card from "../../components/card";
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
          <Card>
            <div className="p-4">Midwest Refrigerated Services</div>
            <div className="p-4">
              Branding guidelines for MRS ensure consistency across all
              marketing and communication efforts, reflecting the company&apos;s
              values of Modesty, Integrity, Dependability, Work Ethic,
              Efficiency, Safety, and Trust. These guidelines are vital for
              building a cohesive and recognizable brand identity that fosters
              trust and loyalty among customers and employees.
            </div>
            <div className="p-4">Case Study</div>
            <div className="p-4">IMAGE</div>
          </Card>
          <Card>
            <div className="p-4">
              A series of engaging videos created for Klaus Roofing Systems by
              Buck Buckley&apos;s combined customer testimonials and educational
              content to highlight their innovative roofing solutions. These
              videos garnered thousands of views, drove a 3% increase in sales,
              and enhanced customer trust, showcasing the power of storytelling
              in building brand awareness and driving growth.
            </div>
            <div className="p-4">Case Study</div>
            <div className="p-4">IMAGE</div>
          </Card>
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
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
