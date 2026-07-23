import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#06080d] flex flex-col items-center justify-center text-white p-6 relative overflow-hidden selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center space-y-6 relative z-10">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 drop-shadow-2xl">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Page Not Found
        </h2>
        <p className="text-slate-400 max-w-md mx-auto text-lg leading-relaxed">
          Oops! It seems you&apos;ve wandered into the void. The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
