import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Portfolio
      <button className="btn btn-accent">Accent</button>
<button className="btn btn-ghost">Ghost</button>
    </main>
  );
}
