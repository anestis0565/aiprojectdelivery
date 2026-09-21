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
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">PACER Hybrid&trade;: built for AI delivery, on the disciplines you already trust.</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Not a replacement for PMBOK, PRINCE2 or Scrum. PACER Hybrid consolidates five disciplines into one operating model. Three you already know, and two that AI makes essential.</p>
          <div className="mt-8 grid gap-3">
            {[
              ["P", "Project governance", "Decision rights, and the go, stop or adjust gates that keep you in control."],
              ["A", "Agile delivery", "An iterative delivery cadence, adapted for the realities of AI."],
              ["C", "CRISP-DM lifecycle", "The data-centric phases the work actually moves through."],
              ["E", "Ethical and evidence-based evaluation", "Success judged on performance and fairness, not a simple pass or fail."],
              ["R", "Risk, release and review", "Running it safely once live: monitoring, drift and retraining."],
            ].map(([letter, name, d]) => (
              <div key={letter} className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-700 text-xl font-bold text-white">{letter}</div>
                <div>
                  <p className="font-bold">{name}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{d}</p>
                </div>
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