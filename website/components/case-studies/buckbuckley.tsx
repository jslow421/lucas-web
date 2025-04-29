import Image from "next/image";
import LinkButton from "../buttons/link-button";
import Card from "../card";

export default function BuckBuckleyCaseStudy() {
  return (
    <Card>
      <div className="p-4">Video Work With Buck Buckley&apos;s</div>
      <div className="p-4">
        A series of engaging videos created for Klaus Roofing Systems by Buck
        Buckley&apos;s combined customer testimonials and educational content to
        highlight their innovative roofing solutions. These videos garnered
        thousands of views, drove a 3% increase in sales, and enhanced customer
        trust, showcasing the power of storytelling in building brand awareness
        and driving growth.
      </div>
      <LinkButton href="#" text="Case Study" />
      <div className="p-4">
        <Image
          src="/buck-buckley-case-study.jpeg"
          alt="MRS Logo"
          width={128}
          height={128}
          className="object-cover mb-4"
          priority
        />
      </div>
    </Card>
  );
}
