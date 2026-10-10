export default function Index() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
        Know your real profit.
        <br />
        Every sale. Every day.
      </h1>
      <p className="mt-6 text-lg md:text-xl text-ink-500 max-w-2xl">
        SkyJournal is the business journal for small resellers. Track sales, expenses, inventory,
        debts, and profit — offline-first, built for Nigeria.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="/signup"
          className="px-6 py-3 bg-ink-900 text-white rounded-full font-medium hover:bg-ink-700 transition"
        >
          Start free
        </a>
        <a
          href="/login"
          className="px-6 py-3 border border-ink-900 rounded-full font-medium hover:bg-ink-50 transition"
        >
          Launch app
        </a>
      </div>
    </section>
  );
}
