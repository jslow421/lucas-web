"use client";

export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-col gap-2 items-center justify-center py-8 text-sm text-gray-400 w-full border-t border-[rgba(204,204,204,0.1)] mt-8">
      <div>© {new Date().getFullYear()} Lucas Slowik. All rights reserved.</div>
      <div className="flex gap-4">
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
          className="hover:text-blue-400 transition-colors"
          aria-label="Email Lucas Slowik"
        >
          Contact
        </a>
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
          aria-label="LinkedIn profile of Lucas Slowik"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
