import Image from "next/image";
import LinkButton from "../buttons/link-button";
import Card from "../card";

export default function MrsCaseStudy() {
  return (
    <Card>
      <div className="p-4">Midwest Refrigerated Services Brand Guidelines</div>
      <div className="p-4">
        Branding guidelines for MRS ensure consistency across all marketing and
        communication efforts, reflecting the company&apos;s values of Modesty,
        Integrity, Dependability, Work Ethic, Efficiency, Safety, and Trust.
        These guidelines are vital for building a cohesive and recognizable
        brand identity that fosters trust and loyalty among customers and
        employees.
      </div>
      <LinkButton href="#" text="Case Study" />
      <div className="p-4">
        <Image
          src="/mrs-case-study.jpeg"
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
