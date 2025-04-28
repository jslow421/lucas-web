import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="flex flex-col items-center h-full">
          <div className="flex-shrink-0">
            <Image
              src="contractor-nation-logo.png"
              alt="Testimonial 1"
              width={128}
              height={128}
              className="rounded-full object-cover mb-4"
              priority
            />
          </div>
          <blockquote className="italic text-gray-700 flex-grow flex items-center justify-center h-full">
            &quot;He is motivated, determined, and creative in his marketing
            endeavors.&quot;
          </blockquote>
        </div>

        <div className="flex flex-col items-center h-full">
          <div className="flex-shrink-0">
            <Image
              src="mrs-logo.webp"
              alt="Testimonial 2"
              width={128}
              height={128}
              className="rounded-full object-cover mb-4"
              priority
            />
          </div>
          <blockquote className="italic text-gray-700 flex-grow flex items-center justify-center h-full">
            &quot;His creative work sets our organization apart and he continues
            to dive deeper and improve his own creative work.&quot;
          </blockquote>
        </div>

        <div className="flex flex-col items-center h-full">
          <div className="flex-shrink-0">
            <Image
              src="graef-logo.webp"
              alt="Testimonial 3"
              width={128}
              height={128}
              className="rounded-full object-cover mb-4"
              priority
            />
          </div>
          <blockquote className="italic text-gray-700 flex-grow flex items-center justify-center h-full">
            &quot;He is extremely bright, driven, and he&apos;s a team player
            with innovative ideas.&quot;
          </blockquote>
        </div>
      </div>
    </div>
  );
}
