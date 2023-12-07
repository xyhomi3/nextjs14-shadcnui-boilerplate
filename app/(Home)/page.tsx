import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h1
        className="
        text-4xl font-bold text-center text-gray-900 dark:text-gray-100
        lg:text-6xl"
      >
        Shadcn/ui
      </h1>
      <code className="absolute bottom-5 mt-4 text-gray-900 text-center p-5 dark:text-gray-100">
        <a href="https://nextjs.org/blog/next-14" target="_blank">Next.js 14</a> with Shadcn/ui, Next Themes, TypeScript, ESLint.
      </code>
    </main>
  );
}
