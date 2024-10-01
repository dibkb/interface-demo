import { Logo } from "./components/fonts/logo";

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr] min-h-screen">
      <aside className="col-span-2 row-span-2 grid grid-rows-[auto_1fr]">
        <div className="h-[4.25rem] border-t border-r border-b px-8">
          <Logo />
        </div>
        <div className="border-r p-6">Aside Row 3 (Full height)</div>
      </aside>

      <main className="col-span-10 row-span-2 grid grid-rows-[auto_1fr]">
        <div className="h-[4.25rem] border-t border-b py-5 px-8">
          <p>Logs</p>
        </div>
        <div className="p-6">Main Row 2 (Full height)</div>
      </main>
    </div>
  );
}
