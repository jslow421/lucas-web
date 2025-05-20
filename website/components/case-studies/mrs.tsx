import Image from "next/image";
import LinkButton from "../buttons/link-button";
import Card from "../card";

export default function MrsCaseStudy() {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col justify-center">
          <div className="p-4">
            Midwest Refrigerated Services Brand Guidelines
          </div>
          <div className="p-4">
            Branding guidelines for MRS ensure consistency across all marketing
            and communication efforts, reflecting the company&apos;s values of
            Modesty, Integrity, Dependability, Work Ethic, Efficiency, Safety,
            and Trust. These guidelines are vital for building a cohesive and
            recognizable brand identity that fosters trust and loyalty among
            customers and employees.
          </div>
          <div className="p-4">
            <LinkButton href="#" text="Case Study" />
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="relative w-full max-w-[256px] aspect-square">
            <Image
              src="/mrs-case-study.jpeg"
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
