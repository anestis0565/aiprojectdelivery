// app/lesson/[id]/page.tsx
import { createClient } from "@/lib/supabase/server";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: lesson } = await supabase
    .from("lessons")
    .select("title, video_url")
    .eq("id", id)
    .maybeSingle();

  if (!lesson) {
    return (
      <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
        <h1>Lesson not found</h1>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 900, margin: "40px auto", padding: "0 16px" }}>
      <h1 style={{ marginBottom: 16 }}>{lesson.title}</h1>
      {lesson.video_url ? (
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src={lesson.video_url}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
          />
        </div>
      ) : (
        <p>No video attached yet.</p>
      )}
    </main>
  );
}