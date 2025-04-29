import ContactButton from "./buttons/contact-button";
import LinkedInButton from "./buttons/linkedin-button";

export default function About() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <div className="text-center text-2xl font-bold">
        <p className="bg-gradient-to-r from-[#38B6FF] to-white/35 bg-clip-text text-transparent">
          I&apos;m a creative that has a burning passion to make brands stand
          out.
        </p>
      </div>
      <div className="text-center text-xl">
        Blending Creative Vision and Strategic Insight to Build Brands That
        Inspire and Deliver Results.
      </div>
      <div className="flex flex-row space-x-4 mt-4">
        <ContactButton />
        <LinkedInButton />
      </div>
    </div>
  );
}
