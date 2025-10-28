import { D20Icon } from "@/components/ui/d20-icon";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between">
        <h1 className="text-4xl font-semibold mb-1 flex items-center group">
          <D20Icon className='group-hover:animate-spin group-hover:scale-110 transition-all mr-2 w-8' />
          <span>RollFor</span>
        </h1>
        <h2 className="text-lg italic font-mono opacity-50">
          Decide less. Roll more.
        </h2>
      </main>
    </div>
  );
}
