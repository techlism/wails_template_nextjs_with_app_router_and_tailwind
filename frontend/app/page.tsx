import Link from "next/link";

export default function Home(){
  return(
    <main className="min-h-screen flex justify-center items-center mx-auto">
      <div className="mx-4">
        <div>
          <h1 className="text-3xl font-semibold">
            Create cross-platform Desktop apps with versatility of <span className="bg-gradient-to-r from-rose-600 via-purple-500 to-indigo-700 inline-block text-transparent bg-clip-text">Next.js (with App Router)</span> & <span className="text-cyan-400">TailwindCSS</span> and the power of <span className="text-[#00ADD8]">Golang</span>.
          </h1>
        </div>
        <div>
          <p className="text-lg my-4">
            This is a template for creating Desktop apps using <span className="text-lg font-medium text-[#DF0000]">Wails</span> with Next.js and TailwindCSS. It&apos;s a great starting point for building your next Desktop app. Any contributions are welcome.
          </p>
        </div>
        <div className="flex flex-col max-w-fit">
          <Link href={'/greet'} className="border p-4 rounded-lg bg-primary hover:opacity-75">
            Go to Greet Route
          </Link>
          <Link href={'https://wails.io'} target={'_blank'} className="border p-4 rounded-lg bg-primary my-4 hover:opacity-75">
            Learn More about Wails
          </Link>
        </div>
      </div>
    </main>    
  )
}
