import { FaDiceD20 } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between">
        <h1 className="text-4xl font-semibold mb-1 flex items-center group">
          <FaDiceD20 className='group-hover:animate-spin group-hover:scale-110 transition-all mr-2' />
          <span>RollFor</span>
        </h1>
        <h2 className="text-lg italic font-mono opacity-50">
          Decide less. Roll more.
        </h2>
      </main>
    </div>
  );
}
