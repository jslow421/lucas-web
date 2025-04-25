"use client";

import Header from "../../components/header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full">
        <Header />
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Main
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        Footer
      </footer>
    </div>
  );
}
