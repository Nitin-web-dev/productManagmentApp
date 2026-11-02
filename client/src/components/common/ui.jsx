export function Box({ children }) {
  return (
    <div className=" col-span-12 min-[901px]:col-span-7 min-w-0 rounded-xl border border-line bg-panel p-4">
      {children}
    </div>
  );
}
