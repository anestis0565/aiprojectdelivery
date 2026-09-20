import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import BuyButton from "../../buy/BuyButton";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: course } = await supabase
    .from("courses")
    .select("id, title, description, price_cents, modules(id, title, position, lessons(id, title, position, is_free_preview))")
    .eq("slug", slug)
    .maybeSingle();

  if (!course) {
    return <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 16px" }}><h1>Course not found</h1></main>;
  }

  let enrolled = false;
  if (user) {
    const { data: enrollment } = await supabase
      .from("enrollments")
      .select("id")
      .eq("user_id", user.id)
      .eq("course_id", course.id)
      .maybeSingle();
    enrolled = !!enrollment;
  }

  const modules = (course.modules ?? [])
    .slice()
    .sort((a: any, b: any) => a.position - b.position)
    .map((m: any) => ({
      ...m,
      lessons: (m.lessons ?? []).slice().sort((a: any, b: any) => a.position - b.position),
    }));

  return (
    <main style={{ maxWidth: 800, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 8 }}>{course.title}</h1>
      {course.description && <p style={{ color: "#555" }}>{course.description}</p>}

      <div style={{ margin: "20px 0" }}>
        {enrolled ? (
          <span style={{ padding: "8px 14px", background: "#e6f7ec", color: "#137a3d", borderRadius: 6, fontWeight: 600 }}>
            ✓ You're enrolled
          </span>
        ) : (
          <div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>
              {course.price_cents === 0 ? "Free" : `A$${(course.price_cents / 100).toFixed(2)}`}
            </p>
            {user ? <BuyButton courseId={course.id} /> : <Link href="/login">Sign in to enrol</Link>}
          </div>
        )}
      </div>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Course content</h2>
      {modules.map((m: any) => (
        <div key={m.id} style={{ marginBottom: 24 }}>
          <h3 style={{ marginBottom: 8 }}>{m.title}</h3>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 6 }}>
            {m.lessons.length === 0 ? (
              <li style={{ color: "#999" }}>{enrolled ? "No lessons yet" : "🔒 Enrol to unlock these lessons"}</li>
            ) : (
              m.lessons.map((l: any) => (
                <li key={l.id} style={{ padding: "10px 14px", border: "1px solid #eee", borderRadius: 6 }}>
                  <Link href={`/lesson/${l.id}`} style={{ textDecoration: "none" }}>{l.title}</Link>
                  {l.is_free_preview && !enrolled && (
                    <span style={{ marginLeft: 8, fontSize: 12, color: "#137a3d" }}>Free preview</span>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      ))}
    </main>
  );
}