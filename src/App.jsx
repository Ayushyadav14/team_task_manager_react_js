function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Team Task Manager
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
          Welcome to your workspace
        </h1>
        <p className="mt-3 max-w-xl text-sm text-slate-300 sm:text-base">
          A clean place to organize tasks, align on priorities, and keep your
          team moving.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-200">
            Get Started
          </button>
          <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
