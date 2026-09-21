import WaitlistForm from "./WaitlistForm";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-300">For experienced project &amp; delivery managers</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">Your PM playbook wasn&apos;t built for AI projects.</h1>
          <p className="mt-3 text-xl md:text-2xl font-semibold text-teal-300">And how you handle them will define your reputation.</p>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Experienced project and delivery managers are increasingly assigned AI and machine-learning initiatives, only to find the methods they have long relied on are no longer enough on their own. This is the practical playbook that shows you where traditional delivery falls short, and what high-performing PMs do instead.
          </p>
          <div className="mt-8 max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <p className="mb-3 text-center font-semibold text-slate-900">Launching soon. Join the waitlist.</p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">AI projects fail in predictable places, and most teams discover them far too late to remediate.</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Manage an AI initiative like a conventional software build and it behaves in ways your plan never accounted for.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["Feasibility is unknown at the start", "You often can't know it can be built until you've done the work.", "Stakeholders still expect a fixed plan on day one."],
            ["Data is a workstream, not a task", "Sourcing, quality, labelling and drift, absent from traditional plans.", "Treat it as a simple dependency and it will break your timeline."],
            ['"Done" is probabilistic', "Acceptance becomes a statistical threshold, not pass or fail.", "Sign-off meetings get uncomfortable fast."],
            ["The project never really closes", "Deployment starts monitoring and retraining, not closeout.", 'You stay accountable long after the "project" ends.'],
          ].map(([t, d, c]) => (
            <div key={t} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
              <p className="mt-2 text-sm font-medium text-slate-900">{c}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700">The method</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">PACER Hybrid&trade;</h2>
          <p className="mt-1 text-lg text-slate-700">Five connected disciplines for responsible AI project delivery.</p>
          <p className="mt-3 max-w-2xl text-slate-600">Rather than a replacement for PMBOK, PRINCE2 and other methods, PACER Hybrid consolidates five disciplines into one operating model that gives each a clear purpose within AI delivery.Three that you may already know, and two that AI makes essential.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-6 gap-4">
            {[
              ["P", "Project governance", "Business case, sponsorship, decision rights, scope, funding, schedule, dependencies and escalation.", "PMBOK • PRINCE2 • Organisational governance", "border-teal-600", "text-teal-600"],
              ["A", "Agile delivery", "Short planning horizons, prioritised work, stakeholder feedback, visible increments and adaptation as evidence emerges.", "Agile • Scrum • Kanban • Product practices", "border-amber-500", "text-amber-500"],
              ["C", "CRISP-DM lifecycle", "Business and data understanding, preparation, modelling, evaluation and deployment through iterative learning.", "CRISP-DM • CRISP-ML(Q) • Data science practice", "border-rose-500", "text-rose-500"],
              ["E", "Ethical and evidence-based evaluation", "Quality, safety, fairness, explainability, privacy, security and human oversight.", "NIST AI RMF • ISO/IEC 42001 • Assurance policy", "border-indigo-600", "text-indigo-600"],
              ["R", "Risk, release and continuous review", "Controlled release, monitoring, drift, incidents, retraining, benefits review and retirement.", "MLOps • Service management • Benefits realisation", "border-sky-600", "text-sky-600"],
            ].map(([letter, name, d, foundations, border, text], i) => (
              <div key={letter} className={`rounded-xl border-t-4 ${border} bg-white p-6 shadow-sm sm:col-span-2 ${i === 3 ? "sm:col-start-2" : ""}`}>
                <span className={`text-2xl font-extrabold ${text}`}>{letter}</span>
                <p className="mt-1 text-lg font-bold">{name}</p>
                <p className="mt-2 text-sm text-slate-600">{d}</p>
                <p className="mt-3 text-xs font-semibold text-slate-400">{foundations}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold">Two ways to become the PM who leads AI projects with confidence</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-7">
            <h3 className="text-xl font-bold">Self-paced course</h3>
            <p className="mt-2 text-slate-600">Nine modules of concise video, real cases, hands-on labs, and templates. Walk into your next AI project with the templates and confidence already in place.</p>
          </div>
          <div className="rounded-2xl border-2 border-teal-700 p-7">
            <h3 className="text-xl font-bold">Live instructor-led cohort</h3>
            <p className="mt-2 text-slate-600">A small, selective cohort. You bring a real AI initiative, and we apply the method together under real stakes. Limited seats.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Secure your seat before the first cohort fills.</h2>
          <p className="mt-3 text-slate-300">Join the waitlist for early access and founding-member pricing.</p>
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white p-6 text-left shadow-xl">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} AI Project Delivery
      </footer>
    </main>
  );
}