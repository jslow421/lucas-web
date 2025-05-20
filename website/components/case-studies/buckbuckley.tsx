import Image from "next/image";
import LinkButton from "../buttons/link-button";
import Card from "../card";

export default function BuckBuckleyCaseStudy() {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <div className="p-4">Video Work With Buck Buckley&apos;s</div>
          <div className="p-4">
            A series of engaging videos created for Klaus Roofing Systems by
            Buck Buckley&apos;s combined customer testimonials and educational
            content to highlight their innovative roofing solutions. These
            videos garnered thousands of views, drove a 3% increase in sales,
            and enhanced customer trust, showcasing the power of storytelling in
            building brand awareness and driving growth.
          </div>
          <div className="p-4">
            <LinkButton href="#" text="Case Study" />
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="relative w-full max-w-[256px] aspect-square">
            <Image
              src="/buck-buckley-case-study.jpeg"
              alt="MRS Logo"
              fill
              className="object-cover mb-4"
              priority
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
