interface LinkButtonProps {
  href: string;
  text: string;
  target?: string;
  rel?: string;
}

export default function LinkButton({
  href,
  text,
  target = "_blank",
  rel = "noopener noreferrer",
}: Readonly<LinkButtonProps>) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium tracking-wide border border-white hover:bg-gray-800 transition-colors duration-300"
    >
      {text}
    </a>
  );
}
