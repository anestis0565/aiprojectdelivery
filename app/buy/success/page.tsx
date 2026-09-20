export default function SuccessPage() {
  return (
    <main style={{ maxWidth: 700, margin: "80px auto", padding: "0 16px", textAlign: "center" }}>
      <h1>You're enrolled! 🎉</h1>
      <p>Payment received. Your course access is now active.</p>
      <a href="/dashboard" style={{ display: "inline-block", marginTop: 16 }}>
        Go to your dashboard →
      </a>
    </main>
  );
}