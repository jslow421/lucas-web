import Image from "next/image";
export default function Headshot() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <Image
        src="lucas-headshot.jpeg"
        alt="Headshot"
        width={100}
        height={100}
      />
    </div>
  );
}
