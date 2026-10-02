import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center text-slate-900 p-6 relative overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-200 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center space-y-6 relative z-10">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          Page Not Found
        </h2>
        <p className="text-slate-600 max-w-md mx-auto text-lg leading-relaxed">
          Oops! It seems you&apos;ve wandered into unfamiliar territory. The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl accent-blue hover:brightness-105 text-white font-bold text-lg transition-all duration-300 shadow-md active:scale-95"
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
