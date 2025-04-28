export default function Card({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <div className="border border-[rgba(204,204,204,0.1)] border-solid rounded-[24px] bg-[rgb(20,20,20)] max-w-full w-full opacity-100 flex flex-col items-center mb-2">
      {children}
    </div>
  );
}
